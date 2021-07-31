import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import firebase from "firebase";
import { Avatar, Badge } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: "transparent",
  },
  toolbar: {
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  toolbarTitle: {
    margin: 12,
  },
  links: {
    display: "flex",
  },
  profile: {
    display: "flex",
    alignItems: "center",
  },
  profileName: {
    margin: 5,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    display: "flex",
    flexFlow: "column wrap",
    // justifyContent: "center",
    alignItems: "center",
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const ColorButton = withStyles((theme) => ({
  root: {
    borderRadius: 8,
    color: "white",
    backgroundColor: green[700],
    "&:hover": {
      backgroundColor: green[800],
    },
  },
}))(Button);

function Dashboard({ user, page }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.logo}>
            <img height="52" src="/logo-clear.png" alt="logo" />
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              Procrasti-Champ
            </Typography>
          </div>
          <nav className={classes.links}>
            <Link
              variant="button"
              color="primary"
              href="#"
              className={classes.link}
            >
              Procrasti Board
            </Link>
            <Link
              variant="button"
              color="textSecondary"
              href="#"
              className={classes.link}
            >
              Start Game
            </Link>
          </nav>
          <div className={classes.profile}>
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar alt="profile" src={user.photoURL} />
            </StyledBadge>
            <Typography className={classes.profileName} variant="subtitle2">
              {user.displayName}
            </Typography>
            <Button
              href="#"
              color="inherit"
              variant="outlined"
              className={classes.link}
              onClick={() => firebase.auth().signOut()}
            >
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      {}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <img width="250" src="./eating-panda.gif" alt="logo" />
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          You are currently not in a game!
        </Typography>
        <ColorButton color="primary" variant="contained" size="large">
          Start Betting...
        </ColorButton>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main"></Container>
      {/* Footer */}
      {/* End footer */}
    </React.Fragment>
  );
}

export default Dashboard;
