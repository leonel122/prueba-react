import React, { Component } from "react";
import { Title } from "./";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Show, SimpleShowLayout } from "react-admin";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import { dealsService } from "../../utils/Api";
import { Link } from "react-router-dom";
import moment from "moment";

export default class PostShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deal: {
        project: {
          name: "",
          project_type_option: {}
        },
        company: {},
        products: [
          {
            unit_measure: {},
            product_category: {}
          }
        ],
        deal_delivery_info: {
          city: {},
          state: {}
        }
      }
    };
  }

  async feachData() {
    await Promise.all([
      dealsService
        .find({ query: { id: this.props.match.params.id } })
        .then(it => this.setState({ deal: it.data[0] }))
    ]);
  }

  componentDidMount() {
    this.feachData();
  }

  render() {
    const { deal } = this.state;
    const { products, product_category } = deal;
    return (
      <Show {...this.props} title={<Title />}>
        <SimpleShowLayout>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h2>Negocio</h2>
              <Card>
                <CardContent>
                  <Grid container spacing={4}>
                    <Grid fullWidth item xs={4}>
                      <Typography color="textSecondary">Nombre</Typography>
                      <Typography>{deal.name}</Typography>
                      <Typography color="textSecondary">Tipo</Typography>
                      <Typography>{deal.deal_type}</Typography>
                      <Typography color="textSecondary">
                        Tipo de compra
                      </Typography>
                      <Typography color="textPrimary">
                        {deal.purchase_type}
                      </Typography>
                    </Grid>
                    <Grid fullWidth item xs={4}>
                      <Typography color="textSecondary">
                        Fecha de entrega
                      </Typography>
                      <Typography color="textPrimary">
                        {moment(deal.delivery_date)
                          .locale("es")
                          .format("LL")}
                      </Typography>
                      <Typography color="textSecondary">Fecha final</Typography>
                      <Typography color="textPrimary">
                        {moment(deal.process_end_date)
                          .locale("es")
                          .format("LL")}
                      </Typography>
                      <Typography color="textSecondary">
                        Rete calidad
                      </Typography>
                      <Typography color="textPrimary">
                        {deal.require_rete_calidad == "false" ? "No" : "Si"}
                      </Typography>
                    </Grid>
                    <Grid fullWidth item xs={4}>
                      <Typography color="textSecondary">
                        Años de experiencia
                      </Typography>
                      <Typography color="textPrimary">
                        {deal.minimum_years_of_experiencie}
                        <Typography color="textSecondary">Estado</Typography>
                      </Typography>
                      <Typography color="textPrimary">{deal.status}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <h2>Proyecto</h2>
              <Card>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid fullWidth item xs={12}>
                      <Typography color="textSecondary">Nombre</Typography>
                      <Typography>{deal.project.name}</Typography>
                      <Typography color="textSecondary">
                        Tipo de proyecto
                      </Typography>
                      <Typography>
                        {deal.project.project_type_option.name}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}></Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <div>
                <Link to="/users">
                  <h2>Empresa</h2>
                </Link>
              </div>
              <Card>
                <CardContent>
                  <Grid container spacing={4}>
                    <Grid fullWidth item xs={6}>
                      <Typography color="textSecondary">Nombre</Typography>
                      <Typography>{deal.company.name}</Typography>
                      <Typography color="textSecondary">Nit</Typography>
                      <Typography>{deal.company.nit}</Typography>
                    </Grid>
                    <Grid fullWidth item xs={6}>
                      <Typography color="textSecondary">Celular</Typography>
                      <Typography color="textPrimary">
                        {deal.company.cell_phone}
                      </Typography>
                      <Typography color="textSecondary">Telefono</Typography>
                      <Typography color="textPrimary">
                        {deal.company.phone}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}></Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <div>
                <Link to="/users">
                  <h2>Información de envio</h2>
                </Link>
              </div>
              <Card>
                <CardContent>
                  <Grid container spacing={4}>
                    <Grid fullWidth item xs={6}>
                      <Typography color="textSecondary">
                        Nombre de contacto
                      </Typography>
                      <Typography>
                        {deal.deal_delivery_info.contact_name}
                      </Typography>
                      <Typography color="textSecondary">Ciudad</Typography>
                      <Typography>
                        {deal.deal_delivery_info.city.name}
                      </Typography>
                    </Grid>
                    <Grid fullWidth item xs={6}>
                      <Typography color="textSecondary">Celular</Typography>
                      <Typography color="textPrimary">
                        {deal.deal_delivery_info.cell_phone}
                      </Typography>
                      <Typography color="textSecondary">Dirección</Typography>
                      <Typography color="textPrimary">
                        {deal.deal_delivery_info.address}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}></Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8}>
              <h2>Listado de productos</h2>
              <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nombres</TableCell>
                      <TableCell>Unit medi</TableCell>
                      <TableCell>Categoria</TableCell>
                      <TableCell>Cantidad</TableCell>
                      <TableCell>Presupuesto</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map(product => (
                      <TableRow key={product.id}>
                        <TableCell component="th" scope="row">
                          {product.name}
                        </TableCell>
                        <TableCell>{product.unit_measure.name}</TableCell>
                        <TableCell>{product.product_category.name}</TableCell>
                        <TableCell>{product.budget}</TableCell>
                        <TableCell>{product.quantity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        </SimpleShowLayout>
      </Show>
    );
  }
}
