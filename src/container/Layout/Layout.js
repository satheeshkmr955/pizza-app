import React, { Component } from "react";
import PropTypes from "prop-types";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./Layout.module.scss";

class Layout extends Component {
  render() {
    return (
      <div className={styles.layoutContainer}>
        <NavBar />
        <div className={styles.main}>{this.props.children}</div>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
