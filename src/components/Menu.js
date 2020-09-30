import React, { Component } from "react";
import PropTypes from "prop-types";
import SubMenu from "./subMenu";
import {
  Settings,
  LocationSearching,
  Category,
  CategoryTwoTone,
  CardMembership,
  BusinessCenter,
  Business,
} from "@material-ui/icons";
import { MenuItemLink, Responsive, DashboardMenuItem } from "react-admin";
import { Icon } from "antd";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import StorefrontIcon from "@material-ui/icons/Storefront";
import GridOnIcon from "@material-ui/icons/GridOn";
import ReorderIcon from "@material-ui/icons/Reorder";
import ImageIcon from "@material-ui/icons/Image";
import ScheduleIcon from "@material-ui/icons/Schedule";

export default class Menu extends Component {
  state = {
    menuCatalog: false,
    menuSales: false,
    menuCustomers: false,
    menuConfig: false,
    dense: false,
    role: "user",
  };

  static propTypes = {
    onMenuClick: PropTypes.func,
    logout: PropTypes.object,
  };

  handleToggle = (menu) => {
    this.setState({ [menu]: !this.state[menu] });
  };

  async componentDidMount() {
    let role = await localStorage.getItem("permissions");
    console.log(role);
    this.setState({ role: role });
  }

  render() {
    const { onMenuClick, logout } = this.props;
    const { role } = this.state;

    console.log(role);
    if (role == "admin") {
      console.log("-------------");
    }
    console.log(role[0], "ROLE");
    return (
      <div>
        <MenuItemLink
          className={"menuItems"}
          to={`/orders`}
          primaryText={"Ordenes"}
          onClick={onMenuClick}
          leftIcon={<ReorderIcon />}
        />
        <MenuItemLink
          className={"menuItems"}
          to={`/shipping-cost`}
          primaryText={"Costo de envio"}
          onClick={onMenuClick}
          leftIcon={<LocalShippingIcon />}
        />
        <MenuItemLink
          className={"menuItems"}
          to={`/users`}
          primaryText={role == '"admin"' ? "Usuarios" : "Mi usuario"}
          onClick={onMenuClick}
          leftIcon={<Icon type="user-add" />}
        />
        <MenuItemLink
          className={"menuItems"}
          to={`/shops`}
          primaryText={role == '"admin"' ? "Tiendas" : "Mi tienda"}
          onClick={onMenuClick}
          leftIcon={<StorefrontIcon />}
        />
        <MenuItemLink
          className={"menuItems"}
          to={`/products`}
          primaryText={role == '"admin"' ? "Productos" : "Mis Productos"}
          onClick={onMenuClick}
          leftIcon={<GridOnIcon />}
        />
        <MenuItemLink
          className={"menuItems"}
          to={`/schedule`}
          primaryText={"Horario"}
          onClick={onMenuClick}
          leftIcon={<ScheduleIcon />}
        />
        {role == '"admin"'
          ? [
              <MenuItemLink
                className={"menuItems"}
                to={`/banners`}
                primaryText={"Banners"}
                onClick={onMenuClick}
                leftIcon={<ImageIcon />}
              />,
              <MenuItemLink
                className={"menuItems"}
                to={`/cms`}
                primaryText={"cms"}
                onClick={onMenuClick}
                leftIcon={<ScheduleIcon />}
              />,
              <SubMenu
                handleToggle={() => this.handleToggle("menuConfig")}
                isOpen={this.state.menuConfig}
                /* sidebarIsOpen={open} */
                name="Configuraciones"
                icon={<Icon type="read" />}
                dense={this.state.dense}
              >
                ,
                <MenuItemLink
                  className={"menuItems"}
                  to={`/categories`}
                  primaryText={"Categorias"}
                  onClick={onMenuClick}
                  leftIcon={<CategoryTwoTone type="read" />}
                />
              </SubMenu>,
            ]
          : null}
        <Responsive
          small={logout}
          medium={null} // Pass null to render nothing on larger devices
        />
      </div>
    );
  }
}
