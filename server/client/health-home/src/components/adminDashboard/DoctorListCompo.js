import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import delete_btn from "../../assets/img/dashboard/delete.png";

const DoctorListCompo = (props) => {
  const navigate = useNavigate();
  const deleteDoctor = async () => {
    const res = await fetch(`/deletedoctor/${props.id}`, {
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
      message: "Doctor Deleted Successfuly!!!",
    });
    props.setToastShow(true);
  };

  return (
    <div className="grid grid-cols-9">
      <h1 className="col-start-1">{props.index + 1}</h1>
      <div className="col-span-2 flex">
        <h1>Dr.</h1>
        <h1 className="ml-1">{`${props.doctor.name.firstName} ${props.doctor.name.middleName} ${props.doctor.name.surName}`}</h1>
      </div>
      <h1 className="col-span-2">{props.doctor.org}</h1>
      <h1 className="col-span-1">{props.doctor.specialization[0].special}</h1>
      <div className="col-span-2 pr-2">
        <h1 className="text-lg ">{props.doctor.mobile}</h1>
        <h1 className="text-sm"> {props.doctor.email} </h1>
      </div>

      <button
        data-bs-toggle="modal"
        data-bs-target="#deleteDoctor"
        className="flex items-center bg-primary w-24 h-8 rounded font-bold shadow hover:bg-bgsecondary"
        onClick={deleteDoctor}
      >
        <img src={delete_btn} className="h-4 mx-2"></img>Delete
      </button>
    </div>
  );
};

export default DoctorListCompo;
