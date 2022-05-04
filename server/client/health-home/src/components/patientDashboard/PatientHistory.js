import Footer from "../landingPage/Footer";
import patient_profile from "../../assets/img/dashboard/patient2_pbl.png";
import PatientHistoryCompo from "./PatientHistoryCompo";

const PatientHistory = () => {
  return (
    <div className="col-span-10">
      <div className=" px-12">
        <div className="h-screen">
          <div className="font-poppins   mainf">
            <button className="flex bg-white rounded shadow  px-4  ml-auto mt-8 h-14 ">
              <img src={patient_profile} className="h-14 p-1 rounded-2xl" alt="profile"></img>
              <div className="mt-4 ml-4  font-bold font-poppins">
                <h1>abcd xyz </h1>
              </div>
            </button>
            <div className="flex justify-between m-8">
              <div className="font-bold text-xl ml-4">
                <h1>Patient Reports History</h1>
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

                <PatientHistoryCompo />
                <PatientHistoryCompo />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-20 mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default PatientHistory;
