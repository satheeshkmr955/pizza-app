import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

import styles from "./NavBar.module.scss";

class NavBar extends Component {
  render() {
    return (
      <div className={styles.navBar}>
        <AppBar position="static">
          <Toolbar className={styles.toolbar}>
            <IconButton
              edge="start"
              className={styles.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              className={styles.title}
              onClick={() => {
                console.log("home");
              }}
            >
              ABZ Pizza
            </Typography>
            <Button color="inherit">
              <i
                className={[styles.personIcon, "fas fa-user-circle fa-2x"].join(
                  " "
                )}
              ></i>
              <div className={styles.loginText}>
                <div>My Account</div>
                <div className={styles.innerText}>Login / Signup</div>
              </div>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;
