import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const goAPI = () => history.push('api');
  const goHOME = () => history.push('');
  const goCREDIT = () => history.push('credit');
  const goTRANS = () => history.push('transparency');
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img className={classes.menuButton} src="/img/HG-Logo.png" alt="Remembering your passwords for you." style={{ width: 140, height: 'auto' }} />
          <div className={classes.title} />
          <Button onClick={goHOME} color="inherit">Home</Button>
          <Button onClick={goAPI}color="inherit">API</Button>
          <Button onClick={goTRANS} color="inherit">Transparency</Button>
          <Button onClick={goCREDIT} color="inherit">Credits</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
