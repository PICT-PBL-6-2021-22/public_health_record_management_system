import doctor_profile from "../../assets/img/dashboard/doctor2.png";
import Footer from "../landingPage/Footer";
import { Link } from "react-router-dom";

const DoctorProfile = () => {
  return (
    <body className="font-poppins col-span-10">
      <div className=" bg-bgprimary h-screen  ">
        <div className="  mr-6">
          <div className="flex bg-white shadow-xl items-center p-2 w-1/5 mt-4 m-4 ml-auto ">
            <img src={doctor_profile} className="h-12" alt="profile"></img>
            <div className="flex font-bold text-xl ">
              <h1 className="px-2 ">Hii</h1>
              <h1>Dr.</h1>
              <h1 className="">abcd</h1>
              <h1 className="px-2">!</h1>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="grid grid-rows-6 gap-3 bg-white rounded shadow m-4 ml-12 p-8 px-12">
              <div className="grid grid-cols-4 ">
                <h1 className="font-bold">Name :</h1>
                <h1>abcd</h1>
                <h1>efghi</h1>
                <h1>jklm</h1>
              </div>
              <div className="flex ">
                <h1 className="font-bold">Birth Date : </h1>
                <h1 className="mx-2">12/12/2022</h1>
              </div>
              <div className="flex ">
                <h1 className="font-bold">Blood Group : </h1>
                <h1 className="mx-2">A+</h1>
              </div>
              <div className="flex ">
                <h1 className="font-bold">Mobile Number :</h1>
                <h1 className="mx-2">1234567890</h1>
              </div>
              <div className="flex ">
                <h1 className="font-bold">Emergency Contact Number :</h1>
                <h1 className="mx-2">1234567890</h1>
              </div>
              <div className="flex ">
                <h1 className="font-bold">Email :</h1>
                <h1 className="mx-2">jayeshspatil1602@gmail.com</h1>
              </div>
              <div className="flex ">
                <h1 className="font-bold">Aadhar Card Number : </h1>
                <h1 className="mx-2">123456789123</h1>
              </div>
            </div>
            <div className="bg-white shadow rounded m-4 ml-12 p-8 px-12 ">
              <div className="flex">
                <h1 className="font-bold">Address :</h1>
                <div className="grid grid-rows-3 gap-2 ml-2">
                  <div className="grid grid-cols-2 gap-4">
                    <h1>Building/area </h1>
                    <h1>village/city</h1>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <h1>taluka</h1>
                    <h1>District</h1>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <h1>Pin code</h1>
                    <h1>State</h1>
                  </div>
                </div>
              </div>
              <div className="flex mt-3">
                <h1 className="font-bold">Hospital Name :</h1>
                <h1 className="ml-2">saikrupa hospital</h1>
              </div>
              <div className="flex mt-3">
                <h1 className="font-bold">Hospital Contact No. :</h1>
                <h1 className="ml-2">1234567890</h1>
              </div>
              <div className="flex mt-3">
                <h1 className="font-bold">Education :</h1>
                <div className="grid grid-cols-3 ml-2">
                  <h1 className="">MBBS</h1>
                  <h1></h1>
                  <h1></h1>
                </div>
              </div>

              <div className="flex mt-3">
                <h1 className="font-bold">Specialisation :</h1>
                <div className="grid grid-cols-2 ml-2">
                  <h1 className="">Heart surgeon</h1>
                  <h1></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-my-16">
        <Footer></Footer>
      </div>
    </body>
  );
};

export default DoctorProfile;
