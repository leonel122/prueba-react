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
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
import { Grid } from "@material-ui/core";
import {
  companiesUserService,
  usersService,
  companiesService,
  companiesServicesCategoriesService,
  servicesCategories,
  companyProductsCategories
} from "../../utils/Api";
import { Link } from "react-router-dom";

export default class PostShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies_users: [],
      users: [],
      company: {},
      companiesServicesCategoriesService: [],
      company_services: [],
      company_products_categories: []
    };
  }

  async feachData() {
    await Promise.all([
      companiesUserService
        .find({
          query: { company_id: this.props.match.params.id, $limit: 100000 }
        })
        .then(it =>
          usersService
            .find({
              query: {
                id: {
                  $in: it.data.map(it => it.user_id)
                }
              }
            })
            .then(it => this.setState({ users: it.data }))
        ),
      companiesService
        .find({
          query: { id: this.props.match.params.id }
        })
        .then(it => this.setState({ company: it.data[0] })),
      companiesServicesCategoriesService
        .find({
          query: { company_id: this.props.match.params.id }
        })
        .then(it =>
          servicesCategories
            .find({
              query: {
                id: { $in: it.data.map(it => it.service_categories_id) }
              }
            })
            .then(it => this.setState({ company_services: it.data }))
        ),
      companyProductsCategories
        .find({
          query: { company_id: this.props.match.params.id }
        })
        .then(it => this.setState({ company_products_categories: it.data }))
    ]);

    // console.log(this.state);
  }

  componentDidMount() {
    this.feachData();
  }

  removeCategory(id, type) {
    if (type == "product") {
      companyProductsCategories.remove(id).then(() => this.feachData());
    } else
      companiesServicesCategoriesService
        .remove(id)
        .then(() => this.feachData());
  }

  render() {
    const {
      users,
      company,
      company_services,
      company_products_categories
    } = this.state;
    return (
      <Show {...this.props} title={<Title />}>
        <SimpleShowLayout>
          <Grid container spacing={8}>
            <Grid item xs={4}>
              <h2>Datos de la empresa</h2>
              <Card>
                <CardContent>
                  <Grid container spacing={8}>
                    <Grid fullWidth item xs={6}>
                      <Typography color="textSecondary">Nombre</Typography>
                      <Typography>{company.name}</Typography>
                      <Typography color="textSecondary">Nit</Typography>
                      <Typography>{company.nit}</Typography>
                      <Typography color="textSecondary">Estado</Typography>
                      <Typography color="textPrimary">
                        {company.status}
                      </Typography>
                      <Typography color="textSecondary">Tipo</Typography>
                      <Typography color="textPrimary">
                        {company.type}
                      </Typography>
                    </Grid>
                    <Grid fullWidth item xs={6}>
                      <Typography color="textSecondary">Dirección</Typography>
                      <Typography color="textPrimary">
                        {company.address}
                      </Typography>
                      <Typography color="textSecondary">celular</Typography>
                      <Typography color="textPrimary">
                        {company.cell_phone}
                      </Typography>
                      <Typography color="textSecondary">Telefono</Typography>
                      <Typography color="textPrimary">
                        {company.phone}
                      </Typography>
                      <Typography color="textSecondary">
                        Tipo de servicios
                      </Typography>
                      <Typography color="textPrimary">
                        {company.type_service}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}></Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8}>
              <h2>Listado de usuarios</h2>
              <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nombres</TableCell>
                      <TableCell align="right">Correo</TableCell>
                      <TableCell align="right">Numero de telefono</TableCell>
                      <TableCell align="right">Ver</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map(user => (
                      <TableRow key={user.id}>
                        <TableCell component="th" scope="row">
                          {`${user.first_name} ${user.last_name}`}
                        </TableCell>
                        <TableCell align="right">{user.email}</TableCell>
                        <TableCell align="right">{user.phone}</TableCell>
                        <TableCell align="right">
                          <Link to={`/users/${user.id}`}>
                            {" "}
                            <RemoveRedEye />
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <h2>Listado de categorias de productos</h2>
              <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Ruta</TableCell>
                      <TableCell align="right">Eliminar</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {company_products_categories.length > 0 &&
                      company_products_categories.map(
                        company_products_category => (
                          <TableRow key={company_products_category.id}>
                            <TableCell component="th" scope="row">
                              {`${company_products_category.category_name}`}
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {`${company_products_category.path_to_product_category}`}
                            </TableCell>
                            <TableCell align="right">
                              <RemoveRedEye
                                color="error"
                                onClick={() =>
                                  this.removeCategoryService(
                                    company_products_category.id,
                                    "product"
                                  )
                                }
                              />
                            </TableCell>
                          </TableRow>
                        )
                      )}{" "}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <h2>Listado de categorias de servicios</h2>
              <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nombre</TableCell>
                      <TableCell align="right">Eliminar</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {company_services.length > 0 &&
                      company_services.map(company_service => (
                        <TableRow key={company_service.id}>
                          <TableCell component="th" scope="row">
                            {`${company_service.name}`}
                          </TableCell>
                          <TableCell align="right">
                            <RemoveRedEye
                              color="error"
                              onClick={() =>
                                this.removeCategoryService(
                                  company_service.id,
                                  "service"
                                )
                              }
                            />
                          </TableCell>
                        </TableRow>
                      ))}{" "}
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
