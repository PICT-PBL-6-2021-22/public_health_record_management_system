import logo from "../../assets/img/landingPage/logo.png";
import add_doctor from "../../assets/img/dashboard/add_doctor.png";
import patient_list from "../../assets/img/dashboard/patient_list.png";
import doctor_list from "../../assets/img/dashboard/doctor_list.png";
import logoutimg from "../../assets/img/dashboard/logout.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import dashboard from "../../assets/img/dashboard/dashboard.jpeg";

const AdminSidebar = (props) => {
  const navigate = useNavigate();
  const logout = async () => {
    const res = await fetch("/logout");
    props.settoastCondition({
      status: "success",
      message: "Logged out Successfully!!!",
    });
    props.setToastShow(true);
    navigate("/");
  };

  const [Toggle, setToggle] = useState("Dashboard");

  return (
    <div className="h-screen overflow-y-hidden w-screen grid grid-cols-12">
      <div className="side_bar bg-white shadow col-span-2">
        <div className="flex m-2 mt-4  ">
          <div className="logo m-2  ">
            <img src={logo} className="w-16" alt="logo"></img>
          </div>
          <div className="heading font-poppins font-bold text-xl  ">
            <Link to="/">
              <h1>Public health Record System</h1>
            </Link>
          </div>
        </div>
        <nav>
          <Link
            to="/admin/dashboard"
            onClick={() => setToggle("Dashboard")}
            className={
              Toggle === "Dashboard" ? "text-gray-900" : "text-gray-400"
            }
          >
            <div className="flex m-2 mt-8 ">
              <div className="w-6 ml-4  ">
                <img src={dashboard} alt="dashboard"></img>
              </div>
              <div className="font-poppins font-bold ml-4">
                <h1>Dashboard</h1>
              </div>
            </div>
          </Link>

          <Link
            to="/admin/registerdoctor"
            onClick={() => setToggle("Reports")}
            className={Toggle === "Reports" ? "text-gray-900" : "text-gray-400"}
          >
            <div className="flex m-2 mt-4 ">
              <div className="w-6 ml-4  ">
                <img src={add_doctor} alt="add-doctor"></img>
              </div>
              <div className="font-poppins font-bold ml-4">
                <h1>Add a Doctor</h1>
              </div>
            </div>
          </Link>

          <div className="p-4">
            <h1 className="font-poppins font-bold text-xl mt-4">Main menu</h1>
            <div className="grid grid-rows-2  font-bold font-poppins mt-4">
              <Link
                to="/admin/patientslist"
                onClick={() => setToggle("Patient_history")}
                className={
                  Toggle === "Patient_history"
                    ? "text-gray-900 "
                    : "text-gray-400"
                }
              >
                <div className="flex m-2 mt-2  ">
                  <div className="w-6 ml-4  ">
                    <img src={patient_list} alt="patient-list"></img>
                  </div>
                  <div className="font-poppins font-bold ml-4">
                    <h1>Patient List</h1>
                  </div>
                </div>
              </Link>
              <Link
                to="/admin/doctorslist"
                onClick={() => setToggle("Patient_profile")}
                className={
                  Toggle === "Patient_profile"
                    ? "text-gray-900"
                    : "text-gray-400"
                }
              >
                <div className="flex m-2 mt-2 ">
                  <div className="w-6 ml-4  ">
                    <img src={doctor_list} alt="doctor-list"></img>
                  </div>
                  <div className="font-poppins font-bold ml-4">
                    <h1>Doctor List</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </nav>

        <div className=" mx-auto mt-56 py-1    bg-primary  rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary w-2/5  ">
          <button className="font-bold  flex items-center" onClick={logout}>
            <img src={logoutimg} className="h-4 px-2 " alt="logout"></img>
            logout
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminSidebar;
