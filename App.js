import { Link, Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/landingPage/Contact";
import Navbar from "./components/landingPage/Navbar";
import RegisterPatient from "./components/landingPage/RegisterPatient";
import RegisterDoctor from './components/adminDashboard/RegisterDoctor';
import LandingPage from "./pages/LandingPage";
import About from "./components/landingPage/About";
import PatientDashboard from "./pages/PatientDashboard"
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import PatientProfile from "./components/patientDashboard/PatientProfile";
import DocotrProfile from "./components/doctorDashboard/DoctorProfile";
import PatientReports from "./components/patientDashboard/PatientReports";
import AddNewDiagnosis from "./components/doctorDashboard/AddNewDiagnosis";







function App() {
  return (
    <div className="bg-bgprimary">
      
       
      <LandingPage></LandingPage>
      
       
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

      
      
      
      


    </div>
  );
}

export default App;
