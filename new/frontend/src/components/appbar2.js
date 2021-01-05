import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory} from "react-router-dom";

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
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Header() {
  const { header } = useStyles();
  const classes = useStyles();

  const history = useHistory();
  const goAPI = () => history.push('api');
  const goHOME = () => history.push('');
  const goCREDIT = () => history.push('credit');
  const goTRANS = () => history.push('transparency');
  const goFAQ = () => history.push('faq');

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar>
        <img className={classes.menuButton} src="/img/HG-Logo.png" alt="Remembering your passwords for you." style={{ width: 140, height: 'auto' }} />
        <div className={classes.title} />
        <Button onClick={goHOME} color="inherit">Home</Button>
        <Button onClick={goAPI}color="inherit">API</Button>
        <Button onClick={goTRANS} color="inherit">Transparency</Button>
        <Button onClick={goFAQ} color="inherit">FAQ</Button>
        <Button onClick={goCREDIT} color="inherit">Credits</Button>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <img className={classes.menuButton} src="/img/HG-Logo.png" alt="Remembering your passwords for you." style={{ width: 140, height: 'auto' }} />
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <Button onClick={goHOME} color="inherit">Home</Button>
          <Button onClick={goAPI}color="inherit">API</Button>
          <Button onClick={goTRANS} color="inherit">Transparency</Button>
          <Button onClick={goFAQ} color="inherit">FAQ</Button>
          <Button onClick={goCREDIT} color="inherit">Credits</Button>
        </Drawer>

      </Toolbar>
    );
  };

  return (
    <header>
      <div className={classes.root}>
        <AppBar position="static">
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </div>
    </header>
  );
}