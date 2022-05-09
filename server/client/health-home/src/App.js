import "./App.css";
import Contact from "./components/landingPage/Contact";
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
import { Routes, Route } from "react-router-dom";
import PatientList from "./components/adminDashboard/PatientList";
import DoctorList from "./components/adminDashboard/DoctorList";
import PatientProfileSideBar from "./components/patientDashboard/PatientProfileSideBar";
import PatientHistory from "./components/patientDashboard/PatientHistory";
import DoctorDashboardSidebar from "./components/doctorDashboard/DashboardSidebar";
import AdminSidebar from "./components/adminDashboard/AdminSidebar";
import PreviewPrescription from "./components/patientDashboard/PreviewPrescription";
import PatientReportsDoctorView from "./components/doctorDashboard/PatientReportsDoctorView";
import PatientHistoryDoctorView from "./components/doctorDashboard/PatientHistoryDoctorView";
import PreviewPrescriptionDoctorView from "./components/doctorDashboard/PreviewPrescriptionDoctorView";
import { useState } from "react";

function App() {
  const [healthID, setHealthID] = useState("");
  const [prescriptionID, setPrescriptionID] = useState("");

  return (
    <div className="bg-bgprimary flex">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Register" element={<RegisterPatient />} />
        <Route path="patient" element={<PatientProfileSideBar />}>
          <Route path="dashboard" element={<PatientDashboard />} />
          <Route path="reports" element={<PatientReports />} />
          <Route path="history" element={<PatientHistory />} />
          <Route path="profile" element={<PatientProfile />} />
          <Route path="prescription" element={<PreviewPrescription />} />
        </Route>

        <Route path="doctor" element={<DoctorDashboardSidebar />}>
          <Route
            path="dashboard"
            element={
              <DoctorDashboard
                healthID={healthID}
                setHealthID={setHealthID}
                setPrescriptionID={setPrescriptionID}
              />
            }
          />
          <Route
            path="reports"
            element={
              <PatientReportsDoctorView
                healthID={healthID}
                setPrescriptionID={setPrescriptionID}
              />
            }
          />
          <Route
            path="history"
            element={
              <PatientHistoryDoctorView
                healthID={healthID}
                setPrescriptionID={setPrescriptionID}
              />
            }
          />
          <Route
            path="profile"
            element={<DoctorProfile healthID={healthID} />}
          />
          <Route
            path="addDiagno"
            element={<AddNewDiagnosis healthID={healthID} />}
          />
          <Route
            path="prescription"
            element={
              <PreviewPrescriptionDoctorView
                healthID={healthID}
                prescriptionID={prescriptionID}
              />
            }
          />
        </Route>

        <Route path="admin" element={<AdminSidebar />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="doctorslist" element={<DoctorList />} />
          <Route path="patientslist" element={<PatientList />} />
          <Route path="registerdoctor" element={<RegisterDoctor />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
