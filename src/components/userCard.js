import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Button from "@material-ui/core/Button";

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
  const theme = useTheme();
  const upSm = useMediaQuery(theme.breakpoints.up("sm"));

  const redirectSocialRed = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <div>
            <Typography gutterBottom variant="h5" component="h2">
              Información del comprador
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
          <div className={classes.description} style={{ marginTop: 20 }}>
            <Button
              size="small"
              color="primary"
              style={{
                backgroundColor: "green",
                color: "white",
                height: 35,
                fontWeight: "bold",
              }}
              startIcon={<WhatsAppIcon style={{ color: "white" }} />}
              onClick={() => props.handleRejected()}
              onClick={() =>
                redirectSocialRed(
                  !upSm
                    ? `whatsapp://send?text=""&phone=+57${
                        props.metaData && props.metaData.user
                          ? `${props.metaData.user.phone}`
                          : "No encontrado"
                      }`
                    : `https://wa.me/+57${
                        props.metaData && props.metaData.user
                          ? `${props.metaData.user.phone}`
                          : "No encontrado"
                      }`
                )
              }
            >
              Enviar Whatsapp
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
