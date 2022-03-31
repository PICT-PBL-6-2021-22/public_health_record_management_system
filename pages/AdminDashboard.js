import admin_profile from "../assets/img/dashboard/admin_profile.png";
import reports from "../assets/img/dashboard/report2_pbl.png";

import search from "../assets/img/dashboard/search2.png";
import add_pre_logo from "../assets/img/dashboard/add_prescription_logo.png";
import Footer from "../components/landingPage/Footer";
import eye from "../assets/img/dashboard/eye.png";
import AdminSidebar from '../components/adminDashboard/AdminSidebar'
import RegisterDoctor from '../components/adminDashboard/RegisterDoctor'
import PatientList from "../components/adminDashboard/PatientList";
import DoctorList from "../components/adminDashboard/DoctorList";

const AdminDashboard = () => {
    return (
        
    <div className="full-body">
      <div className="body-without-footer  grid grid-cols-6 h-screen max-h-min bg-bgprimary ">
        {/* side bar start */}
        <AdminSidebar></AdminSidebar>

        {/* side bar end  */}

        {/*main dashboard start */}

        <div className="main  col-start-2 col-end-7 m-2  ">
          {/* dashboard today start */}
          <div className="">
            <div className="flex  h-12 m-2 bg-bgprimary rounded ml-6 ">
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

              <div className="flex bg-white rounded shadow   px-4  ml-60 h-14 ">
                <img
                  src={admin_profile}
                  className="h-12 my-1  p-1 rounded-2xl"
                ></img>
                <div className="flex items-center ml-4  font-bold font-poppins">
                  <h1>Admin Name </h1>
                  
                </div>
              </div>
              
            </div>
            <PatientList></PatientList>
            {/*<DoctorList></DoctorList>*/}
            {/*<RegisterDoctor></RegisterDoctor>*/}
           
  

          </div>

  

        </div>
        
      </div>

      <Footer></Footer>

    </div>
        
     );
}
 
export default AdminDashboard;