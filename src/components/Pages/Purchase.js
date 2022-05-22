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
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <Link to="#" class="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
