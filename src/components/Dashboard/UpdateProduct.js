import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const UpdateProduct = ({ tool }) => {
  const {
    name,
    shortDescription,
    availableQuantity,
    minimumOrderQuantity,
    price,
  } = tool;
  const [toolName, setToolName] = useState(name);
  const [toolPrice, setToolPrice] = useState(price);
  return (
    <form>
      <input
        type="text"
        name="name"
        className="input input-bordered"
        value={toolName}
      />
      <br />
      <input
        type="text"
        name="name"
        className="input input-bordered"
        value={price}
      />
      {console.log(name)}
    </form>
  );
};

export default UpdateProduct;
