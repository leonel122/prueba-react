import React from "react";
import BannerList from "./list";
import BannerEdit from "./edit";
import BannerCreate from "./create";

const Title = ({ record }) => {
  return <span>{record ? `Editar ${record.name}` : "Listado de ciuades"}</span>;
};

export { BannerList, BannerEdit, Title, BannerCreate };
