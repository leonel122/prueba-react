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
              Orden No. {props.order ? props.order.order.id : "No encontrado"}
            </Typography>
          </div>
          <div className={classes.description}>
            <Typography variant="body1" color="textSecondary" component="p">
              valor productos:
              {props.order ? props.order.order.value : "No encontrado"}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
              aling="left"
            >
              {props.order ? props.order.order.value : "No encontrado"}
            </Typography>
          </div>
          <div className={classes.description}>
            <Typography variant="body1" color="textSecondary" component="p">
              costo de envio:
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {props.order ? props.order.order.shipping_cost : "No encontrado"}
            </Typography>
          </div>
          <div className={classes.description}>
            <Typography variant="body1" color="textSecondary" component="p">
              valor total:
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {props.order ? props.order.order.total_value : "No encontrado"}
            </Typography>
          </div>
          <div className={classes.description}>
            <Typography variant="body1" color="textSecondary" component="p">
              Estado
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                color: props.order
                  ? props.order.order.order_status_id == 1
                    ? "red"
                    : props.order.order.order_status_id == 2
                    ? "green"
                    : props.order.order.order_status_id == 3
                    ? "green"
                    : props.order.order.order_status_id == 4
                    ? "red"
                    : "No encontrado"
                  : "gray",
              }}
            >
              {props.order
                ? props.order.order.order_status_id == 1
                  ? "Pendiente por aprobar"
                  : props.order.order.order_status_id == 2
                  ? "Aceptada"
                  : props.order.order.order_status_id == 3
                  ? "send"
                  : props.order.order.order_status_id == 4
                  ? "Rechazada"
                  : "No encontrado"
                : "No encontrado"}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.description}>
        <Button
          size="mediun"
          color="primary"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Aceptar
        </Button>
        <Button
          size="small"
          color="primary"
          style={{ backgroundColor: "red", color: "white" }}
        >
          Rechazar
        </Button>
      </CardActions>
    </Card>
  );
}
