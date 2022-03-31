import PatientProfileSidebar from "./PatientProfileSidebar";
import eye from '../../assets/img/dashboard/eye.png'
import DashboardSidebar from "../doctorDashboard/DashboardSidebar";
import Footer from "../landingPage/Footer";
import patient_profile from '../../assets/img/dashboard/patient2_pbl.png'
const PatientReports = () => {
    return ( 
        <body className=" ">
        <div className="grid grid-cols-6 min-h-screen">

            
            <DashboardSidebar></DashboardSidebar>
           
          
            
            <div className="font-poppins  col-start-2 col-span-4 ml-12">
            <button className="flex bg-white rounded shadow  px-4  ml-auto mt-8 h-14 ">
                <img
                  src={patient_profile}
                  className="h-14 p-1 rounded-2xl"
                ></img>
                <div className="mt-4 ml-4  font-bold font-poppins">
                  <h1>abcd xyz  </h1>
                  
                </div>
              </button>
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
                  <div className=" flex  justify-center bg-primary py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary w-2/4   ">
                    <img src={eye} className="h-4 my-auto"></img>
                    <button className="font-bold ml-2">Preview </button>
                  </div>
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
                  <div className=" flex  justify-center bg-primary py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary w-2/4   ">
                    <img src={eye} className="h-4 my-auto"></img>
                    <button className="font-bold ml-2">Preview </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
        </body>
     );
}
 
export default PatientReports;