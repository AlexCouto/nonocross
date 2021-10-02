import React from 'react';

import { makeStyles, SwipeableDrawer, IconButton } from '@material-ui/core';
import { useState } from 'react';
import { Menu } from '@material-ui/icons';

import ChooseNonogram from './choose_nonogram';

const useStyles = makeStyles(theme => ({
    root: {
        '& label.Mui-focused': {
            color: 'white'
        }
    },
    swipeable: {
        width: 300,
        maxWidth: '80vw',
        backgroundColor: '#20242f'
    },
    menuButton: {
        color: 'white'
    }
}));

export default function SideMenu() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);


    return (
        <>
            <IconButton onClick={() => setOpen(true)}>
                <Menu className={classes.menuButton}/>
            </IconButton>
            <SwipeableDrawer classes={{ paper: classes.swipeable }}
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
            >
                
                <ChooseNonogram/>
            </SwipeableDrawer>
        </>
    );
}