import logo from "../../assets/img/landingPage/logo.png";
import add_doctor from "../../assets/img/dashboard/add_doctor.png";
import patient_list from '../../assets/img/dashboard/patient_list.png'
import doctor_list from '../../assets/img/dashboard/doctor_list.png'
import reports from "../../assets/img/dashboard/report2_pbl.png";
import patient_history from "../../assets/img/dashboard/patient_history.jpeg";
import patient_profile from "../../assets/img/dashboard/patient2_pbl.png";
import logout from "../../assets/img/dashboard/logout.png";

const AdminSidebar = () => {
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
          <div className="flex m-2 mt-12  ">
            <div className="w-6 ml-4  ">
              <img src={add_doctor}></img>
            </div>
            <div className="font-poppins font-bold ml-4">
              <h1>Add a Doctor</h1>
            </div>
          </div>

          <div className="flex m-2 mt-6  ">
            <div className="w-6 ml-4  ">
              <img src={patient_list}></img>
            </div>
            <div className="font-poppins font-bold ml-4">
              <h1>Patient List</h1>
            </div>
          </div>

          <div className="flex m-2 mt-6  ">
            <div className="w-6 ml-4  ">
              <img src={doctor_list}></img>
            </div>
            <div className="font-poppins font-bold ml-4">
              <h1>Doctor List</h1>
            </div>
          </div>

          

          <div className=" mx-auto mt-96 py-1    bg-primary  rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary w-2/5  ">
            
            <button className="font-bold  flex items-center"><img src={logout} className="h-4 px-2 "></img>logout</button>
          </div>
        </div>
     );
}
 
export default AdminSidebar;