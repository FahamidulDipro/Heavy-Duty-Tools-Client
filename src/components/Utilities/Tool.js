import React from 'react';

const Tool = ({tool,refetch}) => {
    const {name,image,shortDescription,minimumOrderQuantity,availableQuantity,price} = tool;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl text-left">
        <figure><img src={image} alt="cardImg" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{shortDescription}</p>

          <p><b>Available Quantity: </b>{availableQuantity}</p>
          <p><b>Minimum Order Quantity: </b>{minimumOrderQuantity}</p>
          <p><b>Price: </b> ${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Order</button>
          </div>
        </div>
      </div>
    );
};

export default Tool;