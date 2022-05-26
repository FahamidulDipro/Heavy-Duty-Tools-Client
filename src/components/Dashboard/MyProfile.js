import React from "react";
import { useForm } from "react-hook-form";

const MyProfile = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="flex justify-center items-center w-full">
      <div className="mt-20">
        <h1 className="text-3xl mb-10">My Profile</h1>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                className="input input-bordered w-full "
              />
              <br />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                className="input input-bordered w-full "
              />
              <br />
              <br />
              <label className="label">
                <span className="label-text">Education</span>
              </label>
              <input
                {...register("education")}
                className="input input-bordered w-full "
              />
              <br />
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                {...register("location")}
                className="input input-bordered w-full "
              />
              <br />
              <label className="label">
                <span className="label-text">LinkedIn Profile Link</span>
              </label>
              <input
                {...register("linkdin")}
                className="input input-bordered w-full "
              />
              <input
                type="submit"
                className="btn btn-success w-full mt-10 text-2xl "
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
