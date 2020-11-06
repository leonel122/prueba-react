import React from "react";
import FeatureList from "./list";
import FeatureEdit from "./edit";
import FeatureCreate from "./create";

const Title = ({ record }) => {
  return (
    <span>{record ? `Editar ${record.name}` : "Productos mas vendidos"}</span>
  );
};

export { FeatureList, FeatureEdit, Title, FeatureCreate };
