import React from "react";

const Reviews = () => {
  return (
    <div className="flex justify-center my-20">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <div class="avatar">
              <div class="w-24 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?hash=92310"
                  alt="img"
                />
              </div>
            </div>
          </figure>
          <div class="card-body ">
            <h2 class="card-title justify-center">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="rating justify-center">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
