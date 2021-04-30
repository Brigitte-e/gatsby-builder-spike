import React from 'react';
import { Image } from '@builder.io/react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core';

export const Hero = props => {
  const {
    image,
    title,
    height,
  } = props;


  const useStyles = makeStyles(() =>
    createStyles({
      box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      },
      image: {
        position: 'absolute',
        left: 0,
        top: 0,
        objectFit: 'cover',
        width: '100%',
        height: height ? height : '100%'
      },
      title: {
        zIndex: 9,
        color: '#fff',
        maxWidth: '600px',
        fontSize: '76px'
      }
    }),
  );

  const classes = useStyles();

  return (
      <Box
        className={classes.box}
        textAlign="center"
      >
        <Typography className={classes.title} variant="h2">{title}</Typography>
        <Image className={classes.image} image={image} />
      </Box>
  );
};
