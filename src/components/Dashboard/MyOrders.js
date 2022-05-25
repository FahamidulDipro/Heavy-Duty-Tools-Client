import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { AiOutlineCheck } from "react-icons/ai";

const MyOrders = () => {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);
  //Using React Query to fetch data
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("toolsData", () =>
    fetch(`http://localhost:5000/orders/${user.email}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
      return res.json();
    })
  );

  return (
    <div className="p-20">
      <h1 className="text-orange-500 font-bold text-3xl my-10 text-left">
        My Orders
      </h1>

      <section className="flex justify-start">
        {" "}
        <div className="overflow-x-auto ">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Ordered Tools</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Payment</th>
                <th>Payment Status</th>
                <th>Shipping Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => (
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
                    {order?.paid ? (
                      <p className="text-green-500 font-bold flex items-center">
                        <AiOutlineCheck className="mx-1 text-xl"></AiOutlineCheck>
                        PAID
                      </p>
                    ) : (
                      <Link to={`/dashboard/payment/${order?._id}`}>
                        <button className="btn btn-primary btn-sm  border-0">
                          PAY
                        </button>
                      </Link>
                    )}
                  </td>

                  <td>
                    {order?.paid ? (
                      <p>
                        <b className="">Transaction ID:</b>
                        <br />
                        <span className="text-orange-600">
                          {order.transactionId}
                        </span>
                      </p>
                    ) : (
                      <p className="text-red-500">Payment Pending</p>
                    )}
                  </td>
                  <td>
                    {order?.paid ? (
                      order?.shipped ? (
                        <p className="font-bold text-purple-500 flex items-center">
                          <AiOutlineCheck className="mx-1 text-xl"></AiOutlineCheck>
                          Shipped{" "}
                        </p>
                      ) : (
                        <p className=" text-blue-500 font-bold">
                          Pending For Approval
                        </p>
                      )
                    ) : null}
                  </td>
                  <td>
                    {order?.paid ? null : (
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

export default MyOrders;
