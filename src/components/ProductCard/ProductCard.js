import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Divider,
  Button,
  CardContent,
  CardActions,
  ButtonBase,
  Grow,
} from "@material-ui/core";

import ToppingCard from "../ToppingCard/ToppingCard";

import vegIcon from "../../assets/images/card/veg.png";
import nonVegIcon from "../../assets/images/card/non-veg.png";
import rightArrow from "../../assets/images/card/right-arrow.png";

import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  const [size, setSize] = useState("MEDIUM");
  const [crust, setCrust] = useState("NEW-HAND-TOSSED");
  const [isFav, setIsFav] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [open, setOpen] = useState(true);

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  const handleChangeCrust = (event) => {
    setCrust(event.target.value);
  };

  const handleChangeFav = (value) => {
    setIsFav(!value);
  };

  const handleChangeCart = (value) => {
    setCartCount(value);
  };

  const handleChangeOpen = (value) => {
    console.log(!value);
    setOpen(!value);
  };

  return (
    <Card className={styles.root}>
      <CardMedia
        className={styles.media}
        image="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1920"
        title="Paella dish"
      >
        <div className={styles.priceContainer}>
          <i className={["fas fa-rupee-sign", styles.rupeeIcon].join(" ")}></i>
          <span className={styles.priceText}>&nbsp;395</span>
        </div>
        <img src={vegIcon} alt="" className={styles.iconSize} />
        <CardActions>
          <IconButton
            aria-label="add to favorites"
            className={styles.favoriteButton}
            onClick={() => {
              handleChangeFav(isFav);
            }}
            key={isFav}
          >
            <i
              className={isFav ? "fas fa-heart" : "far fa-heart"}
              color={isFav ? "red" : "white"}
            ></i>
          </IconButton>
        </CardActions>
        <Button
          variant="contained"
          classes={{ contained: styles.toppingButton }}
          endIcon={<img src={rightArrow} alt="" className={styles.arrowIcon} />}
          onClick={() => {
            handleChangeOpen(open);
          }}
        >
          Topping
        </Button>
        <Grow in={open}>
          <ToppingCard />
        </Grow>
      </CardMedia>
      <CardHeader
        title="Shrimp and Chorizo Paella"
        classes={{
          root: styles.header,
          title: styles.headerTitle,
        }}
      />
      <Divider />
      <div className={styles.inputContainer}>
        <FormControl className={styles.formControl}>
          <InputLabel shrink id="pizza-size-label">
            Size
          </InputLabel>
          <Select
            labelId="pizza-size-label"
            id="pizza-size"
            value={size}
            onChange={handleChangeSize}
            classes={{ selectMenu: styles.selectMenu }}
            className={styles.selectEmpty}
          >
            <MenuItem value="SMALL">Small</MenuItem>
            <MenuItem value="MEDIUM">Medium</MenuItem>
            <MenuItem value="LARGE">Large</MenuItem>
            <MenuItem value="EXTRA-LARGE">Extra Large</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={styles.formControl}>
          <InputLabel
            shrink
            id="pizza-crust-label"
            classes={{ root: styles.inputLabel }}
          >
            Crust
          </InputLabel>
          <Select
            labelId="pizza-crust-label"
            id="pizza-crust"
            value={crust}
            onChange={handleChangeCrust}
            classes={{ selectMenu: styles.selectMenu }}
            className={styles.selectEmpty}
          >
            <MenuItem value="NEW-HAND-TOSSED">New Hand Tossed</MenuItem>
            <MenuItem value="WHEAT-THIN-CRUST">Wheat Thin Crust</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Divider />
      <CardContent className={styles.cardContent}>
        {cartCount <= 0 ? (
          <Button
            variant="outlined"
            classes={{ outlined: styles.outlined }}
            onClick={() => {
              handleChangeCart(1);
            }}
          >
            Add Cart
          </Button>
        ) : (
          <div className={styles.cartContainer}>
            <ButtonBase
              onClick={() => {
                handleChangeCart(cartCount - 1);
              }}
            >
              <div
                key={cartCount}
                className={[styles.item, styles.button].join(" ")}
              >
                <i
                  className={
                    cartCount > 1 ? "fas fa-minus" : "fas fa-trash-alt"
                  }
                ></i>
              </div>
            </ButtonBase>
            <div className={[styles.item, styles.text].join(" ")}>
              {cartCount}
            </div>
            <ButtonBase
              onClick={() => {
                handleChangeCart(cartCount + 1);
              }}
            >
              <div className={[styles.item, styles.button].join(" ")}>
                <i className="fas fa-plus"></i>
              </div>
            </ButtonBase>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
