import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  description: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function MediaCard({ ...props }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <div>
            <Typography gutterBottom variant="h5" component="h2">
              Información de envío
            </Typography>
          </div>
          <div className={classes.description}>
            <Typography variant="body1" color="textSecondary" component="p">
              {props.address && props.address.address
                ? `${props.address.address.address}`
                : "No encontrado"}
            </Typography>
          </div>
          <div className={classes.description}>
            <Typography variant="body1" color="textSecondary" component="p">
              {props.address && props.address.address
                ? `${props.address.address.notes}`
                : "No encontrado"}
            </Typography>
          </div>
          <div className={classes.description}>
            <Typography variant="body1" color="textSecondary" component="p">
              {props.address &&
              props.address.address &&
              props.address.address.locality
                ? `${props.address.address.locality.name}`
                : "No encontrado"}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
