import React from 'react';
import SideMenu from './side_menu.jsx'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        height: 50,
        backgroundColor: '#2C3E50'
    },
    left_header: {
        float: 'left'
    }
}));

export default function Header(){
    const classes = useStyles();

    return(
        <section className={classes.root}>
            <section className={classes.left_header}>
                <SideMenu />
            </section>
        </section>
    )
};