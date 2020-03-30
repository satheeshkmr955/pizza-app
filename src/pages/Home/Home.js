import React, { Component } from "react";

import Carousel from "../../components/Carousel/Carousel";
import ProductCard from "../../components/ProductCard/ProductCard";
import ToppingCard from "../../components/ToppingCard/ToppingCard";

import styles from "./Home.module.scss";

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        {/* <div>
          <Carousel />
        </div> */}
        <div>
          <ProductCard />
        </div>
        <div>
          <ToppingCard />
        </div>
      </div>
    );
  }
}

export default Home;
