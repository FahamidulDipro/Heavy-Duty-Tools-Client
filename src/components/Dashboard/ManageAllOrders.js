import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
const ManageAllOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("allOrders", () =>
    fetch("http://localhost:5000/orders").then((res) => res.json())
  );

  // const [approved,setApproved] = useState(false);
  const handleShipment = (id) => {
    const foundOrder = orders.find((order) => order._id === id);
    fetch(`http://localhost:5000/order/${foundOrder._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(foundOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };
  return (
    <div>
      <h1>Manage All Orders</h1>

      <section className="flex justify-start">
        {" "}
        <div className="overflow-x-auto ">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Ordered Tools</th>
                <th>Quantity</th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order?.tool}</td>
                  <td>{order?.amount}</td>
                  <td>{order?.name}</td>
                  <td>{order?.email}</td>
                  <td className="font-bold ">
                    ${""}
                    <span className="text-blue-500">
                      {parseFloat(order?.price) * parseFloat(order?.amount)}
                    </span>
                  </td>
                  <td>
                    {order?.paid ? (
                      <p className="text-green-500 font-bold flex items-center">
                        <AiOutlineCheck className="mx-1 text-xl"></AiOutlineCheck>
                        PAID
                      </p>
                    ) : (
                      <p className="text-red-500 font-bold">UNPAID</p>
                    )}
                  </td>
                  <td>
                    {order?.paid ? (
                      order?.shipped ? (
                        <p
                          onClick={() => handleShipment(order?._id)}
                          className="font-bold text-orange-500 flex items-center"
                        >
                          <AiOutlineCheck className="mx-1 text-xl"></AiOutlineCheck>
                          Shipped{" "}
                        </p>
                      ) : (
                        <button
                          onClick={() => handleShipment(order?._id)}
                          className="btn btn-xs bg-blue-500 text-white border-0"
                        >
                          Pending...
                        </button>
                      )
                    ) : (
                      <button className="btn bg-red-500 btn-sm text-white border-0">
                        CANCEL
                      </button>
                    )}
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

export default ManageAllOrders;
