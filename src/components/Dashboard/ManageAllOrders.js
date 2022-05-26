import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import Loading from "../Utilities/Loading";
import { toast, ToastContainer } from "react-toastify";
const ManageAllOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("allOrders", () =>
    fetch("https://rocky-sierra-92602.herokuapp.com/orders").then((res) => res.json())
  );

  // const [approved,setApproved] = useState(false);
  const handleShipment = (id) => {
    const foundOrder = orders.find((order) => order._id === id);
    fetch(`https://rocky-sierra-92602.herokuapp.com/order/${foundOrder._id}`, {
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
  const cancelOrderHandler = (id) => {
    const foundOrderForCancel = orders.find((order) => order._id === id);
    fetch(`https://rocky-sierra-92602.herokuapp.com/order/${foundOrderForCancel._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(foundOrderForCancel),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Order Removed Successfully!");
          refetch();
          console.log(data);
        }
      });
  };
  return (
    <div className="p-10">
      <h1 className="mt-10 text-3xl text-left text-blue-500">
        Manage All Orders
      </h1>
      <ToastContainer className="mt-20"></ToastContainer>
      <section className="flex justify-start mt-20">
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
                <th>Order Status</th>
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
                      <button
                        className="btn bg-red-500 btn-sm text-white border-0"
                        onClick={() => cancelOrderHandler(order?._id)}
                      >
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
