import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import { AiFillDelete } from "react-icons/ai";
import { MdAdminPanelSettings } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
const AllUsers = () => {
  //Using React Query to fetch data
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("allUsers", () =>
    fetch("https://rocky-sierra-92602.herokuapp.com/users", {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );


  //Making a user Admin
  const makeAdmin = (email, name) => {
    fetch(`https://rocky-sierra-92602.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin!");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`You made ${name}! an Admin!`);
          refetch();
        }
      });
  };
  //Deleting Users
  const handleDeleteUser = (id) => {
    const foundUserForDelete = users.find((user) => user._id === id);
    fetch(`https://rocky-sierra-92602.herokuapp.com/user/${foundUserForDelete._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(foundUserForDelete),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("User Removed Successfully!");
          refetch();
          console.log(data);
        }
      });
    console.log(foundUserForDelete);
  };

  return (
    <div className="mt-10 p-10">
       <h1 className="mt-10 text-3xl text-left text-blue-500">
       All Users
      </h1>
      <section className="flex justify-start mt-10">
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
            <ToastContainer className="mt-20" />
            <tbody>
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>

                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded">
                        <img src={user?.photo} alt="userImg" />
                      </div>
                    </div>
                  </td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>

                  <td>
                    {user?.role === "admin" ? (
                      <span className="text-orange-500 font-bold flex items-center text-xl">
                        <MdAdminPanelSettings></MdAdminPanelSettings> Admin
                      </span>
                    ) : (
                      <button
                        className="btn bg-blue-500 border-0 text-white btn-xs"
                        onClick={() => makeAdmin(user?.email, user?.name)}
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    {
                      user?.role==="admin"?null:  <AiFillDelete
                      className="text-2xl text-red-500 ml-2 cursor-pointer"
                      onClick={()=>handleDeleteUser(user?._id)}
                    ></AiFillDelete>
                    }
                  
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
