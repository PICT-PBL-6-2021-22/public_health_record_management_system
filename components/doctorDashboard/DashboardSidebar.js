

import logo from "../../assets/img/landingPage/logo.png";
import dashboard from "../../assets/img/dashboard/dashboard.jpeg";
import reports from "../../assets/img/dashboard/report2_pbl.png";
import patient_history from "../../assets/img/dashboard/patient_history.jpeg";
import patient_profile from "../../assets/img/dashboard/patient2_pbl.png";
import logout from "../../assets/img/dashboard/logout.png";


const DashboardSidebar = () => {
    return ( 
        
        <div className="sode_bar bg-white shadow  ">
          <div className="flex m-2 mt-4  ">
            <div className="logo m-2  ">
              <img src={logo} className="w-16"></img>
            </div>
            <div className="heading font-poppins font-bold text-xl  ">
              <h1>Public health Record System</h1>
            </div>
          </div>
          <div className="flex m-2 mt-8  ">
            <div className="w-6 ml-4  ">
              <img src={dashboard}></img>
            </div>
            <div className="font-poppins font-bold ml-4">
              <h1>Dashboard</h1>
            </div>
          </div>

          <div className="flex m-2 mt-6  ">
            <div className="w-6 ml-4  ">
              <img src={reports}></img>
            </div>
            <div className="font-poppins font-bold ml-4">
              <h1>Reports</h1>
            </div>
          </div>

          <div className="p-4">
            <h1 className="font-poppins font-bold text-xl mt-4">Main menu</h1>
            <div className="grid grid-rows-2 gap-4 font-bold font-poppins mt-4 text-gray-400 ">
              <div className="flex p-2">
                <img src={patient_history} className="w-6"></img>
                <h1 className="ml-4">Patient History</h1>
              </div>
              <div className="flex p-2">
                <img src={patient_profile} className="w-6"></img>
                <h1 className="ml-4">Patient Profile</h1>
              </div>
            </div>
          </div>

          <div className=" mx-auto mt-56 py-1    bg-primary  rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary w-2/5  ">
            
            <button className="font-bold  flex items-center"><img src={logout} className="h-4 px-2 "></img>logout</button>
          </div>
        </div>
        
     );
}
 
export default DashboardSidebar;