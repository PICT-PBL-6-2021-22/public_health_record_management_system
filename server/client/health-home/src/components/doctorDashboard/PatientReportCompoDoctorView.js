import { Link } from "react-router-dom";
import eye from "../../assets/img/dashboard/eye.png";

const PatientReportCompoDoctorView = (props) => {
  const convertDatetoString = (dateString) => {
    let date = new Date(dateString);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="grid grid-cols-4">
      <div>
        <h1>{convertDatetoString(props.prescription.createdAt)}</h1>
      </div>
      <div className="flex">
        <h1>Dr.</h1>
        <h1>{props.prescription.doctor}</h1>
      </div>
      <div>
        <h1>{props.prescription.diagnosis}</h1>
      </div>
      <Link
        to="/doctor/prescription"
        onClick={props.setPrescriptionID(props.prescription._id)}
      >
        <div className=" flex  justify-center bg-primary py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary w-2/4   ">
          <img src={eye} className="h-4 my-auto"></img>
          <button className="font-bold ml-2">Preview </button>
        </div>
      </Link>
    </div>
  );
};

export default PatientReportCompoDoctorView;
