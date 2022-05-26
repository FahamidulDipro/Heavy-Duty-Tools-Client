import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { AiFillStar } from "react-icons/ai";
const Reviews = () => {
  //For Pagination
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 3;

  //Using React Query to fetch data
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery(["allReviews", page, size], () =>
    fetch(`https://rocky-sierra-92602.herokuapp.com/reviews?page=${page}&size=${size}`, {
      method: "GET",
      
    }).then((res) => res.json())
  );
  //Review count
  useEffect(() => {
    fetch("https://rocky-sierra-92602.herokuapp.com/reviewCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 6);

        setPageCount(pages);
      });
  }, []);

  return (
    <section>
      <div className="flex justify-center my-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5">
          {reviews?.map((review) => (
            <div className="card w-96 bg-base-100 shadow-xl" key={review._id}>
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
        {/* Pagination */}
      </div>
      <div className="flex justify-center btn-group mb-10">
        {[...Array(pageCount).keys()].map((num) => (
          <button
            key={num}
            className={page === num ? " btn btn-active" : "btn"}
            onClick={() => setPage(num)}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
