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
  Business
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
    dense: false
  };

  static propTypes = {
    onMenuClick: PropTypes.func,
    logout: PropTypes.object
  };

  handleToggle = menu => {
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
            to={`/configurations`}
            primaryText={"Configuraciones"}
            onClick={onMenuClick}
            leftIcon={<Settings type="read" />}
          />
          <MenuItemLink
            className={"menuItems"}
            to={`/deal-required-documents-options`}
            primaryText={"Documentos requeridos"}
            onClick={onMenuClick}
            leftIcon={<Settings type="read" />}
          />
          <MenuItemLink
            className={"menuItems"}
            to={`/locations-cities`}
            primaryText={"Ciudades"}
            onClick={onMenuClick}
            leftIcon={<LocationSearching type="read" />}
          />
          <MenuItemLink
            className={"menuItems"}
            to={`/locations-states`}
            primaryText={"Departamentos"}
            onClick={onMenuClick}
            leftIcon={<LocationSearching type="read" />}
          />
          <MenuItemLink
            className={"menuItems"}
            to={`/services-categories`}
            primaryText={"Categorias de servicios"}
            onClick={onMenuClick}
            leftIcon={<Category type="read" />}
          />
          <MenuItemLink
            className={"menuItems"}
            to={`/categories`}
            primaryText={"Categorias"}
            onClick={onMenuClick}
            leftIcon={<CategoryTwoTone type="read" />}
          />
          <MenuItemLink
            className={"menuItems"}
            to={`/memberships`}
            primaryText={"Membresias"}
            onClick={onMenuClick}
            leftIcon={<CardMembership type="read" />}
          />
          <MenuItemLink
            className={"menuItems"}
            to={`/membership-commissions`}
            primaryText={"Comisiones de membresias"}
            onClick={onMenuClick}
            leftIcon={<CardMembership type="read" />}
          />
        </SubMenu>
        <SubMenu
          handleToggle={() => this.handleToggle("menuConfig")}
          isOpen={this.state.menuConfig}
          /* sidebarIsOpen={open} */
          name="Empresas"
          icon={<Icon type="read" />}
          dense={this.state.dense}
        >
          <MenuItemLink
            className={"menuItems"}
            to={`/companies-users`}
            primaryText={"Usuarios en empresas"}
            onClick={onMenuClick}
            leftIcon={<Business type="user-add" />}
          />
          <MenuItemLink
            className={"menuItems"}
            to={`/companies`}
            primaryText={"Empresas"}
            onClick={onMenuClick}
            leftIcon={<Business type="user-add" />}
          />
        </SubMenu>
        <MenuItemLink
          className={"menuItems"}
          to={`/deals`}
          primaryText={"Negocios"}
          onClick={onMenuClick}
          leftIcon={<BusinessCenter />}
        />
        {/* >}
        />
        <MenuItemLink
          className={"menuItems"}
          to={`/guides`}
          primaryText={"Guías"}
          onClick={onMenuClick}
          leftIcon={<Icon type="solution" />}
        />
        <MenuItemLink
          className={"menuItems"}
          to={`/categories`}
          primaryText={"Categorías"}
          onClick={onMenuClick}
          leftIcon={<Icon type="tags" />}
        />
        <MenuItemLink
          className={"menuItems"}
          to={`/tags`}
          primaryText={"Etiquetas"}
          onClick={onMenuClick}
          leftIcon={<Icon type="number" />}
        />
        <MenuItemLink
          className={"menuItems"}
          to={`/users-childrens`}
          primaryText={"Asociar Hijos a Padres"}
          onClick={onMenuClick}
          leftIcon={<Icon type="usergroup-add" />}
        /> */}

        <Responsive
          small={logout}
          medium={null} // Pass null to render nothing on larger devices
        />
      </div>
    );
  }
}
