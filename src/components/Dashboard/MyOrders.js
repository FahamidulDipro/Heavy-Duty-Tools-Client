import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  //Using React Query to fetch data
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("toolsData", () =>
    fetch(`http://localhost:5000/orders/${user.email}`).then((res) =>
      res.json()
    )
  );

  return (
    <div className="p-20">
      <h1 className="text-orange-500 font-bold text-3xl my-10 text-left">
        My Orders
      </h1>
      <section className="flex justify-start">
        {" "}
        <div class="overflow-x-auto ">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Ordered Tools</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order?.tool}</td>
                  <td>{order?.amount}</td>
                  <td className="font-bold ">
                    ${""}
                    <span className="text-blue-500">
                      {parseFloat(order?.price) * parseFloat(order?.amount)}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-primary btn-sm">PAY</button>
                  </td>
                </tr>
              ))}

              {/* <!-- row 2 --> */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyOrders;
