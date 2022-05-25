import React from "react";
import { useQuery } from "react-query";
import { AiOutlinePlus, AiFillDelete } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";

const ManageProducts = () => {
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("allTools", () =>
    fetch("http://localhost:5000/tools").then((res) => res.json())
  );
  const handleDeleteTools = (id) => {
    const foundToolForDelete = tools.find((tool) => tool._id === id);
    fetch(`http://localhost:5000/tool/${foundToolForDelete._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(foundToolForDelete),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Tool Removed Successfully!");
          refetch();
          console.log(data);
        }
      });
  };
  return (
    <div className="mt-10 p-10">
      <h1 className="text-3xl my-10 text-left text-blue-500 flex justify-between">
        Manage Products{" "}
        <button className="btn btn-lg bg-purple-500 text-white border-0 flex justify-center">
          <AiOutlinePlus className="mx-2 text-xl"></AiOutlinePlus>ADD TOOLS
        </button>
      </h1>
      <ToastContainer className="mt-20"></ToastContainer>
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
                  <label
                    for="my-modal"
                    class="btn modal-button bg-white border-0"
                  >
                    <AiFillDelete
                      className="text-3xl text-red-500 "
                      for="my-modal"
                    ></AiFillDelete>
                  </label>

                  {/* Modal */}
                  <input type="checkbox" id="my-modal" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg">
                        Are you sure you want to delete {tool?.name}?
                      </h3>

                      <div class="modal-action">
                        <label
                          for="my-modal"
                          class="btn bg-red-500 text-white border-0"
                          onClick={() => handleDeleteTools(tool?._id)}
                        >
                          Confirm Delete
                        </label>
                      </div>
                    </div>
                  </div>
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
