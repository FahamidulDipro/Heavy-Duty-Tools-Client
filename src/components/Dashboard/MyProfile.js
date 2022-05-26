import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useQuery } from "react-query";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const {
    data: allProfiles,

    refetch,
  } = useQuery("profileData", () =>
    fetch(`http://localhost:5000/profiles`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      refetch();
      return res.json();
    })
  );

  const selectedProfile = allProfiles?.find(
    (profile) => profile.email === user?.email
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const userProfile = {
      name: event.target.name.value,
      email: event.target.email.value,
      education: event.target.education.value,
      location: event.target.location.value,
      linkedin: event.target.linkedin.value,
    };

    fetch(`http://localhost:5000/profile/:${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(userProfile),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    refetch();

    console.log(userProfile);
  };

  return (
    <section className="flex justify-around items-center w-full lg:flex-row md:flex-row sm:flex-col flex-col">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="avatar flex justify-center">
          <div class="w-24 rounded-lg">
            <img src={user?.photoURL} alt="ProfilePic" />
          </div>
        </div>
        <div class="card-body items-center">
          <h2 class="card-title">
            <span className="text-blue-500">{user?.displayName}</span>
          </h2>
          <p>{user?.email}</p>
          <p>
            <b>Location: </b>
            {selectedProfile?.location}
          </p>
          <p>
            <b>Education: </b>
            {selectedProfile?.education}
          </p>
          <p>
            <b>Linkedin ID: </b>
            {selectedProfile?.linkedin}
          </p>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-3xl mb-10">My Profile</h1>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <form onSubmit={handleSubmit}>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                className="input input-bordered w-full "
                value={user?.displayName}
                name="name"
                disabled
              />
              <br />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full "
                name="email"
                value={user?.email}
                disabled
              />
              <br />
              <br />
              <label className="label">
                <span className="label-text">Education</span>
              </label>
              <input
                className="input input-bordered w-full "
                name="education"
              />
              <br />
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input name="location" className="input input-bordered w-full " />
              <br />
              <label className="label">
                <span className="label-text">LinkedIn Profile Link</span>
              </label>
              <input className="input input-bordered w-full " name="linkedin" />
              <input
                type="submit"
                className="btn btn-success w-full mt-10 text-2xl "
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
