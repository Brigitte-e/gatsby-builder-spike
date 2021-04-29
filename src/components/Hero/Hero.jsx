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
    darkMode
  } = props;


  const useStyles = makeStyles(() =>
    createStyles({
      image: {
        width: '100vw'
      },
    }),
  );

  const classes = useStyles();

  return (
      <Box
        style={{ color: darkMode ? 'gray' : 'white' }}
        textAlign="center"
        paddingTop={`calc(${height}px/3)`}
      >
        <Typography variant="h2">{title}</Typography>
        <Image className={classes.image} image={image} />
      </Box>
  );
};
