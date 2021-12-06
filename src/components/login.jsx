import React from 'react';
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import { useAuthContext } from '../context/auth';

const useStyles = makeStyles(theme => ({
    root: {
        height: 50,
        backgroundColor: '#1c1c20'
    },
    textinput: {
        fontFamily:' monospace',
        height: 30,
        fontSize: 18,
        width: 340,
        marginTop: 10,
        justifyContent: 'left',
        borderWidth: 4,
        borderRadius: 0.5,
    }
}));

export default function Login(){

    const [ isAuthenticated, setIsAuthenticated ] = useAuthContext();

    async function login(email,password) {
        try {
            await axios.post('/api/auth/login', {
                email: email,
                password: password
              })
              .then(function (response) {
                console.log(response)
                if(response.data.success === true){
                    setIsAuthenticated(true);
                }
              })
              .catch(function (error) {
                console.log(error);
              });
        } catch (error) {
            console.error(error);
        }
    }
    
    const classes = useStyles();

    return(
        <Grid>
            <input  id="email" className={classes.textinput} placeholder="email"/>
            <input  id="password" className={classes.textinput} placeholder="password"/>
            <button onClick={()=>{login(document.getElementById("email").value,document.getElementById("password").value)}}>Log In</button>
        </Grid>
    )
};