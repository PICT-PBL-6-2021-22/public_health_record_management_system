import patient_profile from "../assets/img/dashboard/patient2_pbl.png";

import reports from "../assets/img/dashboard/report2_pbl.png";

import search from "../assets/img/dashboard/search2.png";
import Footer from "../components/landingPage/Footer";
import eye from "../assets/img/dashboard/eye.png";
import { Link } from "react-router-dom";

import logo from "../assets/img/landingPage/logo.png";
import dashboard from "../assets/img/dashboard/dashboard.jpeg";
// import reports from "../assets/img/dashboard/report2_pbl.png";
import patient_history from "../assets/img/dashboard/patient_history.jpeg";
// import patient_profile from "../assets/img/dashboard/patient2_pbl.png";

import logout from "../assets/img/dashboard/logout.png";
// import { Link } from "react-router-dom";
import { useState } from "react";
// import PatientDashboard_side from "../components/patientDashboard/PatientDashboard_side";
import PatientReports from "../components/patientDashboard/PatientReports";

const PatientDashboard = () => {
  const [Toggle, setToggle] = useState("Dashboard");

  return (
    <div className="full-body col-span-10 h-screen">
      <div className="body-without-footer max-h-min bg-bgprimary ">
        {/* side bar start */}

        {/* side bar end  */}

        {/*main dashboard start */}

        {/* <PatientDashboard_side></PatientDashboard_side> */}
        <div className=" main ">
          <div className="">
            <div className="flex  h-12 m-2 bg-bgprimary rounded mt-4  ">
              <div>
                <h1 className="text-2xl font-poppins font-bold p-2 ">
                  DashBoard Today
                </h1>
              </div>

              <div className="flex ml-20  h-10   ">
                <input
                  placeholder="Search"
                  className="w-96 rounded ml-4 text-xl   pl-4 border focus:outline-none "
                ></input>
                <div className="bg-white pl-2 rounded ">
                  <img src={search} className=" h-6 mt-2  "></img>
                </div>
              </div>

              <Link to="/patient/profile">
                <button className="flex bg-white rounded shadow  px-4  ml-60 h-14 ">
                  <img
                    src={patient_profile}
                    className="h-14 p-1 rounded-2xl"
                  ></img>
                  <div className="mt-4 ml-4  font-bold font-poppins">
                    <h1>abcd xyz </h1>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          {/* dashboard today end */}

          {/* search patient by id start */}

          {/* search patient by id end */}

          {/* patient details  start */}

          <div className="grid grid-cols-2">
            <div className="m-4 p-4">
              <div>
                <h1 className="font-bold font-poppins text-xl ">
                  Patient Details
                </h1>
              </div>
              <div className="bg-white font-poppins p-4 mt-4 px-8 rounded-xl shadow">
                <div className="flex">
                  <div>
                    <h1>Name : </h1>
                  </div>
                  <div className="grid grid-cols-3 ml-2   ">
                    <h1>name</h1>
                    <h1>middle</h1>
                    <h1>surname</h1>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <h1>Date : </h1>
                  </div>
                  <div className="ml-2">
                    <h1>12/12/2022</h1>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <h1>Blood group : </h1>
                  </div>
                  <div className="ml-2">
                    <h1>A+</h1>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold mt-4">Past Health History</h1>
                  <div>blood pressure (5 yrs.)</div>
                </div>
              </div>
            </div>
            {/* recent health check up start */}
            <div className="m-4 p-4 ">
              <div>
                <h1 className="font-bold font-poppins text-xl ">
                  Recent Health Checkup
                </h1>
              </div>
              <div className="bg-white mt-4 font-poppins p-4 rounded-xl shadow px-8">
                <div className="flex ">
                  <div>
                    <h1>Consultant Doctor :</h1>
                  </div>
                  <div className="ml-2">
                    <h1>Dr. jayesh patil</h1>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <h1>Date :</h1>
                  </div>
                  <div className="ml-2">
                    <h1>12/12/2020</h1>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <h1>Diagnosis : </h1>
                  </div>
                  <div className="ml-2">
                    <h1>fever</h1>
                  </div>
                </div>
                <Link to="/patient/prescription">
                  <div className=" mt-2 flex items-center justify-evenly text-base bg-primary py-1 px-2 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary w-5/12  ">
                    <img src={reports} className="h-4"></img>

                    <button className=" font-semibold pl-1">
                      Preview Prescription
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            {/* recent health check up end */}
            <div></div>
          </div>
          {/* patient details  end */}

          {/* patient dashboard  start */}

          <div className="font-poppins m-4  ">
            <div className="flex justify-between m-8">
              <div className="font-bold text-xl ml-4">
                <h1>Patient Dashboard</h1>
              </div>
            </div>
            <div className="bg-white m-4 rounded-lg ">
              <div className="grid grid-rows-2 p-6 gap-2 shadow">
                <div className="grid grid-cols-4 font-bold  ">
                  <div>
                    <h1>Date</h1>
                  </div>
                  <div>
                    <h1>Doctor Name</h1>
                  </div>
                  <div>
                    <h1>Diagnosis</h1>
                  </div>
                  <div>
                    <h1>Prescription</h1>
                  </div>
                  <hr></hr>
                  <hr></hr>
                  <hr></hr>
                  <hr></hr>
                </div>

                <div className="grid grid-cols-4">
                  <div>
                    <h1>12/12/2021</h1>
                  </div>
                  <div className="flex">
                    <h1>Dr.</h1>
                    <h1>Jayesh Patil</h1>
                  </div>
                  <div>
                    <h1>fever</h1>
                  </div>
                  <Link to="/patient/prescription">
                    <div className=" flex  justify-center bg-primary py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary w-2/5   ">
                      <img src={eye} className="h-4 my-auto"></img>
                      <button className="font-bold ml-2">Preview </button>
                    </div>
                  </Link>
                </div>

                <div className="grid grid-cols-4">
                  <div>
                    <h1>12/12/2021</h1>
                  </div>
                  <div className="flex">
                    <h1>Dr.</h1>
                    <h1>Ram Patil</h1>
                  </div>
                  <div>
                    <h1>Cold</h1>
                  </div>
                  <Link to="/patient/prescription">
                    <div className=" flex  justify-center bg-primary py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary w-2/5   ">
                      <img src={eye} className="h-4 my-auto"></img>
                      <button className="font-bold ml-2">Preview </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*main dashboard end */}
      </div>
      <div className="mt-16 mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default PatientDashboard;
