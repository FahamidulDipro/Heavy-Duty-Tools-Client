import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Footer from "../Utilities/Footer";
import Loading from "../Utilities/Loading";
import Options from "../Utilities/Options";
import Reviews from "../Utilities/Reviews";
import Slider from "../Utilities/Slider";
import Subscribe from "../Utilities/WriteUs";
import Summery from "../Utilities/Summery";
import Tool from "../Utilities/Tool";
import Write from "../Utilities/WriteUs";

const Home = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 6;
  //Using React Query to fetch data
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery(["toolsData", page, size], () =>
    fetch(`http://localhost:5000/tools?page=${page}&size=${size}`).then(
      (res) => {
        refetch();
        return res.json();
      }
    )
  );
  useEffect(() => {
    fetch("http://localhost:5000/toolCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 6);

        setPageCount(pages);
      });
  }, []);
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Slider></Slider>
      <h1 className="text-3xl font-bold uppercase mt-20">Tools We Provide </h1>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10  my-20">
          {tools.map((tool) => (
            <Tool key={tool._id} tool={tool} refetch={refetch}></Tool>
          ))}
        </div>
      </div>
      {/* Pagination */}
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

      <h1 className="text-3xl font-bold uppercase">Summery </h1>
      <Summery></Summery>
      <h1 className="text-3xl font-bold uppercase">Reviews</h1>
      <Reviews></Reviews>
      <h1 className="text-3xl font-bold uppercase my-10">Purchasing Tools Now Very simple</h1>
       <Options></Options>
       <h1 className="text-3xl font-bold uppercase my-10">Write Us</h1>
      <Write></Write>
      <Footer></Footer>
    </div>
  );
};

export default Home;
