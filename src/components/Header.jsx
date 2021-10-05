import React from 'react';
import SideMenu from './side_menu.jsx'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        height: 50,
        backgroundColor: '#1c1c20'
    },
    left_header: {
        float: 'left'
    },
    title: {
        float:'left',
        color: 'white',
        fontFamily:'Helvetica',
        fontSize: 30,
        marginTop: 8
    }
}));

export default function Header(){
    const classes = useStyles();

    return(
        <section className={classes.root}>
            <section className={classes.left_header}>
                <SideMenu />
            </section>
            <section className={classes.title}>
                NonoCross
            </section>
        </section>
    )
};