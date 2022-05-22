import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useTools from "../../hooks/useTools";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
const Purchase = () => {
  const { toolId } = useParams();
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
            <b>Available Quantity: </b> {selectedTool?.availableQuantity}
          </p>
          <p>
            <b>Price: </b> ${selectedTool?.price}
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                disabled
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                disabled
              />
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered"
              />

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter amount</span>
                </label>
                {qError || qdError}
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
                    disabled
                    placeholder={toolsQuantity}
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
            </div>
            <div className="form-control"></div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
