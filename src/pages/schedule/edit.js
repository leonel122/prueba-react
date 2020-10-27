import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { scheduleService } from "../../utils/Api";
import TextField from "@material-ui/core/TextField";
import { useNotify, useRedirect, useRefresh } from "react-admin";

import { KeyboardTimePicker } from "@material-ui/pickers";

const days = [
  { id: "0", name: "Domingo" },
  { id: "1", name: "Lunes" },
  { id: "2", name: "Martes" },
  { id: "3", name: "Miercoles" },
  { id: "4", name: "Jueves" },
  { id: "5", name: "Viernes" },
  { id: "6", name: "Sabado" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function MediaCard({ ...props }) {
  const classes = useStyles();
  const notify = useNotify();
  const redirect = useRedirect();
  const refresh = useRefresh();

  const [schedule, setSchedule] = useState({});
  const [status, setStatus] = useState("active");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");

  useEffect(() => {
    fetchData();
  }, [0]);

  const fetchData = () => {
    scheduleService.get(props.id).then((it) => {
      setStartHour(it.start_hour);
      setEndHour(it.end_hour);
      setSchedule(it);
      setStatus(it.status);
    });
  };

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleChangeStartHour = (data) => {
    setStartHour(data.target.value);
  };
  const handleChangeEndHour = (data) => {
    setEndHour(data.target.value);
  };

  const sendData = async (id) => {
    console.log(status, startHour, endHour);

    await scheduleService
      .patch(id, {
        status: status,
        start_hour: startHour,
        end_hour: endHour,
      })
      .then((it) => onSuccess());
  };

  const onSuccess = () => {
    notify(`Se guardo el horario.`);
    redirect("/schedule");
    refresh();
  };

  console.log(
    schedule.day ? days.find((it) => it.id == schedule.day).name : ""
  );
  // console.log(startHour, "---------------");
  return (
    <Container {...props}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              id="filled-basic"
              label="Dia"
              variant="filled"
              fullWidth
              value={`${
                schedule.day
                  ? days.find((it) => it.id == schedule.day).name
                  : ""
              }`}
              disabled
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputLabel
              id="demo-simple-select-label"
              style={{ textAlign: "left" }}
            >
              se abre la tienda?
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={`${status}`}
              fullWidth
              onChange={handleChange}
              style={{ textAlign: "left" }}
            >
              <MenuItem value={"active"}>Si</MenuItem>
              <MenuItem value={"inactive"}>No</MenuItem>
            </Select>
          </Grid>
        </Grid>
        {status == "active" && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                id="time"
                label="Abro a las"
                type="time"
                value={`${startHour}`}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                fullWidth
                onChange={handleChangeStartHour}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="time"
                label="Cierro a las"
                type="time"
                value={`${endHour}`}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                fullWidth
                onChange={handleChangeEndHour}
              />
            </Grid>
          </Grid>
        )}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => sendData(props.id)}
            >
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
