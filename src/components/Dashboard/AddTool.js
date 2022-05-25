import React from "react";
import { useForm } from "react-hook-form";
const AddTool = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
      <label className="label">
        <span className="label-text">Tool Name</span>
      </label>
      <input
        type="text"
        className="input input-bordered disabled:placeholder-black"
        {...register("toolName")}
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
        type="text"
        {...register("availableQuantity")}
        className="input input-bordered"
      />
      <label className="label">
        <span className="label-text">Minimum Order Quantity</span>
      </label>
      <input
        type="text"
        {...register("minimumOrderQuantity")}
        className="input input-bordered"
      />
      <div class="modal-action">
        <label for="update-modal" class="btn">
          <input type="submit" for="update-modal" />
        </label>
      </div>
    </form>
  );
};

export default AddTool;
