import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable({ ...props }) {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: matches ? "100%" : "352px" }}
    >
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          Productos comprados
        </Typography>
      </div>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">id</TableCell>
            <TableCell align="center">nombre del producto</TableCell>
            <TableCell align="center">Precio unitario</TableCell>
            <TableCell align="center">cantidad</TableCell>
            <TableCell align="center">Total</TableCell>
            <TableCell align="center">Notas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.orderDetails.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" align="center">
                {row.id}
              </TableCell>
              <TableCell align="center">
                {JSON.parse(row.meta_product).name}
              </TableCell>
              <TableCell align="center">
                {JSON.parse(row.meta_product).value}
              </TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">
                {JSON.parse(row.meta_product).value * row.quantity}
              </TableCell>
              <TableCell
                size="small"
                align="justify"
                style={{ maxWidth: "101px" }}
              >
                {row.notes}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
