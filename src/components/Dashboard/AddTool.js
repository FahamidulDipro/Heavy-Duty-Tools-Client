import React from "react";
import { useForm } from "react-hook-form";

const AddTool = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://rocky-sierra-92602.herokuapp.com/tools", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
      <label className="label">
        <span className="label-text">Tool Name</span>
      </label>
      <input
        type="text"
        className="input input-bordered disabled:placeholder-black"
        {...register("name")}
      />
      <label className="label">
        <span className="label-text">Tool Image</span>
      </label>
      <input
        type="text"
        className="input input-bordered disabled:placeholder-black"
        {...register("image")}
      />
      <label className="label">
        <span className="label-text">Description</span>
      </label>
      <input
        type="text"
        className="input input-bordered disabled:placeholder-black"
        {...register("shortDescription")}
      />
      <label className="label">
        <span className="label-text">Available Quantity</span>
      </label>
      <input
        type="number"
        {...register("availableQuantity")}
        className="input input-bordered"
      />
      <label className="label">
        <span className="label-text">Minimum Order Quantity</span>
      </label>
      <input
        type="number"
        {...register("minimumOrderQuantity")}
        className="input input-bordered"
      />
      <label className="label">
        <span className="label-text">Price</span>
      </label>
      <input
        type="number"
        {...register("price")}
        className="input input-bordered"
      />
      <input
        type="submit"
        className="btn bg-purple-500 text-white border-0 mt-5 text-xl"
        value="ADD TOOL"
      />
    </form>
  );
};

export default AddTool;
