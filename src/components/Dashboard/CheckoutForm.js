import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ total, order }) => {
  const totalPayment = {
    totalAmountPay: total,
  };
  const { name } = order;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/create_payment_intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(totalPayment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    // Getting a reference to a mounted CardElement
    const card = elements.getElement(CardElement);

    // Using card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error?.message || "");
      setSuccess("");
      console.log(error);
    } else {
      setSuccess("Congrats! your payment is done!");
      setCardError("");
    }

    //Confirming card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
          },
        },
      });
    if (intentError) {
      setCardError(intentError.message);
      setSuccess("");
      console.log(paymentIntent);
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {cardError && <p className="mt-2 text-red-500 text-left">{cardError}</p>}
      {success && <p className="mt-2 text-green-500 text-left">{success}</p>}

      <div className="flex justify-start">
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="btn bg-blue-500 text-white mt-5 border-0 btn-sm"
        >
          Pay
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
