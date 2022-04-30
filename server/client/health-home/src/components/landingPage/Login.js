import React, { useState } from "react";
import profile from "../../assets/img/landingPage/profile.png";

export default function Login() {
  const [Toggle, setToggle] = useState("Patient");

  return (
    <div className="bg-white flex flex-col justify-items-center items-center py-4 px-4 rounded shadow-md w-3/4  my-7 ml-auto ">
      <h1 className="text-3xl font-bold font-poppins text-primary py-5">
        Login
      </h1>
      <div className="flex bg-bgsecondary w-fit justify-between rounded">
        <button
          className={
            Toggle === "Patient"
              ? "py-2 px-8 text-lg font-poppins font-semibold cursor-pointer rounded bg-primary"
              : "py-2 px-8 text-lg font-poppins font-medium text-primary cursor-pointer rounded"
          }
          onClick={() => setToggle("Patient")}
        >
          Patient
        </button>
        <button
          className="py-2 px-8 text-lg font-poppins font-semibold cursor-pointer rounded"
          onClick={() => setToggle("Doctor")}
          className={
            Toggle === "Doctor"
              ? "py-2 px-8 text-lg font-poppins font-semibold cursor-pointer rounded bg-primary"
              : "py-2 px-8 text-lg font-poppins font-medium text-primary cursor-pointer rounded"
          }
        >
          Doctor
        </button>
        <button
          className="py-2 px-8 text-lg font-poppins font-semibold cursor-pointer rounded"
          onClick={() => setToggle("Admin")}
          className={
            Toggle === "Admin"
              ? "py-2 px-8 text-lg font-poppins font-semibold cursor-pointer rounded bg-primary"
              : "py-2 px-8 text-lg font-poppins font-medium text-primary cursor-pointer rounded"
          }
        >
          Admin
        </button>
      </div>
      <img
        src={profile}
        alt="profile pic"
        className="h-20 my-6 border-2 rounded-full"
      />
      <form className="flex flex-col w-full px-8">
        <label
          htmlFor="email"
          className="font-poppins pt-2 pb-1 text-lg font-bold"
        >
          {Toggle === "Patient" ? "Health Id" : "Email"}
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="font-poppins px-3 py-2 bg-bgsecondary rounded"
        />
        <label
          htmlFor="password"
          className="font-poppins pt-6 pb-1 text-lg font-bold"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="font-poppins px-3 py-2 bg-bgsecondary rounded"
        />
        <button className="text-lg mt-10 bg-primary py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary">
          Submit
        </button>
      </form>
      <h1 className="font-poppins text-base pt-5">New User, Register here</h1>
    </div>
  );
}
