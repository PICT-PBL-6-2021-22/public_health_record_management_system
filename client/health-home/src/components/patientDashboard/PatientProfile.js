import PatientDashboardSidebar from "./PatientProfileSideBar_2";
import patient_profile from "../../assets/img/dashboard/patient2_pbl.png";
import Footer from "../landingPage/Footer";

const PatientProfile = () => {
  return (
    <body className="font-poppins col-span-10 h-screen overflow-y-scroll mr-4">
      <div className="bg-bgprimary min-h-screen ">
        <div className="  ml-8 ">
          <div className="flex bg-white shadow-xl items-center p-2 w-1/5 mt-4 m-4 ml-auto  min-w-min">
            <img src={patient_profile} className="h-12"></img>
            <div className="flex font-bold text-xl ">
              <h1 className="px-2 ">Hii</h1>
              <h1 className="">abcd</h1>
              <h1 className="px-2">!</h1>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 ">
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
                <h1 className="font-bold">Your Past Disease :</h1>
                <h1 className="mx-2">diabetese</h1>
              </div>
              <div className="flex mt-3">
                <h1 className="font-bold">Years :</h1>
                <h1 className="mx-2">3</h1>
              </div>
            </div>
          </div>
          <h1 className="font-bold text-xl mx-16 m-2">
            Emergency Contact Details
          </h1>

          <div className="grid grid-rows-5  bg-white rounded shadow m-4 ml-12 p-8 px-12">
            <div className="flex ">
              <h1 className="font-bold">Name :</h1>
              <h1 className="mx-2"> abcd</h1>
              <h1 className="mx-2">efghi</h1>
            </div>

            <div className="flex ">
              <h1 className="font-bold">Mobile Number :</h1>
              <h1 className="mx-2">1234567890</h1>
            </div>
            <div className="flex ">
              <h1 className="font-bold">Email :</h1>
              <h1 className="mx-2">jayeshspatil1602@gmail.com</h1>
            </div>
            <div className="flex ">
              <h1 className="font-bold">Relation With Patient : </h1>
              <h1 className="mx-2">father</h1>
            </div>
            <div className="flex">
              <h1 className="font-bold mr-4">Address :</h1>
              <div className="grid grid-rows-2 gap-2">
                <div className="grid grid-cols-3 gap-6">
                  <h1>buliding/area</h1>
                  <h1>village/city</h1>
                  <h1>taluka</h1>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <h1>District</h1>
                  <h1>Pin-code</h1>
                  <h1>State</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </body>
  );
};

export default PatientProfile;
