import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/img/landingPage/profile.png";
import ReactLoading from "react-loading";
export default function Login(props) {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [Toggle, setToggle] = useState("Patient");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const auth = async () => {
      const res = await fetch("/auth");
      const data = await res.json();
      if (data.msg === "Doctor Login Found") {
        navigate("/doctor/dashboard");
      }
      if (data.msg === "Admin Login Found") {
        navigate("/admin/dashboard");
      }
      if (data.msg === "Patient Login Found") {
        navigate("/patient/dashboard");
      }
    };
    auth();
  });

  const handlePatientLogin = async (healthID, password) => {
    setLoading(true);
    const res = await fetch("/login/patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        healthID,
        password,
      }),
    });

    const data = await res.json();

    if (data.errors) {
      setUsernameError(data.errors.healthID);
      setPasswordError(data.errors.password);
      setLoading(false);
    } else {
      setLoading(false);
      props.settoastCondition({
        status: "success",
        message: "Logged in Successfully!!!",
      });
      props.setToastShow(true);
      navigate("/patient/dashboard");
    }
  };

  const handleDoctorAdminLogin = async (email, password, path) => {
    setLoading(true);
    const res = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (data.err) {
      setLoading(false);
      props.settoastCondition({
        status: "error",
        message: "Wrong Credentials!!!",
      });
      props.setToastShow(true);
    } else if (data.errors) {
      setUsernameError(data.errors.healthID);
      setPasswordError(data.errors.password);
      setLoading(false);
      props.settoastCondition({
        status: "error",
        message: "Wrong Credentials!!!",
      });
      props.setToastShow(true);
    } else {
      setLoading(false);
      props.settoastCondition({
        status: "success",
        message: "Logged in Successfully!!!",
      });
      props.setToastShow(true);
      if (path == "/login/doctor") {
        navigate("/doctor/dashboard");
      } else {
        navigate("/admin/dashboard");
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    switch (Toggle) {
      case "Patient":
        handlePatientLogin(username, password);
        break;
      case "Doctor":
        handleDoctorAdminLogin(username, password, "/login/doctor");
        break;
      case "Admin":
        handleDoctorAdminLogin(username, password, "/login/admin");
        break;
      default:
        break;
    }
  };
  return (
    <div className="bg-white flex flex-col justify-items-center items-center py-4 px-4 rounded shadow-md lg:w-3/4 w-full my-7 ml-auto ">
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
          onClick={() => {
            setToggle("Patient");
            setUsername("");
            setPassword("");
            setUsernameError("");
            setPasswordError("");
          }}
        >
          Patient
        </button>
        <button
          onClick={() => {
            setToggle("Doctor");
            setUsername("");
            setPassword("");
            setUsernameError("");
            setPasswordError("");
          }}
          className={
            Toggle === "Doctor"
              ? "py-2 px-8 text-lg font-poppins font-semibold cursor-pointer rounded bg-primary"
              : "py-2 px-8 text-lg font-poppins font-medium text-primary cursor-pointer rounded"
          }
        >
          Doctor
        </button>
        <button
          onClick={() => {
            setToggle("Admin");
            setUsername("");
            setPassword("");
            setUsernameError("");
            setPasswordError("");
          }}
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
      <form className="flex flex-col w-full px-8" onSubmit={handleLogin}>
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
          className="font-poppins px-3 py-2 bg-bgsecondary rounded outline-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <span className="text-sm text-red-500">{usernameError}</span>
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
          className="font-poppins px-3 py-2 bg-bgsecondary rounded outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span className="text-sm text-red-500">{passwordError}</span>

        {Loading ? (
          <div className="flex justify-center items-center py-3">
            <ReactLoading
              type={"bubbles"}
              color={"color"}
              height={"10%"}
              width={"10%"}
            />
          </div>
        ) : (
          <button
            type="submit"
            className="text-lg mt-10  bg-primary py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary"
          >
            Login
          </button>
        )}
      </form>
      <h1 className="font-poppins text-base pt-5">
        New User, <Link to="/Register">Register here</Link>
      </h1>
    </div>
  );
}
