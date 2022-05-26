import React from "react";

const Write = () => {
  return (
    <div className="flex justify-center my-20">
      <div class="form-control w-1/2">
        <input type="email"  placeholder="Your Email"  className="input input-bordered "/>
        <br />
        <textarea class="textarea  input-bordered" placeholder="Bio"></textarea>
        <br />
      <button className="btn btn-primary">SEND</button>
      </div>
   
    </div>
  );
};

export default Write;
