import { Link } from "react-router-dom";
import eye from "../../assets/img/dashboard/eye.png";

const PatientHistoryCompoDoctorView = () => {
  return (
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
      <Link to="/patient/prescription">
        <div className=" flex  justify-center bg-primary py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary w-2/4   ">
          <img src={eye} className="h-4 my-auto"></img>
          <button className="font-bold ml-2">Preview </button>
        </div>
      </Link>
    </div>
  );
};

export default PatientHistoryCompoDoctorView;
