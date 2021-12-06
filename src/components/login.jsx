import React from 'react';
import { Tabs,Tab,Box } from '@material-ui/core';
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import { useAuthContext } from '../context/auth';
import { useState, useCallback } from 'react';
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor:  'white',
        height: 300,

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

function TabPanel({ children, value, index }) {
    return <div>{value === index && <Box p={1}>{children}</Box>}</div>;
}

export default function Login(){

    const [ isAuthenticated, setIsAuthenticated ] = useAuthContext();
    const [value, setValue] = useState(0);

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
    
    async function register(username,email,password) {
        try {
            await axios.post('/api/auth/register', {
                username: username,
                email: email,
                password: password
              })
              .then(function (response) {
                console.log(response)
              })
              .catch(function (error) {
                console.log(error);
              });
        } catch (error) {
            console.error(error);
        }
    }


    const handleChange = useCallback((event, newValue) => {
        setValue(newValue);
      }, []);

    const classes = useStyles();

    return(
        <div className={classes.container}>
        <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{style: {backgroundColor:"#63235A"}}}
            textColor='primary'
            variant='fullWidth'
          >
            <Tab label={"Login"} style={{color:"#63235A"}}/>
            <Tab label={"Cadastro"} style={{color:"#63235A"}}/>
          </Tabs>
          <SwipeableViews
            onSwitching={(v) => setValue(v)}
            index={value}
          >
    
            <TabPanel value={value} index={0} >
            <Grid>
                <div><input  id="login_email" className={classes.textinput} placeholder="email"/></div>
                <div><input  id="login_password" className={classes.textinput} placeholder="senha"/></div>
                <div><button onClick={()=>{login(document.getElementById("login_email").value,document.getElementById("login_password").value)}}>Log In</button></div>
            </Grid>
            </TabPanel>
            <TabPanel value={value} index={1} >

                <div><input  id="reg_name" className={classes.textinput} placeholder="nome"/></div>
                <div><input  id="reg_email" className={classes.textinput} placeholder="email"/></div>
                <div><input  id="reg_password" className={classes.textinput} placeholder="senha"/></div>
                <div><button onClick={()=>{register(document.getElementById("reg_name").value,
                                                document.getElementById("reg_email").value,
                                                document.getElementById("reg_password").value)}}>Cadastrar</button></div>
            </TabPanel>
          
          </SwipeableViews>
        </div>
    )
};