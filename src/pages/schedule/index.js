import React from "react";
import ScheduleList from "./list";
import ScheduleEdit from "./edit";
import ScheduleCreate from "./create";

const Title = ({ record }) => {
  return <span>{record ? `Editar ${record.name}` : "Mi horario"}</span>;
};

export { ScheduleList, ScheduleEdit, Title, ScheduleCreate };
