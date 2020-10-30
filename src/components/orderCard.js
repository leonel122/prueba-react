import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

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

  const [user, setUser] = useState({});

  useEffect(() => {
    var token = localStorage.getItem("feathers-jwt");
    console.log(token);
    const user1 = jwt_decode(token);
    setUser(user1);
    console.log(user, "-------------");
    console.log(user1, "-------------");
  }, []);

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
              Fecha
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
              aling="left"
            >
              {props.order
                ? moment(props.order.order.createdAt).format(
                    "YYYY-MM-DD HH:mm:ss"
                  )
                : "No encontrado"}
            </Typography>
          </div>
          <div className={classes.description}>
            <Typography variant="body1" color="textSecondary" component="p">
              valor productos:
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
                    ? "#FF9C33"
                    : props.order.order.order_status_id == 3
                    ? "green"
                    : props.order.order.order_status_id == 4
                    ? "red"
                    : props.order.order.order_status_id == 5
                    ? "green"
                    : "red"
                  : "gray",
              }}
            >
              {props.order
                ? props.order.order.order_status_id == 1
                  ? "Pendiente por aceptar"
                  : props.order.order.order_status_id == 2
                  ? "Preparando productos"
                  : props.order.order.order_status_id == 3
                  ? "Enviada"
                  : props.order.order.order_status_id == 4
                  ? "Rechazada"
                  : props.order.order.order_status_id == 5
                  ? "Entregada"
                  : props.order.order.order_status_id == 6
                  ? "Cancelada"
                  : "Cancelada"
                : "No encontrado"}
            </Typography>
          </div>
          <div className={classes.description}>
            <Typography variant="body1" color="textSecondary" component="p">
              Ultima actualización
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.order
                ? moment(props.order.order.updatedAt).format(
                    "YYYY-MM-DD HH:mm:ss"
                  )
                : "No encontrado"}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.description}>
        {props.order &&
          props.order.order.order_status_id != 4 &&
          props.order.order.order_status_id != 5 &&
          props.order.order.order_status_id != 6 &&
          props.order.order.shop_id == user.shop_id && (
            <Button
              size="mediun"
              color="primary"
              style={{ backgroundColor: "green", color: "white" }}
              onClick={() => props.handleUpdate()}
            >
              {props.order && props.order.order.order_status_id == 1
                ? "Aceptar"
                : props.order.order.order_status_id == 2
                ? "enviar"
                : props.order.order.order_status_id == 3
                ? "Marcar entrega"
                : "Indefinido"}
            </Button>
          )}

        {props.order && props.order.order.order_status_id == 1 && (
          <Button
            size="small"
            color="primary"
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => props.handleRejected()}
          >
            Rechazar
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
