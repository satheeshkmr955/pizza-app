import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";

import styles from "./ToppingCard.module.scss";

const ToppingCard = () => {
  const [item, setItem] = useState(false);

  const handleChange = (value) => {
    setItem(!value);
  };

  return (
    <Card classes={{ root: styles.root }}>
      <CardContent classes={{ root: styles.cardContent }}>
        <Typography className={styles.pos} color="textSecondary">
          Onion
        </Typography>
        <div className={styles.container}>
          <CardMedia
            className={styles.media}
            image="https://images.unsplash.com/photo-1467019972079-a273e1bc9173?w=320"
            title="Onion"
          />
          <Button
            variant="outlined"
            color={item ? "default" : "primary"}
            onClick={() => {
              handleChange(item);
            }}
            classes={{ root: styles.addButton }}
          >
            {item ? "REMOVE" : "ADD"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ToppingCard;
