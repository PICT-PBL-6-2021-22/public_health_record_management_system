import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import delete_btn from "../../assets/img/dashboard/delete.png";

const PatientListCompo = (props) => {
  const navigate = useNavigate();
  const [dob, setDob] = useState("");
  useEffect(() => {
    const date = new Date(props.patient.dob);
    setDob(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
  }, []);

  const deletePatient = async () => {
    const res = await fetch(`/deletepatient/${props.healthID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = res.json();
    if (data.AuthError) {
      props.settoastCondition({
        status: "info",
        message: "Please Login to proceed!!!",
      });
      props.setToastShow(true);
      navigate("/");
    }
    props.settoastCondition({
      status: "success",
      message: "Patient Deleted Successfuly!!!",
    });
    props.setToastShow(true);
  };

  return (
    <div className="grid grid-cols-9">
      <h1 className="col-start-1">{props.index + 1}</h1>
      <h1 className="col-span-2">{props.patient.healthID}</h1>
      <h1 className="col-span-2">{`${props.patient.name.firstName} ${props.patient.name.middleName} ${props.patient.name.surName}`}</h1>
      <h1 className="col-span-1">{dob}</h1>
      <div className="col-span-2 pr-2">
        <h1 className="text-lg ">{props.patient.mobile}</h1>
        <h1 className="text-sm"> {props.patient.email}</h1>
      </div>
      <div>
        <button
          className="flex items-center bg-primary w-24 h-8 rounded font-bold shadow hover:bg-bgsecondary"
          onClick={deletePatient}
        >
          <img src={delete_btn} className="h-4 mx-2"></img>Delete
        </button>
      </div>
    </div>
  );
};

export default PatientListCompo;
