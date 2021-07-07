import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth:1000,
    margin:'0 auto'

  },
  paper: {
      
      marginTop:'20px',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Gride() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper} elevation={3}>x1</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={3}>x2</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={3}>x3</Paper>
        </Grid>
      </Grid>
      
    </div>
  );
}
