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

const Demo = () => <div>Hola</div>;
export default class Menu extends Component {
  state = {
    menuCatalog: false,
    menuSales: false,
    menuCustomers: false,
    menuConfig: false,
    dense: false,
  };

  static propTypes = {
    onMenuClick: PropTypes.func,
    logout: PropTypes.object,
  };

  handleToggle = (menu) => {
    this.setState({ [menu]: !this.state[menu] });
  };

  render() {
    const { onMenuClick, logout } = this.props;
    return (
      <div>
        <SubMenu
          handleToggle={() => this.handleToggle("menuConfig")}
          isOpen={this.state.menuConfig}
          /* sidebarIsOpen={open} */
          name="Configuraciones"
          icon={<Icon type="read" />}
          dense={this.state.dense}
        >
          <MenuItemLink
            className={"menuItems"}
            to={`/categories`}
            primaryText={"Categorias"}
            onClick={onMenuClick}
            leftIcon={<CategoryTwoTone type="read" />}
          />
          <MenuItemLink
            className={"menuItems"}
            to={`/unit-measure`}
            primaryText={"Unicades de medidas"}
            onClick={onMenuClick}
            leftIcon={<CardMembership type="read" />}
          />
        </SubMenu>
        <MenuItemLink
          className={"menuItems"}
          to={`/users`}
          primaryText={"Usuarios"}
          onClick={onMenuClick}
          leftIcon={<Icon type="user-add" />}
        />
        <Responsive
          small={logout}
          medium={null} // Pass null to render nothing on larger devices
        />
      </div>
    );
  }
}
