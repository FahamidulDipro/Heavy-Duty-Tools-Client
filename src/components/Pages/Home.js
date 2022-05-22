import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Footer from "../Utilities/Footer";
import Loading from "../Utilities/Loading";
import Slider from "../Utilities/Slider";
import Summery from "../Utilities/Summery";
import Tool from "../Utilities/Tool";

const Home = () => {
  //Using React Query to fetch data
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("toolsData", () => fetch("data.json").then((res) => res.json()));
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Slider></Slider>
      <h1 className="text-3xl font-bold uppercase">Tools We Provide </h1>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10  my-20">
          {tools.map((tool) => (
            <Tool key={tool.id} tool={tool} refetch={refetch}></Tool>
          ))}
        </div>
      </div>

      <h1 className="text-3xl font-bold uppercase">Summery </h1>
      <Summery></Summery>
      <Footer></Footer>
    </div>
  );
};

export default Home;
