import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useTools from "../../hooks/useTools";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Purchase = () => {
  const { toolId } = useParams();
  const [user] = useAuthState(auth);
  //Using custom hook to load tools data
  const [tools] = useTools();
  //Finding the specific tool which matches the toolId
  const selectedTool = tools?.find((tool) => tool._id === toolId);
  const minimumQuantity = selectedTool?.minimumOrderQuantity;
  const [toolsQuantity, setToolsQuantity] = useState(minimumQuantity);
  useEffect(() => {
    setToolsQuantity(minimumQuantity);
  }, [minimumQuantity]);
  //Error Message for unavailable and minimum quantity
  const [qError, setQError] = useState("");
  const [qdError, setQdError] = useState("");
  const [limitError, setLimitError] = useState("");
  //Change in available quantity on UI
  const [availableToolsQuantity, setAvailableToolsQuantity] = useState(
    selectedTool?.availableQuantity
  );
  useEffect(() => {
    setAvailableToolsQuantity(selectedTool?.availableQuantity);
  }, [selectedTool?.availableQuantity]);

  let quantityError;
  const handleIncreaseQuantity = () => {
    if (toolsQuantity < selectedTool?.availableQuantity) {
      setQdError("");
      setToolsQuantity(toolsQuantity + 1);
    } else {
      quantityError = (
        <small className="text-red-500 my-3 text-left">
          Amount can't be more than available quantity
        </small>
      );
      setQError(quantityError);
    }
  };
  const handleDecreaseQuantity = () => {
    if (toolsQuantity > selectedTool?.minimumOrderQuantity) {
      setQError("");
      setToolsQuantity(toolsQuantity - 1);
    } else {
      quantityError = (
        <small className="text-red-500  my-3 text-left">
          Amount can't be less than minimum order quantity
        </small>
      );
      setQdError(quantityError);
    }
  };
  const handleOrder = (event) => {
    event.preventDefault();

    const orderData = {
      name: event.target.name.value,
      tool:selectedTool.name,
      price:selectedTool.price,
      email: event.target.email.value,
      address: event.target.address.value,
      phone: event.target.phone.value,
      amount: event.target.amount.value,
      availableQuantity: selectedTool?.availableQuantity,
    };
    //For adding Orders to database
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    //For updating the Available Quantity
    let availableToolQuantity;
    if (selectedTool?.availableQuantity - orderData.amount >= 0) {
      availableToolQuantity =
        selectedTool?.availableQuantity - orderData.amount;
      const selectedToolData = {
        selectedToolId: toolId,
        availableQuantity: availableToolQuantity,
      };

      fetch("http://localhost:5000/tools", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedToolData),
      })
        .then((res) => res.json())
        .then((result) => {
          setAvailableToolsQuantity(
            selectedTool?.availableQuantity - orderData.amount
          );

          console.log(result);
        });
    } else {
      setLimitError(
        <small className="text-red-500 text-left">Stock Finished!</small>
      );
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left  min-w-full p-5">
          <h1 className="text-5xl font-bold ">{selectedTool?.name}</h1>
          <div className="w-full  flex justify-center my-10">
            <img src={selectedTool?.image} alt="toolImg" className=" w-1/2" />
          </div>
          <p className="py-6 w-full">{selectedTool?.shortDescription}</p>
          <p>
            <b>Minimum Order Quantity: </b>
            {selectedTool?.minimumOrderQuantity}
          </p>
          <p>
            <b>Available Quantity: </b> {availableToolsQuantity}
          </p>
          <p>
            <b>Price: </b> ${selectedTool?.price}
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form className="form-control" onSubmit={handleOrder}>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={user?.displayName}
                name="name"
                className="input input-bordered disabled:placeholder-black"
                disabled
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={user?.email}
                className="input input-bordered disabled:placeholder-black"
                disabled
              />
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered"
              />

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter amount</span>
                </label>
                {qError || qdError || limitError}
                <label className="input-group">
                  <span
                    onClick={handleDecreaseQuantity}
                    className={`cursor-pointer ${
                      qdError ? " bg-gray-300" : "bg-primary"
                    }`}
                  >
                    <AiOutlineMinus></AiOutlineMinus>
                  </span>
                  <input
                    type="text"
                    name="amount"
                    disabled
                    value={toolsQuantity}
                    className="input input-bordered focus:outline-none disabled:bg-white disabled:placeholder-black "
                  />
                  <span
                    onClick={handleIncreaseQuantity}
                    className={`cursor-pointer ${
                      qError ? " bg-gray-300" : "bg-primary"
                    }`}
                  >
                    <AiOutlinePlus></AiOutlinePlus>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Place Order
                </button>
              </div>
            </form>

            {/* <form onSubmit={handleOrder}>
              <input type="text" name="name"/>
              <input type="submit" value="Submit" />
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
