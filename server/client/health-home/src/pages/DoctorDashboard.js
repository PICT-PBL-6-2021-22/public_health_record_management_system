import doctor_profile from "../assets/img/dashboard/doctor2.png";
import reports from "../assets/img/dashboard/report2_pbl.png";

import search from "../assets/img/dashboard/search2.png";
import add_pre_logo from "../assets/img/dashboard/add_prescription_logo.png";
import Footer from "../components/landingPage/Footer";
import eye from "../assets/img/dashboard/eye.png";
import Sidebar from '../components/doctorDashboard/DashboardSidebar'
import { Link } from "react-router-dom";




const DoctorDashboard = () => {
  return (
    <div className="full-body col-span-10 h-screen">
      <div className="body-without-footer   bg-bgprimary ">
        {/* side bar start */}

        {/* <Sidebar></Sidebar> */}

        {/* side bar end  */}

        {/*main dashboard start */}

        <div className="main    m-2  ">
          {/* dashboard today start */}
          <div className="">
            <div className="flex  h-12 m-2 bg-bgprimary rounded mt-4 ">
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

              <Link to="/doctor/profile">
                <div className="flex bg-white rounded shadow  px-4  ml-60 h-14 ">
                  <img
                    src={doctor_profile}
                    className="w-12 p-1 rounded-2xl"
                  ></img>
                  <div className="grid grid-rows-2 ml-4 gap-2  mb-4">
                    <div className="font-bold font-poppins text-base">
                      <h1 className="">Dr.amar akbar</h1>
                    </div>
                    <div className="">
                      <h2 className="text-sm">heart specialist</h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* dashboard today end */}

          {/* search patient by id start */}

          <div className="grid grid-cols-7 bg-white rounded p-4 ml-12 mr-8 mt-4 shadow">
            <div className="grid col-start-1 col-span-3">
              <h1 className="text-xl font-poppins font-bold p-2 ">
                Search Patient By Health Id :
              </h1>
            </div>
            <div className=" grid col-span-3">
              <input
                placeholder="Health ID"
                className="bg-bgsecondary rounded border-2 text-xl   pl-4  focus:outline-none"
              ></input>
            </div>
            <div className="grid col-start-8 h-10   bg-primary  rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary  ">
              <div className="flex py-2 px-4 items-center ">
                <img src={search} className=" h-4  "></img>
                <button className="ml-2 flex  rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary   ">
                  Search
                </button>
              </div>
            </div>
          </div>
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
                <Link to="/doctor/prescription">
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
              <Link to="/doctor/addDiagno">
                <div className=" flex  bg-primary pl-0 pr-3 py-1 items-center justify-items-center  rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary   ">
                  <img src={add_pre_logo} className="h-3 mx-3"></img>

                  <button className="font-semibold ">Add New Diagnosis</button>
                </div>
              </Link>
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
                  <Link to="/doctor/prescription">
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
                  <Link to="/doctor/prescription">
                    <div className=" flex  justify-center bg-primary py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary w-2/5   ">
                      <img src={eye} className="h-4 my-auto"></img>
                      <button className="font-bold ml-2">Preview </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* patient dashboard  end */}
        </div>
        {/*main dashboard end */}
      </div>
      <div className="mt-16 mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DoctorDashboard;
