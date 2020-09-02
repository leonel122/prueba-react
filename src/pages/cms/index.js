import React from "react";
import CmsList from "./list";
import CmsEdit from "./edit";
import CmsCreate from "./create";

const Title = ({ record }) => {
  return <span>{record ? `Editar ${record.name}` : "Listado de ciuades"}</span>;
};

export { CmsList, CmsEdit, Title, CmsCreate };
