import React, { Component } from "react";

import styles from "./Footer.module.scss";

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.icons}>
          <div className={styles.item}>
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className={styles.item}>
            <i className="fab fa-twitter"></i>
          </div>
          <div className={styles.item}>
            <i className="fab fa-instagram"></i>
          </div>
          <div className={styles.item}>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
        <div>All Rights Reserved. Copyright © ABZ Pizza Ltd</div>
      </div>
    );
  }
}

export default Footer;
