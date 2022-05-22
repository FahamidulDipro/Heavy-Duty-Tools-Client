import React from "react";
import { Link, useParams } from "react-router-dom";
import useTools from "../../hooks/useTools";

const Purchase = () => {
  const { toolId } = useParams();
  //Using custom hook to load tools data
  const [tools] = useTools();
  //Finding the specific tool which matches the toolId
  const selectedTool = tools?.find((tool) => tool._id === toolId);

  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row ">
        <div class="text-center lg:text-left  min-w-full p-5">
          <h1 class="text-5xl font-bold ">{selectedTool?.name}</h1>
          {console.log(selectedTool)}
          <p class="py-6">{selectedTool?.shortDescription}</p>
          <p>
            <b>Minimum Order Quantity: </b>
            {selectedTool?.minimumOrderQuantity}
          </p>
          <p>
            <b>Available Quantity: </b> {selectedTool?.availableQuantity}
          </p>
          <p>
            <b>Price: </b> {selectedTool?.price}
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered"
                disabled
              />
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                class="input input-bordered"
                disabled
              />
              <label class="label">
                <span class="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                class="input input-bordered"
              />
              <label class="label">
                <span class="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                class="input input-bordered"
              />
            </div>
            <div class="form-control"></div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
