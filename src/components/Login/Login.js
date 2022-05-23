import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Utilities/Loading";
import SocialLogin from "./SocialLogin";
import useToken from "../../hooks/useToken";

const Login = () => {
 
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //React Firebase Hook for Sign in with Email & Password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };
  if (loading) {
    return <Loading></Loading>;
  }
  let displayError;
  if (error) {
    displayError = (
      <small className="text-red-500 text-left my-2">{error?.message}</small>
    );
  }
  
  if (token) {
    navigate(from, { replace: true });
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
            <h1 className="text-3xl mb-10 font-bold">LOGIN</h1>

            <div className="form-control">
              <input
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {displayError}
            </div>
            <div className="form-control">
              <input
                type="password"
                {...register("password")}
                className="input input-bordered"
              />
            </div>

            <input type="submit" className="btn btn-primary" value="SUBMIT" />
            <span className="text-left mt-5">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 font-bold mx-5">
                Signup Here
              </Link>{" "}
            </span>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
