import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Utilities/Loading";

const Payment = () => {
  const { orderId } = useParams();
  //Using React Query to fetch data
  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery(["ordersData", orderId], () =>
    fetch(`http://localhost:5000/order/${orderId}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const { tool, amount, price } = order;
  const subtotal = amount * price;
  const shipping = 10;
  return (
    <div className="my-10">
      <div className="flex justify-center items-center">
        <div class="hero min-h-screen shadow-lg w-3/4 rounded-lg bg-white ">
          <div class="hero-content flex-col lg:flex-row">
            <div class="text-center lg:text-left">
              <h1 class="text-5xl font-bold">
                Pay For <span>{tool}</span>
              </h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200 p-5">
              <div class="card-body text-left text-xl">
                <p className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold">
                    $<span className="text-blue-500">{subtotal}</span>
                    {""}
                  </span>
                </p>
                <div class="divider"></div>
                <p className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-bold ">
                    $<span className="text-red-500">{shipping}</span>
                  </span>
                </p>
                <div class="divider"></div>
                <p className="flex justify-between">
                  <span className="text-3xl">Total</span>
                  <span className="text-3xl">
                    $
                    <span className="text-green-500 font-bold">
                      {subtotal + shipping}
                    </span>
                  </span>
                </p>
              </div>
              <small className="text-right mr-5 -mt-3 mb-2">
                Additional taxes may apply
              </small>
              <button className="btn btn-primary mt-3 text-2xl">PROCEED</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
