import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import plus_logo from "../../assets/img/dashboard/add2_pbl.png";
import minus_logo from "../../assets/img/dashboard/minus2_pbl.png";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

export default function Register(props) {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [Toggle, setToggle] = useState("Patient");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    name: {},
    address: {},
    contactPerson: { address: {} },
  });
  const [diseaseList, setDiseaseList] = useState([{ disease: "", yrs: "" }]);
  const [passwordError, setPasswordError] = useState("");
  const addDisease = () => {
    const diseaseList1 = [...diseaseList];
    diseaseList1.push({ disease: "", yrs: "" });
    setDiseaseList(diseaseList1);
  };

  const [patient, setPatient] = useState({
    name: {
      firstName: "",
      middleName: "",
      surName: "",
    },
    dob: "",
    mobile: "",
    email: "",
    adharCard: "",
    bloodGroup: "",
    address: {
      building: "",
      city: "",
      taluka: "",
      district: "",
      state: "",
      pincode: "",
    },
    password: "",
    diseases: diseaseList,
    contactPerson: {
      name: {
        firstName: "",
        surName: "",
      },
      mobile: "",
      email: "",
      relation: "",
      address: {
        building: "",
        city: "",
        taluka: "",
        district: "",
        state: "",
        pincode: "",
      },
    },
  });

  useEffect(() => {
    const auth = async () => {
      const res = await fetch("/auth");
      const data = await res.json();
      if (data.msg === "Doctor Login Found") {
        navigate("/doctor/dashboard");
      }
      if (data.msg === "Admin Login Found") {
        navigate("/admin/dashboard");
      }
      if (data.msg === "Patient Login Found") {
        navigate("/patient/dashboard");
      }
    };
    auth();
  });

  const handleRegisterPatient = async (e) => {
    e.preventDefault();
    setPasswordError("");
    if (patient.password === confirmPassword) {
      setLoading(true);
      e.preventDefault();
      const res = await fetch("/register/patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patient),
      });

      const data = await res.json();

      if (data.errors) {
        setLoading(false);
        setErrors(data.errors);
        props.settoastCondition({
          status: "error",
          message: "Please Enter all fields correctly!",
        });
        props.setToastShow(true);
      } else {
        setLoading(false);
        props.settoastCondition({
          status: "success",
          message: "Your Registration done Successfully!",
        });
        props.setToastShow(true);
        navigate("/patient/dashboard");
      }
    } else {
      setPasswordError("Password Doesn't Matches");
    }
  };
  return (
    <div className="body overflow-hidden">
      <Navbar></Navbar>
      <div className="bg-secoundry w-full">
        <div className="">
          <div className=" flex justify-center mt-4">
            <h1 className="  p-2 px-8 rounded font-bold text-5xl">Register</h1>
          </div>

          <form
            className="font-poppins lg:ml-60  lg:px-8 lg:py-4 bg-white shadow-lg rounded max-w-screen-lg mt-8 mb-4 "
            onSubmit={handleRegisterPatient}
          >
            <div className="flex   mt-2 bg-bgsecondary w-fit  justify-between rounded mx-auto">
              <button
                onClick={() => setToggle("Patient")}
                className={
                  Toggle === "Patient"
                    ? "py-2 px-8 text-lg font-poppins font-semibold cursor-pointer rounded bg-primary"
                    : "py-2 px-8 text-lg font-poppins font-semibold cursor-pointer rounded bg-bgsecondary"
                }
              >
                Patient
              </button>
              <button
                onClick={() => setToggle("Doctor")}
                className={
                  Toggle === "Doctor"
                    ? "py-2 px-8 text-lg font-poppins font-semibold cursor-pointer rounded bg-primary"
                    : "py-2 px-8 text-lg font-poppins font-semibold cursor-pointer rounded bg-bgsecondary"
                }
              >
                Doctor
              </button>
            </div>
            <div
              className={
                Toggle === "Doctor"
                  ? "h-96 p-2 flex flex-col justify-center "
                  : "hidden"
              }
            >
              <h1 className="font-bold flex justify-center mt-6">
                For register as doctor contact to admin with you all information
              </h1>
              <div className="border-4 p-4 mx-auto w-1/2 rounded-xl mt-8  ">
                <h1>send your all information</h1>
                <div>
                  <div className=" rounded-xl p-4 mt-4 ">
                    <h1 className="font-bold">Email :</h1>
                    <p>admin@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={Toggle === "Patient" ? "" : "hidden"}>
              <div className="lg:grid lg:grid-cols-4 lg:gap-2 mt-4 mr-4 grid grid-cols-4 gap-2">
                <label className="font-bold lg:text-xl font-poppins px-4 my-4 ">
                  Name
                </label>
                <div>
                  <input
                    className="bg-blue-100 rounded lg:h-10 lg:pl-4 mt-4 lg:text-md text-sm h-8 px-2"
                    required
                    placeholder="first name"
                    value={patient.name.firstName}
                    onChange={(e) => {
                      let temppatient = { ...patient };
                      temppatient.name.firstName = e.target.value;
                      setPatient(temppatient);
                    }}
                  ></input>
                </div>
                <input
                  className="bg-blue-100 rounded lg:h-10 lg:pl-4 mt-4 lg:text-md text-sm h-8 px-2"
                  required
                  placeholder="middle name"
                  value={patient.name.middleName}
                  onChange={(e) => {
                    let temppatient = { ...patient };
                    temppatient.name.middleName = e.target.value;
                    setPatient(temppatient);
                  }}
                ></input>
                <input
                  className="bg-blue-100 rounded lg:h-10 lg:pl-4 mt-4 lg:text-md text-sm h-8 px-2"
                  required
                  placeholder="last name"
                  value={patient.name.surName}
                  onChange={(e) => {
                    let temppatient = { ...patient };
                    temppatient.name.surName = e.target.value;
                    setPatient(temppatient);
                  }}
                ></input>
              </div>
              <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
                <label className="font-bold lg:text-xl px-4 ">Birthdate</label>
                <input
                  type="date"
                  className=" bg-blue-100 lg:h-10 rounded pl-4 h-8"
                  required
                  value={patient.dob}
                  onChange={(e) => {
                    let temppatient = { ...patient };
                    temppatient.dob = e.target.value;
                    setPatient(temppatient);
                  }}
                ></input>
              </div>
              <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
                <label className="font-bold lg:text-xl px-4 ">
                  Mobile No.{" "}
                </label>

                <input
                  type="tel"
                  placeholder="mobile no."
                  required
                  className="pl-4 bg-blue-100 lg:h-10  rounded h-8"
                  value={patient.mobile}
                  onChange={(e) => {
                    let temppatient = { ...patient };
                    temppatient.mobile = e.target.value;
                    setPatient(temppatient);
                  }}
                ></input>
              </div>

              <div className=" aadhar lg:grid grid-cols-4 gap-2 mt-4 mr-4">
                <label className="font-bold lg:text-xl px-4 ">
                  Aadhar Card No.{" "}
                </label>
                <div>
                  <input
                    type="text"
                    placeholder="Aadhar card No."
                    required
                    className="pl-4 bg-blue-100 lg:h-10  rounded h-8"
                    value={patient.adharCard}
                    onChange={(e) => {
                      let temppatient = { ...patient };
                      temppatient.adharCard = e.target.value;
                      setPatient(temppatient);
                    }}
                  ></input>
                  <span className="text-xs text-red-500 py-1">
                    {errors.adharCard}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mt-4 mr-4">
                <label className="  lg:text-xl font-bold px-4 ">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="e.g : abcdefg@gmail.com"
                  required
                  className="bg-blue-100 lg:h-10 rounded pl-4 col-span-2 h-8"
                  value={patient.email}
                  onChange={(e) => {
                    let temppatient = { ...patient };
                    temppatient.email = e.target.value;
                    setPatient(temppatient);
                  }}
                ></input>
              </div>

              <div className="grid grid-cols-4 gap-2 mt-4 mr-4">
                <label className="  lg:text-xl font-bold px-4">
                  Blood Group
                </label>
                <div className="">
                  <select
                    className="pl-4 lg:w-1/2 bg-blue-100 lg:h-10  rounded  h-8"
                    id="blood-group"
                    value={patient.bloodGroup}
                    onChange={(e) => {
                      let temppatient = { ...patient };
                      temppatient.bloodGroup = e.target.value;
                      setPatient(temppatient);
                    }}
                  >
                    <option id="select">select</option>
                    <option id="A+">A+</option>
                    <option id="A-">A-</option>
                    <option id="B+">B+</option>
                    <option id="B-">B-</option>
                    <option id="AB+">AB+</option>
                    <option id="AB-">AB-</option>
                    <option id="O+">O+</option>
                    <option id="O-">O-</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mt-4 mr-4 grid-flow-dense ">
                <label className=" lg:text-xl font-bold px-4 mb-8 col-span-1">
                  Address
                </label>
                <div className="grid grid-cols-2 lg:gap-8 gap-2 col-span-3 ">
                  <input
                    type="text"
                    className="bg-blue-100 lg:h-10  rounded pl-4 h-8 "
                    required
                    placeholder="building/area"
                    value={patient.address.building}
                    onChange={(e) => {
                      let temppatient = { ...patient };
                      temppatient.address.building = e.target.value;
                      setPatient(temppatient);
                    }}
                  ></input>
                  <input
                    type="text"
                    className="bg-blue-100 lg:h-10  rounded pl-4 h-8 "
                    required
                    placeholder="village/city"
                    value={patient.address.city}
                    onChange={(e) => {
                      let temppatient = { ...patient };
                      temppatient.address.city = e.target.value;
                      setPatient(temppatient);
                    }}
                  ></input>
                  <input
                    type="text"
                    className="bg-blue-100 lg:h-10  rounded  pl-4 h-8"
                    required
                    placeholder="Taluka"
                    value={patient.address.taluka}
                    onChange={(e) => {
                      let temppatient = { ...patient };
                      temppatient.address.taluka = e.target.value;
                      setPatient(temppatient);
                    }}
                  ></input>
                  <input
                    type="text"
                    className="bg-blue-100 lg:h-10  rounded  pl-4 h-8"
                    required
                    placeholder="District"
                    value={patient.address.district}
                    onChange={(e) => {
                      let temppatient = { ...patient };
                      temppatient.address.district = e.target.value;
                      setPatient(temppatient);
                    }}
                  ></input>
                  <input
                    type="number"
                    className="bg-blue-100 lg:h-10  rounded  pl-4 h-8"
                    required
                    placeholder="Pin-code"
                    value={patient.address.pincode}
                    onChange={(e) => {
                      let temppatient = { ...patient };
                      temppatient.address.pincode = e.target.value;
                      setPatient(temppatient);
                    }}
                  ></input>
                  <input
                    type="text"
                    className="bg-blue-100 lg:h-10  rounded  pl-4 h-8"
                    placeholder="State"
                    value={patient.address.state}
                    onChange={(e) => {
                      let temppatient = { ...patient };
                      temppatient.address.state = e.target.value;
                      setPatient(temppatient);
                    }}
                  ></input>
                </div>
              </div>

              <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
                <label type="password" className="  lg:text-xl font-bold px-4">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-blue-100 lg:h-10  rounded pl-4 h-8"
                  required
                  placeholder="password"
                  value={patient.password}
                  onChange={(e) => {
                    let temppatient = { ...patient };
                    temppatient.password = e.target.value;
                    setPatient(temppatient);
                  }}
                ></input>
              </div>

              <div className="lg:grid lg:grid-cols-4 gap-2 mt-4 mr-4 flex">
                <label type="password" className=" lg:text-xl font-bold px-4">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-blue-100 lg:h-10  rounded lg:pl-4 h-8 pl-2"
                  required
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></input>
                <span className="text-sm py-1 text-red-500">
                  {passwordError}
                </span>
              </div>

              <div className="lg:grid lg:grid-cols-10 gap-2 mt-8 mr-4">
                <div className="col-span-5">
                  <label className=" lg:text-xl font-bold px-4 grid col-start-1 col-span-3">
                    Name of any permanant disease (if any)
                  </label>
                </div>
                <div className="col-span-4">
                  {diseaseList.map((disease, index) => {
                    return (
                      <div
                        key={index}
                        className="grid grid-cols-7 col-span-1 mb-3"
                      >
                        <input
                          className="bg-blue-100 lg:h-10 col-span-3 rounded lg:pl-4 h-8 pl-2"
                          type="text"
                          name="disease"
                          value={disease.disease}
                          placeholder="eg.dibetes"
                          onChange={(e) => {
                            let diseaseList1 = [...diseaseList];
                            diseaseList1[index].disease = e.target.value;
                            setDiseaseList(diseaseList1);
                            let temppatient = { ...patient };
                            temppatient.diseases = diseaseList;
                            setPatient(temppatient);
                          }}
                        />
                        <input
                          className="bg-blue-100 lg:h-10 col-span-3  rounded lg:pl-4 h-8 pl-2 ml-4"
                          type="text"
                          name="yrs"
                          placeholder="years e.g 3"
                          value={disease.yrs}
                          onChange={(e) => {
                            let diseaseList1 = [...diseaseList];
                            diseaseList1[index].yrs = e.target.value;
                            setDiseaseList(diseaseList1);
                            let temppatient = { ...patient };
                            temppatient.diseases = diseaseList;
                            setPatient(temppatient);
                          }}
                        />

                        <div
                          className="col-span-1 pl-3"
                          onClick={() => {
                            if (diseaseList.length > 1) {
                              let diseaseList1 = [...diseaseList];
                              diseaseList1.splice(index, 1);
                              let temppatient = { ...patient };
                              temppatient.diseases = diseaseList1;
                              setPatient(temppatient);
                              setDiseaseList(diseaseList1);
                            }
                          }}
                        >
                          <img src={minus_logo} alt="" className="h-8 w-8" />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div onClick={addDisease} className="col-span-1">
                  <img src={plus_logo} alt="" className="h-8 w-8" />
                </div>
              </div>
            </div>

            <div className={Toggle === "Patient" ? "" : "hidden"}>
              <div className="flex justify-center">
                <h1 className=" p-4 rounded font-bold lg:text-3xl text-xl mt-2">
                  Emergency Contact Details
                </h1>
              </div>

              <div className="lg:grid grid-cols-4 gap-2 mt-8 mr-4 flex">
                <label className="font-bold lg:text-xl px-4 ">Name</label>
                <input
                  className="bg-blue-100 rounded h-10 pl-4"
                  placeholder="first name"
                  value={patient.contactPerson.name.firstName}
                  onChange={(e) => {
                    let temppatient = { ...patient };
                    temppatient.contactPerson.name.firstName = e.target.value;
                    setPatient(temppatient);
                  }}
                ></input>
                <input
                  className="bg-blue-100 rounded h-10 pl-4"
                  placeholder="last name"
                  value={patient.contactPerson.name.surName}
                  onChange={(e) => {
                    let temppatient = { ...patient };
                    temppatient.contactPerson.name.surName = e.target.value;
                    setPatient(temppatient);
                  }}
                ></input>
              </div>
              <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
                <label className="font-bold lg:text-xl px-4 ">
                  Mobile No.{" "}
                </label>

                <input
                  type="tel"
                  placeholder="mobile no."
                  required
                  className="pl-4 bg-blue-100 lg:h-10  rounded h-8"
                  value={patient.contactPerson.mobile}
                  onChange={(e) => {
                    let temppatient = { ...patient };
                    temppatient.contactPerson.mobile = e.target.value;
                    setPatient(temppatient);
                  }}
                ></input>
              </div>

              <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
                <label className="  lg:text-xl font-bold px-4">Email</label>
                <input
                  type="email"
                  id="email"
                  className="bg-blue-100 lg:h-10 rounded pl-4 h-8"
                  value={patient.contactPerson.email}
                  onChange={(e) => {
                    let temppatient = { ...patient };
                    temppatient.contactPerson.email = e.target.value;
                    setPatient(temppatient);
                  }}
                ></input>
              </div>

              <div className="mt-4">
                <label className=" rounded p-2 lg:text-xl font-bold px-4">
                  Relation with patient
                </label>
                <input
                  className="bg-blue-100 lg:h-10 ml-24 rounded pl-4 h-8 lg:mt-0 lg:ml-0 mt-2 "
                  placeholder="eg. father"
                  value={patient.contactPerson.relation}
                  onChange={(e) => {
                    let temppatient = { ...patient };
                    temppatient.contactPerson.relation = e.target.value;
                    setPatient(temppatient);
                  }}
                ></input>
              </div>

              <div className="grid grid-cols-4 gap-2 mt-4 mr-4 grid-flow-dense ">
                <label className=" lg:text-xl font-bold px-4 mb-8 col-span-1">
                  Address
                </label>
                <div className="grid grid-cols-2 gap-8 col-span-3 ">
                  <input
                    type="text"
                    className="bg-blue-100 h-10  rounded pl-4 "
                    required
                    placeholder="building/area"
                    value={patient.contactPerson.address.building}
                    onChange={(e) => {
                      let temppatient = { ...patient };
                      temppatient.contactPerson.address.building =
                        e.target.value;
                      setPatient(temppatient);
                    }}
                  ></input>
                  <input
                    type="text"
                    className="bg-blue-100 h-10  rounded pl-4 "
                    required
                    placeholder="village/city"
                    value={patient.contactPerson.address.city}
                    onChange={(e) => {
                      let temppatient = { ...patient };
                      temppatient.contactPerson.address.city = e.target.value;
                      setPatient(temppatient);
                    }}
                  ></input>
                  <input
                    type="text"
                    className="bg-blue-100 h-10  rounded  pl-4"
                    required
                    placeholder="Taluka"
                    value={patient.contactPerson.address.taluka}
                    onChange={(e) => {
                      let temppatient = { ...patient };
                      temppatient.contactPerson.address.taluka = e.target.value;
                      setPatient(temppatient);
                    }}
                  ></input>
                  <input
                    type="text"
                    className="bg-blue-100 h-10  rounded  pl-4"
                    required
                    placeholder="District"
                    value={patient.contactPerson.address.district}
                    onChange={(e) => {
                      let temppatient = { ...patient };
                      temppatient.contactPerson.address.district =
                        e.target.value;
                      setPatient(temppatient);
                    }}
                  ></input>
                  <input
                    type="number"
                    className="bg-blue-100 h-10  rounded  pl-4"
                    required
                    placeholder="Pin-code"
                    value={patient.contactPerson.address.pincode}
                    onChange={(e) => {
                      let temppatient = { ...patient };
                      temppatient.contactPerson.address.pincode =
                        e.target.value;
                      setPatient(temppatient);
                    }}
                  ></input>
                  <input
                    type="text"
                    className="bg-blue-100 h-10  rounded  pl-4"
                    placeholder="State"
                    value={patient.contactPerson.address.state}
                    onChange={(e) => {
                      let temppatient = { ...patient };
                      temppatient.contactPerson.address.state = e.target.value;
                      setPatient(temppatient);
                    }}
                  ></input>
                </div>
              </div>
              <div className="flex justify-center mb-4 mt-8">
                {Loading ? (
                  <ReactLoading
                    type={"bubbles"}
                    color={""}
                    height={"5%"}
                    width={"5%"}
                  />
                ) : (
                  <button className="bg-primary rounded p-2 px-8 font-bold text-xl hover:bg-bgsecondary mb-4 ">
                    Submit
                  </button>
                )}
              </div>
            </div>
          </form>

          <div className="mt-auto relative bottom-0">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
}
