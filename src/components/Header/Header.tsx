
import React from 'react'
import Link from '../Link/Link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Image } from '@builder.io/react';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
 

const useStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      background: '#2a3048'
    },
    container: {
      maxWidth: '1200px',
      width: '100%',
      margin: '0 auto'
    },
    logo: {
      maxHeight: '50px'
    },
    link: {
      color: '#fff',
      fontWeight: 600,
      fontSize: 16,
      marginLeft: 46,
      display: 'inline-block',
      paddingBottom: 0
    },
    drawer: {
      padding: '0 40px 40px',
      minWidth: '300px',

      '& a p': {
        color: '#fff',
        paddingBottom: 30,
      }
    },
  }),
);

export const Header = (props: any) => {
  const classes = useStyles();

  const linksList = [
    {
      path:'/',
      name: "Home"
    },
    {
      path:'/about',
      name: "About"
    },
  ]

  const getMenuList = () => (
   linksList?.map((link: any, i: number) => (
      <a href={link.path} key={i}>
        <Typography className={classes.link}>{link.name}</Typography>
      </a>
    ))
  )

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={2}>
              <Link to="/">
                <Image className={classes.logo} image={props.image} />
              </Link>
            </Grid>
            <Grid item xs={10} container justify='flex-end' alignItems="center">
              {getMenuList()}
            </Grid>
          </Grid>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header

