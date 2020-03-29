import React from "react";
import MembserhipCommissionsList from "./membershipCommissionsList";
import MembershipCommissionsCreate from "./membersipCommissionsCreate";

const Title = ({ record }) => {
  return (
    <span>
      {record ? `Editar ${record.name}` : "Listado de comisiones por membresia"}
    </span>
  );
};
export { MembserhipCommissionsList, Title, MembershipCommissionsCreate };
