import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../Utilities/Loading";
import SocialLogin from "./SocialLogin";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  //React Firebase hook
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
      //Using Custom hook for token
  const [token] = useToken(user);
  //Updating Profile For Username and Image
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);



  const [passMatchError, setPassMatchPError] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const photo = data.photoURL;
    const password = data.password;
    const cpassword = data.cpassword;
    if (password === cpassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name, photoURL: photo });
    } else {
      setPassMatchPError(
        <small className="text-red-500 text-left">
          Password don't match, try again!
        </small>
      );
    }
  };
  let displayError;
  if (error) {
    displayError = (
      <small className="text-red-500 text-left my-2">{error?.message}</small>
    );
  }
  if (token) {
    navigate("/");
    console.log(user);
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center mt-20"
      >
        {/* React Hook Form */}
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl mb-10 font-bold">SIGNUP</h1>
            <div className="form-control">
              <input
                {...register("name", { required: true })}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                {...register("photoURL", { required: true })}
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
              <span className="text-red-500">{displayError}</span>

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
            {passMatchError}
            <input type="submit" className="btn btn-primary" value="SUBMIT" />
            <span className="text-left mt-5">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 font-bold mx-5">
                Login Here
              </Link>{" "}
            </span>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
