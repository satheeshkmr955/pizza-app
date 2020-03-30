import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Layout from "./container/Layout/Layout";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import Menu from "./pages/Menu/Menu";

import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <>
        <StylesProvider injectFirst>
          <Layout>
            <Switch>
              <Route path="/menu" component={Menu} />
              <Route path="/orders" component={Order} />
              <Route path="/" exact component={Home} />
            </Switch>
          </Layout>
        </StylesProvider>
      </>
    );
  }
}

export default App;
