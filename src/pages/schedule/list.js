import React from "react";

import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  TextInput,
  SelectInput,
  ReferenceField,
} from "react-admin";
import { Title } from "./";
const DayField = ({ source, record = {} }) => {
  return `${
    record.day == "0"
      ? "Domingo"
      : record.day == "1"
      ? "Lunes"
      : record.day == "2"
      ? "Martes"
      : record.day == "3"
      ? "Miercoles"
      : record.day == "4"
      ? "Jueves"
      : record.day == "5"
      ? "Viernes"
      : record.day == "6"
      ? "Sabado"
      : ""
  } `;
};

const days = [
  { id: "0", name: "Domingo" },
  { id: "1", name: "Lunes" },
  { id: "2", name: "Martes" },
  { id: "3", name: "Miercoles" },
  { id: "4", name: "Jueves" },
  { id: "5", name: "Viernes" },
  { id: "6", name: "Sabado" },
];

const Filters = (props) => (
  <Filter {...props}>
    <SelectInput
      fullWidth
      source="day"
      label="Dia"
      choices={days}
      optionText="name"
      optionValue="id"
      alwaysOn
    />
  </Filter>
);

const ScheduleList = ({ permissions, ...props }) => {
  return (
    <List {...props} filters={<Filters />} exporter={false} title={<Title />}>
      <Datagrid>
        {permissions === "admin" && <TextField source="id" label="id" />}
        {permissions === "admin" && (
          <TextField source="shop.name" label="Tienda" />
        )}
        <DayField label="Dia" />
        <TextField source="start_hour" label="Abro a las" />
        <TextField source="end_hour" label="Cierro a las" />
        <EditButton label="Editar" />
      </Datagrid>
    </List>
  );
};

export default ScheduleList;
