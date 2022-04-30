import "./App.css";
import Contact from "./components/landingPage/Contact";
import Navbar from "./components/landingPage/Navbar";
import RegisterPatient from "./components/landingPage/RegisterPatient";
import RegisterDoctor from "./components/adminDashboard/RegisterDoctor";
import LandingPage from "./pages/LandingPage";
import About from "./components/landingPage/About";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import PatientProfile from "./components/patientDashboard/PatientProfile";
import DoctorProfile from "./components/doctorDashboard/DoctorProfile";
import PatientReports from "./components/patientDashboard/PatientReports";
import AddNewDiagnosis from "./components/doctorDashboard/AddNewDiagnosis";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import PatientList from "./components/adminDashboard/PatientList";
import DoctorList from "./components/adminDashboard/DoctorList";
import AdminProfile from "./components/adminDashboard/AdminProfile";
//import PatientReport from "../";
import { BrowserRouter } from "react-router-dom";
// import PatientDashboard_side from "./components/patientDashboard/PatientDashboard_side";
import PatientProfileSideBar from "./components/patientDashboard/PatientProfileSideBar_2";
import PatientHistory from "./components/patientDashboard/PatientHistory";
import DoctorDashboardSidebar from "./components/doctorDashboard/DashboardSidebar";
import AdminSidebar from "./components/adminDashboard/AdminSidebar";
import PreviewPrescription from "./components/patientDashboard/PreviewPrescription";

function App() {
  const location = useLocation();
  return (
    <div className="bg-bgprimary flex">
      {/* {(location.pathname === "/patientdash/reports" ||
        location.pathname === "/patientdash") && <PatientProfileSideBar />} */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Register" element={<RegisterPatient />} />
        <Route path="patient" element={<PatientProfileSideBar />}>
          <Route path="dashboard" element={<PatientDashboard />}/>
          <Route path="reports" element={<PatientReports />} />
          <Route path="history" element={<PatientHistory />} />
          <Route path="profile" element={<PatientProfile />} />
          <Route path="prescription" element={<PreviewPrescription />} />
          

        </Route>

        <Route path="doctor" element={<DoctorDashboardSidebar/>}>
          <Route path="dashboard" element={<DoctorDashboard/>}/>
          <Route path="reports" element={<PatientReports/>}/>
          <Route path="history" element={<PatientHistory/>}/>
          <Route path="profile" element={<DoctorProfile/>}/>
          <Route path="addDiagno" element={<AddNewDiagnosis/>}/>
          <Route path="prescription" element={<PreviewPrescription />} />

        </Route>

        <Route path="admin" element={<AdminSidebar/>}>
          <Route path="dashboard" element={<AdminDashboard/>}/>
          <Route path="doctorslist" element={<DoctorList/>}/>
          <Route path="patientslist" element={<PatientList/>}/>
          <Route path="registerdoctor" element={<RegisterDoctor/>}/>
          <Route path="profile" element={<AdminProfile/>}/>

        </Route>

        {/* <Route path="PatientDash/Profile" element={<PatientProfile />} />
        <Route path="PatientDash/PatientReports" element={<PatientReports />} />
        <Route path="PatientDash/PatientHistory" element={<PatientReports />} />
        <Route
          path="PatientDash/PatientHistory/Report"
          element={<PatientReport />}
        />
        <Route
          path="PatientDash/PatientReports/Report"
          element={<PatientReport />}
        /> */}


        {/* <Route path="DoctorDash" element={<DoctorDashboard />} />
        <Route path="DoctorDash/Profile" element={<DoctorProfile />} />
        <Route path="DoctorDash/PatientReports" element={<PatientReports />} />
        <Route path="DoctorDash/PatientHistory" element={<PatientReports />} />
        <Route path="DoctorDash/AddDiagno" element={<AddNewDiagnosis />} /> */}

        {/* <Route path="AdminDash" element={<AdminDashboard />} />
        <Route path="AdminDash/RegisterDoctor" element={<RegisterDoctor />} />
        <Route path="AdminDash/PatientList" element={<PatientList />} />
        <Route path="AdminDash/DoctorList" element={<DoctorList />} />
        <Route path="AdminDash/AdminProfile" element={<AdminProfile />} /> */}
      </Routes>

      {/* <Navbar></Navbar> */}
      {/* <RegisterPatient></RegisterPatient> */}
      {/* <RegisterDoctor></RegisterDoctor> */}
      {/* <PatientDashboard></PatientDashboard> */}
      {/* <AdminDashboard></AdminDashboard> */}
      {/*  */}
      {/* <Contact></Contact>  */}
      {/* <About></About> */}
      {/* <DoctorDashboard></DoctorDashboard>  */}
      {/* <PatientProfile></PatientProfile>  */}
      {/* <DocotrProfile></DocotrProfile>  */}
      {/* <PatientReports></PatientReports> */}
      {/* <AddNewDiagnosis></AddNewDiagnosis>  */}

      {/* <LandingPage></LandingPage> */}
      {/* <PatientDashboard></PatientDashboard> */}
    </div>
  );
}

export default App;
