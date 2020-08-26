import React, { useState, useEffect } from "react";
import { ordersService } from "../../utils/Api";
import OrderCard from "../../components/orderCard";
import UserCard from "../../components/userCard";
import AddressCard from "../../components/AddressCard";
import ProductsTable from "../../components/productsTable";
import Grid from "@material-ui/core/Grid";
import { Show, SimpleShowLayout } from "react-admin";

function OrderShow(props) {
  const [order, setOrder] = useState();
  const [metaData, setMetaData] = useState({});
  const [address, setAddress] = useState({ locality: {} });
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    ordersService.find({ query: { id: props.id } }).then((it) => {
      const order = it.data[0];
      setOrder({ order: order });
      setMetaData(JSON.parse(order.meta_data));
      setAddress(JSON.parse(order.meta_data));

      console.log(order.orders_details, "ORDER DETAILS");

      setOrderDetails(order.orders_details);
    });
  }, [0]);

  return (
    <Show {...props}>
      <SimpleShowLayout>
        <Grid fullWidth container spacing={3}>
          <Grid item xs={12} md={4} spacing={3}>
            <OrderCard order={order} />
          </Grid>
          <Grid item xs={12} md={4} spacing={3}>
            <UserCard metaData={metaData} />
          </Grid>
          <Grid item xs={12} md={4} spacing={3}>
            <AddressCard address={address} />
          </Grid>
          <Grid item xs={12} md={12} spacing={3}>
            <ProductsTable orderDetails={orderDetails} />
          </Grid>
        </Grid>
      </SimpleShowLayout>
    </Show>
  );
}
export default OrderShow;
