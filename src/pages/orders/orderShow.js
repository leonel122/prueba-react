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
  const [currentStatusId, setCureentStatusId] = useState(null);
  const [statusId, setStatusId] = useState(null);

  useEffect(() => {
    fetchData();
  }, [0]);

  const fetchData = () => {
    ordersService.find({ query: { id: props.id } }).then((it) => {
      const order = it.data[0];
      setOrder({ order: order });
      setMetaData(JSON.parse(order.meta_data));
      setAddress(JSON.parse(order.meta_data));
      setCureentStatusId(order.order_status_id);
      setOrderDetails(order.orders_details);

      if (order.order_status_id == 1) {
        setStatusId(2);
      } else if (order.order_status_id == 2) {
        setStatusId(3);
      } else {
        setStatusId(5);
      }
    });
  };

  const handleUpdate = () => {
    ordersService
      .patch(order.order.id, { order_status_id: statusId })
      .then((it) => fetchData())
      .catch((error) => console.log(error.message));
  };

  const handleRejected = () => {
    ordersService
      .patch(order.order.id, { order_status_id: 4 })
      .then((it) => fetchData())
      .catch((error) => console.log(error.message));
  };

  return (
    <Show {...props}>
      <SimpleShowLayout>
        <Grid fullWidth container spacing={3}>
          <Grid item xs={12} md={4} spacing={3}>
            <OrderCard
              order={order}
              handleUpdate={() => handleUpdate()}
              handleRejected={() => handleRejected()}
            />
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
