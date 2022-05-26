import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
const Review = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const reviewerName = user?.displayName;
  const reviewerEmail = user?.email;
  const reviewerImg = user?.photoURL;
  const onSubmit = (data) => {
 
    fetch("http://localhost:5000/reviews", {
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
          value={reviewerName}
 
          className="textarea input-bordered disabled:placeholder-black"
          {...register("name")}
        />
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          value={reviewerEmail}
      
          className="textarea input-bordered disabled:placeholder-black"
          {...register("email")}
        />
     
        <label className="label">
          <span className="label-text">Photo</span>
        </label>
        <input
          type="text"
          value={reviewerImg}
      
          className="textarea input-bordered disabled:placeholder-black"
          {...register("image")}
        />
        <label className="label">
          <span className="label-text">Write Your Review</span>
        </label>
        <textarea
          type="text"
          className="textarea input-bordered disabled:placeholder-black"
          placeholder="Your Review"
          {...register("review")}
        />
        <label className="label">
          <span className="label-text">Give A Rating</span>
        </label>
        <input
          type="number"
          {...register("ratings")}
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
