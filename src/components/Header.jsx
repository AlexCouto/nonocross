import React from 'react';
import SideMenu from './side_menu.jsx'
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { useAuthContext } from '../context/auth';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root: {
        height: 50,
        backgroundColor: '#1c1c20'
    },
    left_header: {
        float: 'left'
    },
    title: {
        position: 'absolute',
        marginLeft: 40,
        float:'left',
        color: 'white',
        fontFamily:'Helvetica',
        fontSize: 30,
        marginTop: 8
    },
    logoutButton: {
        borderColor: 'white', 
        color: '#FFFFFF',
        float:'right',
        width: 100,
        marginRight: 10,
        marginTop: 6,
    }
}));

export default function Header(){
    const classes = useStyles();
    const [ isAuthenticated , setIsAuthenticated ] = useAuthContext();

    async function logout() {
        try {
            await axios.get('/api/auth/logout').then(function(){
                setIsAuthenticated(false);
            }).catch( function(error) { console.log(error) });
        }catch(error){
            console.error(error);
        }
    }

    return(
        <section className={classes.root}>
            <section className={classes.left_header}>
                { isAuthenticated ? <SideMenu /> : null}
                
            </section>
            <section className={classes.title}>
                NonoCross
            </section>
            <section >
                { isAuthenticated ? <Button variant="outlined" className={classes.logoutButton}onClick={()=>logout()}>LogOut</Button> : null}
            </section>
        </section>
    )
};