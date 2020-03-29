import React from "react";
import ConfigurationList from "./ConfigurationList";
import ConfigurationEdit from "./ConfigurationEdit";
import ConfigurationCreate from "./ConfigurationCreate";

const Title = ({ record }) => {
  return <span>{record ? `Editar ${record.name}` : "Configuraciones"}</span>;
};

export { ConfigurationList, Title, ConfigurationEdit, ConfigurationCreate };
