import { Link, useNavigate } from "react-router-dom";
import patient_profile from "../../assets/img/dashboard/patient2_pbl.png";
import Footer from "../landingPage/Footer";
import doctor_profile from "../../assets/img/dashboard/doctor2.png";
import { useEffect, useState } from "react";

const PreviewPrescriptionDoctorView = (props) => {
  //   function printPrescription() {
  //     var mywindow = window.open("", "PRINT", "height=full,width=full");

  //     mywindow.document.write(
  //       "<html><head><title>" + document.title + "</title> "
  //     );
  //     mywindow.document.write("</head><body >");
  //     mywindow.document.write("<h1>" + document.title + "</h1>");
  //     mywindow.document.write(document.getElementById("prescription").innerHTML);
  //     mywindow.document.write("</body></html>");
  //     // necessary for IE >= 10*/

  //     mywindow.print();
  //     mywindow.close();

  //     return true;
  //   }

  const convertDatetoString = (dateString) => {
    let date = new Date(dateString);
    let day = date.getDate() + 1;
    let month = date.getMonth();
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const navigate = useNavigate();
  const [prescription, setPrescription] = useState({});
  const [patient, setPatient] = useState({});
  useEffect(() => {
    async function fetchprescription() {
      const res = await fetch(
        `/viewprescription/${props.healthID}/${props.prescriptionID}`
      );
      const data = await res.json();
      if (data.error) {
        navigate("/");
      } else {
        setPrescription(data.prescription[0]);
      }
    }
    async function fetchpatient() {
      const res = await fetch(`/searchpatient/${props.healthID}`);
      const data = await res.json();

      if (data.errors) {
        navigate("/");
      } else {
        setPatient(data.patient);
      }
    }
    fetchprescription();
    fetchpatient();
  }, []);

  return (
    <div
      className="body h-screen col-span-10 font-poppins   overflow-y-scroll scroll-m-0"
      id="prescription"
    >
      {/* <iframe id="ifmcontentstoprint" className=""></iframe> */}
      {/* <button onClick={() => printPrescription()}>Print</button> */}
      {/* <Link to="/patient/profile">
        <button className="flex bg-white rounded shadow  px-4  h-14 ml-auto mr-48 mt-4">
          <img
            src={patient_profile}
            className="h-14 p-1 rounded-2xl"
            alt="profile"
          ></img>
          <div className="mt-4 ml-4  font-bold font-poppins">
            <h1>abcd xyz </h1>
          </div>
        </button>
      </Link> */}

      <div className="w-3/4  ml-32 bg-white shadow-xl p-8 mb-4 mt-6">
        <div className="grid grid-cols-2 border-b-2 border-black">
          <div className="m-2 ">
            <div className="flex font-bold">
              <h1 className="">Dr.</h1>
              <h1 className="ml-2 ">{prescription.doctor}</h1>
            </div>
            {/* <div className="flex">
              <h4>MBBS</h4>
              <h3 className="ml-2">M.D</h3>
            </div> */}
            <div className="flex">
              <h2 className="font-bold">Mobile No.</h2>
              <h2 className="ml-2">{prescription.doctormobile}</h2>
            </div>
          </div>
          <div className="m-2 ">
            <div>
              <h1 className="font-bold">{prescription.hospital.name}</h1>
            </div>
            <div className="flex">
              <h2>{prescription.hospital.address}</h2>
              {/* <h2 className="ml-2">425155</h2> */}
            </div>
            <div className="flex">
              <h2 className="font-bold">Phone no.</h2>
              <h2 className="ml-2">{prescription.hospital.mobile}</h2>
            </div>
            {/* <div className="flex">
              <h2 className="font-bold">Closed :</h2>
              <h2 className="ml-2">sunday</h2>
            </div> */}
          </div>
        </div>
        <div className="grid grid-cols-3 mt-4">
          <div className="col-span-2">
            <div className="flex">
              <h1 className="font-bold">Health ID : </h1>
              <h4 className="ml-2">{props.healthID}</h4>
            </div>
            <div className="flex">
              <h1 className="font-bold">Patient Name : </h1>
              <div className="flex">
                <h2>{patient.name.firstName}</h2>
                <h2>{patient.name.middleName}</h2>
                <h2>{patient.name.surName}</h2>
              </div>
            </div>
            <div className="flex">
              <h1 className="font-bold">Address : </h1>
              <h4>{`${patient.address.building}, ${patient.address.city}, ${patient.address.taluka}, ${patient.address.district}, ${patient.address.state}, ${patient.address.pincode}`}</h4>
            </div>
          </div>
          <div>
            <div className="flex">
              <h1 className="font-bold">Date : </h1>
              <h4 className="ml-2">
                {convertDatetoString(prescription.createdAt)}
              </h4>
            </div>
          </div>
        </div>
        {/* <div className="flex">
          <h1 className="font-bold">Referred by :</h1>
          <h4 className="ml-2">Dr.</h4>
          <h4>narayan rane</h4>
        </div> */}
        <div className="grid grid-rows-2 mt-4 ">
          <div className="grid grid-cols-2 justify-center border-t-2 border-b-2 border-black ">
            <h1 className="ml-2 font-bold">Chief complaints</h1>
            <h1 className="ml-2 font-bold">clinincal findings</h1>
          </div>
          <div className="grid grid-cols-2 justify-center ml-2 border-b-2 border-gray-400">
            <h1>acitdity</h1>
            <h1>demo findings</h1>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="font-bold">Notes </h1>
          <h4 className="ml-2">{prescription.notes}</h4>
        </div>
        <div className="mt-2">
          <h1 className="font-bold">Diagnosis</h1>
          <h4 className="ml-2">{prescription.diagnosis}</h4>
        </div>
        <div className="">
          <h1 className="font-bold">Procedure Conducted</h1>
          <h4 className="ml-2">{prescription.procedureConducted}</h4>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-3 border-b-2 border-t-2 border-black">
            <h1 className="font-bold">medicine name</h1>
            <h1 className="font-bold">Dosages</h1>
            <h1 className="font-bold">Duration</h1>
          </div>
          <div className="grid grid-cols-3 border-b-2 border-gray-400">
            <div>
              <h1>crosin</h1>
            </div>
            <div>
              <div className="flex">
                <h2>morning :</h2>
                <h2>2</h2>
              </div>
              <div className="flex">
                <h2>afternoon :</h2>
                <h2>2</h2>
              </div>
              <div className="flex">
                <h2>night :</h2>
                <h2>2</h2>
              </div>
            </div>
            <div>
              <div className="flex">
                <h1>days :</h1>
                <h2>8</h2>
              </div>
              <div className="flex">
                <h1>Total Tab. :</h1>
                <h2>12</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="font-bold">Insvestigations</h1>
          <div>
            <h3>x-ray</h3>
            <h3>p-53</h3>
          </div>
        </div>
        <div className="mb-2">
          <h1 className="font-bold">Advices</h1>
          <div>
            <h3>drink more water</h3>
            <h3>decrese salt in food</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PreviewPrescriptionDoctorView;
