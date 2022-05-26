import React from "react";
import { useQuery } from "react-query";
import { AiFillStar } from "react-icons/ai";
const Reviews = () => {
  //Using React Query to fetch data
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("allReviews", () =>
    fetch("http://localhost:5000/reviews", {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  return (
    <div className="flex justify-center my-20">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5">
        {reviews?.map((review) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={review?.image} alt="reviewerImg" />
                </div>
              </div>
            </figure>
            <div className="card-body ">
              <h2 className="card-title justify-center">{review?.name}</h2>
              <p>{review?.review}</p>
              <p>
                <b>Ratings:</b> {review?.ratings} out of 5
              </p>
              <div className="rating justify-center flex items-center ">
                {[...Array(review?.ratings).keys()].map((num) => (
                  <AiFillStar
                    key={num}
                    className="text-orange-500 text-2xl"
                  ></AiFillStar>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
