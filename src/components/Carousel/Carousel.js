import React, { Component } from "react";
import { Carousel } from "antd";

import "antd/dist/antd.css";
import "./override-antd.css";
import styles from "./Carousel.module.scss";

export default class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const imageArr = [
      {
        img:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920",
      },
      {
        img:
          "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=1920",
      },
      {
        img:
          "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1920",
      },
    ];

    return (
      <div className={styles.carouselContainer}>
        <Carousel autoplay>
          <div className={styles.imageContainer}>
            <img src={imageArr[0].img} alt="" />
          </div>
          <div className={styles.imageContainer}>
            <img src={imageArr[1].img} alt="" />
          </div>
          <div className={styles.imageContainer}>
            <img src={imageArr[2].img} alt="" />
          </div>
        </Carousel>
      </div>
    );
  }
}
