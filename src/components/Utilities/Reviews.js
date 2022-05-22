import React from "react";

const Reviews = () => {
  return (
    <div className="flex justify-center my-20">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?hash=92310"
                  alt="img"
                />
              </div>
            </div>
          </figure>
          <div className="card-body ">
            <h2 className="card-title justify-center">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="rating justify-center">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
