import React from "react";
import { useForm } from "react-hook-form";
const Review = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/tools", {
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
    <div className="flex justify-center  w-full items-center h-screen ">
      <form
        className="form-control lg:w-1/2 sm:w-3/4 w-3/4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl text-left text-blue-500 mb-10">Add A Review</h1>
        <label className="label">
          <span className="label-text">Reviewer Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered disabled:placeholder-black"
          {...register("name")}
        />

        <label className="label">
          <span className="label-text">Write Your Review</span>
        </label>
        <textarea
          type="text"
          className="textarea input-bordered disabled:placeholder-black"
          placeholder="Your Review"
          {...register("shortDescription")}
        />
        <label className="label">
          <span className="label-text">Give A Rating</span>
        </label>
        <input
          type="number"
          {...register("availableQuantity")}
          className="input input-bordered"
        />

        <input
          type="submit"
          className="btn bg-purple-500 text-white border-0 mt-5 text-xl"
          value="ADD REVIEW"
        />
      </form>
    </div>
  );
};

export default Review;
