import React from "react";
import CityLists from "./CityList";
import CityCreate from "./CityCreate";

const Title = ({ record }) => {
  return <span>{record ? `Editar ${record.name}` : "Listado de ciuades"}</span>;
};

export { CityLists, Title, CityCreate };
