import React , { useState, useCallback } from 'react';

import { Tabs,Tab,Box, TextField , Button } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@material-ui/styles';

import { useAuthContext } from '../context/auth';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor:  'white',
        width: 400,
        height: 350,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#63235A', 
        color: '#FFFFFF',
        float:'right',
        width: 120,
        '&:hover': {
            backgroundColor: '#3d1638',
        },
    },
    textfield: {
        '& label.Mui-focused': {
          color: 'gray',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#63235A',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'gray',
          },
          '&:hover fieldset': {
            borderColor: 'black',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#63235A',
          },
        },
      },
}));

function TabPanel({ children, value, index }) {
    return <div>{value === index && <Box p={1}>{children}</Box>}</div>;
}

export default function Login(){

    const [ , setIsAuthenticated ] = useAuthContext();
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
          <SwipeableViews onSwitching={(v) => setValue(v)} index={value}>
            <TabPanel value={value} index={0} >
                <TextField
                    className={classes.textfield}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email"
                    type="email"
                    id="login_email"
                />
                <TextField
                    className={classes.textfield}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Senha"
                    type="password"
                    id="login_password"
                />
                <Button variant="contained"
                        className={classes.button}
                        onClick={()=>{login(document.getElementById("login_email").value,
                                            document.getElementById("login_password").value)}}>Log In</Button>

            </TabPanel>
            <TabPanel value={value} index={1} >
                
                <TextField
                    className={classes.textfield}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Nome de usuário"
                    id="reg_name"
                />
                <TextField
                    className={classes.textfield}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email"
                    type="email"
                    id="reg_email"
                />
                <TextField
                    className={classes.textfield}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Senha"
                    type="password"
                    id="reg_password"
                />
                <Button variant="contained"  
                        className={classes.button}
                        onClick={()=>{register(document.getElementById("reg_name").value,
                                                document.getElementById("reg_email").value,
                                                document.getElementById("reg_password").value)}}>Cadastrar</Button>
            </TabPanel>
          </SwipeableViews>
        </div>
    )
};