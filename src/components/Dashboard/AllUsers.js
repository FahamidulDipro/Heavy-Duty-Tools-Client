import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";

const AllUsers = () => {
  const [user] = useAuthState(auth);
  //Using React Query to fetch data
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("allUsers", () =>
    fetch("http://localhost:5000/users").then((res) => res.json())
  );
  return (
    <div className="mt-20">
      {/* <h1>All Users</h1> */}

      <section className="flex justify-start mt-20 p-10">
        {" "}
        <div className="overflow-x-auto ">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>User Photo</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>

                  <td>
                    <div class="avatar">
                      <div class="w-24 rounded">
                        <img src={user?.photo} alt="userImg" />
                      </div>
                    </div>
                  </td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>

                  <td>
                    <button className="btn bg-blue-500 border-0 text-white btn-xs">
                      Make Admin
                    </button>
                  </td>
                  <td>
                    <button className="btn bg-red-500 border-0 text-white btn-xs">
                      REMOVE
                    </button>
                  </td>
                </tr>
              ))}

              {/* <!-- row 2 --> */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AllUsers;
