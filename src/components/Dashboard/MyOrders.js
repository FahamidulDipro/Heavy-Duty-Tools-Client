import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  //Using React Query to fetch data
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("toolsData", () =>
    fetch(`http://localhost:5000/orders/${user.email}`).then((res) =>
      res.json()
    )
  );

  return (
    <div className="p-20">
      <h1 className="text-orange-500 font-bold text-3xl my-10 text-left">
        My Orders
      </h1>
      <section className="flex justify-start">
        {" "}
        <div class="overflow-x-auto ">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* <!-- row 2 --> */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyOrders;
