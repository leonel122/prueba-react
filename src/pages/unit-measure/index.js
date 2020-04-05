import React from "react";
import UnitMeasureList from "./UnitMeasureList";
import UnitMeasureEdit from "./UnitMeasureEdit";
import UnitMeasureCreate from "./UnitMeasureCreate";

const Title = ({ record }) => {
  return (
    <span>
      {record ? `Editar ${record.name}` : "Listado de productos express"}
    </span>
  );
};

export { UnitMeasureList, Title, UnitMeasureCreate };
