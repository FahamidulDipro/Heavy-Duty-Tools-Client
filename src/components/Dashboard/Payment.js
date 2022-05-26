import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Utilities/Loading";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const { orderId } = useParams();
  //Using React Query to fetch data
  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery(["ordersData", orderId], () =>
    fetch(`https://rocky-sierra-92602.herokuapp.com/order/${orderId}`, {
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
  const total = subtotal + shipping;
  const stripePromise = loadStripe(
    "pk_test_51L1AzLJrLiGvRoTN0Zc3UV5YdQvGLf66Wu5iMzkoYa0vD9I1iGQRZfn1lvv5lBfs8ZjPUJ1iUGfm1tSMHUV0RY8y00FJtpQCeM"
  );
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
                    $<span className="text-green-500 font-bold">{total}</span>
                  </span>
                </p>
              </div>
              <small className="text-right mr-5 -mt-3 mb-2">
                Additional taxes may apply
              </small>

              {/* <!-- The button to open modal --> */}
              <label
                for="my-modal-3"
                class="btn modal-button text-2xl  btn-primary"
              >
                PROCEED
              </label>

              {/* <!-- Put this part before </body> tag --> */}
              <input type="checkbox" id="my-modal-3" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box relative">
                  <label
                    for="my-modal-3"
                    class="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 class="text-lg font-bold text-left text-blue-500">
                    Please Provide your valid card information
                  </h3>
                  <p class="py-4">
                    <Elements stripe={stripePromise}>
                      <CheckoutForm total={total} order={order} />
                    </Elements>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
