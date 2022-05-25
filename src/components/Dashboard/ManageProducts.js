import React from "react";
import { useQuery } from "react-query";
import { AiOutlinePlus, AiFillDelete } from "react-icons/ai";

const ManageProducts = () => {
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("allTools", () =>
    fetch("http://localhost:5000/tools").then((res) => res.json())
  );
  return (
    <div className="mt-10 p-10">
      <h1 className="text-3xl my-10 text-left text-blue-500 flex justify-between">
        Manage Products{" "}
        <button className="btn btn-lg bg-purple-500 text-white border-0 flex justify-center">
          <AiOutlinePlus className="mx-2 text-xl"></AiOutlinePlus>ADD TOOLS
        </button>
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Tool Picture</th>
              <th>Tool Name</th>
              <th>Short Description</th>
              <th>Available Quantity</th>
              <th>Minimum Order Quantity</th>
              <th>Price</th>
              <th>Remove</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {tools?.map((tool, index) => (
              <tr>
                <th>{index + 1}</th>

                <td>
                  <div class="avatar">
                    <div class="w-24 rounded">
                      <img src={tool?.image} alt="toolImage" />
                    </div>
                  </div>
                </td>
                <td>{tool?.name}</td>
                <td>{tool?.shortDescription}</td>
                <td>{tool?.availableQuantity}</td>
                <td>{tool?.minimumOrderQuantity}</td>
                <td>${tool?.price}</td>
                <td>
                  <AiFillDelete className="text-2xl text-red-500"></AiFillDelete>
                </td>
                <td>
                  <button className="btn btn-sm bg-blue-500 text-white border-0">
                    UPDATE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
