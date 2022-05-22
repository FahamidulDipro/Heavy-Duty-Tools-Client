import React from "react";
import { useForm } from "react-hook-form";
const Signup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center mt-20"
      >
        {/* React Hook Form */}
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl mb-10 font-bold">Signup</h1>
            <div className="form-control">
              <input
                {...register("name", { required: true })}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                {...register("email", { required: true })}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                {...register("password")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                {...register("cpassword")}
                className="input input-bordered"
              />
            </div>
            <input type="submit" className="btn btn-primary" value="SUBMIT" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
