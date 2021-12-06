import React from 'react';
import SideMenu from './side_menu.jsx'
import { makeStyles } from '@material-ui/styles';
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
    logout:{
        float: 'right',
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
            <section className={classes.logout}>
                <button onClick={()=>logout()}>Log Out</button>
            </section>
        </section>
    )
};