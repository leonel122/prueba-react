import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
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

  console.log(props, "---------------");
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <div>
            <Typography gutterBottom variant="h5" component="h2">
              Informacion del comprador
            </Typography>
          </div>
          <div className={classes.description}>
            <Typography variant="body1" color="textSecondary" component="p">
              {props.metaData && props.metaData.user
                ? `${props.metaData.user.first_name} ${props.metaData.user.last_name}`
                : "No encontrado"}
            </Typography>
          </div>
          <div className={classes.description}>
            <Typography variant="body1" color="textSecondary" component="p">
              {props.metaData && props.metaData.user
                ? `${props.metaData.user.phone}`
                : "No encontrado"}
            </Typography>
          </div>
          <div className={classes.description}>
            <Typography variant="body1" color="textSecondary" component="p">
              {props.metaData && props.metaData.user
                ? `${props.metaData.user.email}`
                : "No encontrado"}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
