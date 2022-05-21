import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Utilities/Loading";
import Slider from "../Utilities/Slider";
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10 container mx-auto">
        {tools.map((tool) => (
          <Tool key={tool.id} tool={tool} refetch={refetch}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Home;
