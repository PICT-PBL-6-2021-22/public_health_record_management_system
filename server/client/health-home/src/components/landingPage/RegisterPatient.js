import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import plus_logo from "../../assets/img/dashboard/add2_pbl.png";
import minus_logo from "../../assets/img/dashboard/minus2_pbl.png";

export default function Register() {
  const [Toggle, setToggle] = useState("Patient");

  const [DiseaseList, setDiseaseList] = useState([{ disease: "" }]);

  const handelDiseaseAdd = () => {
    setDiseaseList([...DiseaseList, { disease: "" }]);
  };

  const handelDiseaseRemove = (index) => {
    const list = [...DiseaseList];
    list.splice(index, 1);
    setDiseaseList(list);
  };

  return (
    <div class="body overflow-hidden">
      <Navbar></Navbar>
      <div class="bg-secoundry w-full">
        <div class="">
          <div class=" flex justify-center mt-4">
            <h1 class="  p-2 px-8 rounded font-bold text-5xl">Register</h1>
          </div>

          <form className="font-poppins lg:ml-60  lg:px-8 lg:py-4 bg-white shadow-lg rounded max-w-screen-lg mt-8 mb-4 ">
            <div class="flex   mt-2 bg-bgsecondary w-fit  justify-between rounded mx-auto">
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

              {/*<button class=" bg-green-500 rounded basis-1/6  m-2 p-1 text-4xl">patient</button>*/}
              {/*<button class=" bg-green-500  rounded basis-1/6  m-2 p-1 text-4xl">doctor</button>*/}
            </div>
            <div className={Toggle === "Doctor" ? "h-96 p-2" : "hidden"}>
              <h1 className="font-bold flex justify-center mt-6">
                For register as doctor contact to admin with you all information
              </h1>
              <div className="border-4 p-4 m-4 w-1/2 rounded-xl mt-8  ">
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
              <div class="lg:grid lg:grid-cols-4 lg:gap-2 mt-4 mr-4 grid grid-cols-4 gap-2">
                <label class="font-bold lg:text-xl font-poppins px-4 my-4 ">
                  Name
                </label>
                <input
                  class="bg-blue-100 rounded lg:h-10 lg:pl-4 mt-4 uppercase lg:text-md text-sm h-8 px-2"
                  required
                  placeholder="first name"
                ></input>
                <input
                  class="bg-blue-100 rounded lg:h-10 lg:pl-4 mt-4 uppercase lg:text-md text-sm h-8 px-2"
                  required
                  placeholder="middle name"
                ></input>
                <input
                  class="bg-blue-100 rounded lg:h-10 lg:pl-4 mt-4 uppercase lg:text-md text-sm h-8 px-2"
                  required
                  placeholder="last name"
                ></input>
              </div>
              <div class="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
                <label class="font-bold lg:text-xl px-4 ">Birthdate</label>
                <input
                  type="date"
                  class=" bg-blue-100 lg:h-10 rounded pl-4 h-8"
                  required
                ></input>
              </div>
              <div class="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
                <label class="font-bold lg:text-xl px-4 ">Mobile No. </label>

                <input
                  type="tel"
                  placeholder="mobile no."
                  required
                  class="pl-4 bg-blue-100 lg:h-10  rounded h-8"
                ></input>
              </div>

              <div class=" aadhar lg:grid grid-cols-4 gap-2 mt-4 mr-4">
                <label class="font-bold lg:text-xl px-4 ">Aadhar Card No. </label>

                <input
                  type="text"
                  placeholder="Aadhar card No."
                  required
                  class="pl-4 bg-blue-100 lg:h-10  rounded h-8"
                ></input>
              </div>

              <div class="grid grid-cols-3 gap-2 mt-4 mr-4">
                <label class="font-bold lg:text-xl px-4 ">
                  Emergency Contact No.
                </label>
                <input
                  type="tel"
                  placeholder="contact no."
                  required
                  class="pl-4 bg-blue-100 lg:h-10  rounded h-8"
                ></input>
              </div>
              <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
                <label class="  lg:text-xl font-bold px-4 ">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="e.g : abcdefg@gmail.com"
                  required
                  class="bg-blue-100 lg:h-10 rounded pl-4 col-span-2 h-8"
                ></input>
              </div>

              <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
                <label class="  lg:text-xl font-bold px-4">Blood Group</label>
                <div className="">
                  <select
                    className="pl-4 lg:w-1/2 bg-blue-100 lg:h-10  rounded  h-8"
                    id="blood-group"
                  >
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

              <div class="grid grid-cols-4 gap-2 mt-4 mr-4 grid-flow-dense ">
                <label class=" lg:text-xl font-bold px-4 mb-8 col-span-1">
                  Address
                </label>
                <div className="grid grid-cols-2 lg:gap-8 gap-2 col-span-3 ">
                  <input
                    type="text"
                    class="bg-blue-100 lg:h-10  rounded pl-4 h-8 "
                    required
                    placeholder="building/area"
                  ></input>
                  <input
                    type="text"
                    class="bg-blue-100 lg:h-10  rounded pl-4 h-8 "
                    required
                    placeholder="village/city"
                  ></input>
                  <input
                    type="text"
                    class="bg-blue-100 lg:h-10  rounded  pl-4 h-8"
                    required
                    placeholder="Taluka"
                  ></input>
                  <input
                    type="text"
                    class="bg-blue-100 lg:h-10  rounded  pl-4 h-8"
                    required
                    placeholder="District"
                  ></input>
                  <input
                    type="number"
                    className="bg-blue-100 lg:h-10  rounded  pl-4 h-8"
                    required
                    placeholder="Pin-code"
                  ></input>
                  <input
                    type="text"
                    className="bg-blue-100 lg:h-10  rounded  pl-4 h-8"
                    placeholder="State"
                  ></input>
                </div>
              </div>

              <div class="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
                <label type="password" class="  lg:text-xl font-bold px-4">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="bg-blue-100 lg:h-10  rounded pl-4 h-8"
                  required
                  placeholder="password"
                ></input>
              </div>

              <div class="lg:grid lg:grid-cols-4 gap-2 mt-4 mr-4 flex">
                <label type="password" class=" lg:text-xl font-bold px-4">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="bg-blue-100 lg:h-10  rounded lg:pl-4 h-8 pl-2"
                  required
                  placeholder="Confirm password"
                ></input>
              </div>

              <div class="lg:grid lg:grid-cols-2 gap-2 mt-8 mr-4">
                <label class=" lg:text-xl font-bold px-4 grid col-start-1 col-span-1">
                  Name of any permanant disease (if any)
                </label>
                <div className=" ">
                  {DiseaseList.map((Singeldisease, index) => (
                    <div
                      className="disease grid grid-cols-3 lg:ml-0 ml-4 lg:mt-0 mt-2 "
                      key={index}
                      id="disease"
                    >
                      <input
                        class="bg-blue-100 lg:h-10  rounded mb-8 pl-4 grid h-8 "
                        placeholder="eg. diabetese"
                        id="disease"
                      ></input>
                      <input
                        className="bg-blue-100 lg:h-10  rounded mb-8 pl-4 grid  ml-4 h-8"
                        placeholder="year eg.2"
                        id=""
                      ></input>

                      <div className="grid grid-cols-2 ml-4">
                        {DiseaseList.length - 1 === index &&
                          DiseaseList.length < 5 && (
                            <button
                              className=" m-2 h-10 w-16 mt-0  font-poppins font-semibold cursor-pointer "
                              onClick={handelDiseaseAdd}
                            >
                              <img src={plus_logo} className="w-8 h-8"></img>
                            </button>
                          )}

                        {DiseaseList.length > 1 && (
                          <button
                            className=" m-2 h-10 w-20 mt-0   font-poppins font-semibold cursor-pointer "
                            onClick={handelDiseaseRemove}
                          >
                            <img src={minus_logo} className="w-8 h-8"></img>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </form>

          <form
            className={
              Toggle === "Patient"
                ? "font-poppins lg:px-8 py-4 lg:ml-60  bg-white shadow-lg rounded max-w-screen-lg mt-8 mb-4"
                : "hidden"
            }
          >
            <div class=" flex justify-center">
              <h1 class=" p-4 rounded font-bold lg:text-3xl text-xl mt-2">
                Emergency Contact Details
              </h1>
            </div>

            <div class="lg:grid grid-cols-4 gap-2 mt-8 mr-4 flex ">
              <label class="font-bold lg:text-xl px-4 ">Name</label>
              <input
                class="bg-blue-100 rounded h-10 pl-4"
                placeholder="first name"
              ></input>
              <input
                class="bg-blue-100 rounded h-10 pl-4"
                placeholder="last name"
              ></input>
            </div>
            <div class="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
              <label class="font-bold lg:text-xl px-4 ">Mobile No. </label>

              <input
                type="tel"
                placeholder="mobile no."
                required
                class="pl-4 bg-blue-100 lg:h-10  rounded h-8"
              ></input>
            </div>

            <div class="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
              <label class="  lg:text-xl font-bold px-4">Email</label>
              <input
                type="email"
                id="email"
                class="bg-blue-100 lg:h-10 rounded pl-4 h-8"
              ></input>
            </div>

            <div class="mt-4">
              <label class=" rounded p-2 lg:text-xl font-bold px-4">
                Relation with patient
              </label>
              <input
                class="bg-blue-100 lg:h-10 ml-24 rounded pl-4 h-8 lg:mt-0 lg:ml-0 mt-2 "
                placeholder="eg. father"
              ></input>
            </div>

            <div class="grid grid-cols-4 gap-2 mt-4 mr-4 grid-flow-dense ">
              <label class=" lg:text-xl font-bold px-4 mb-8 col-span-1">
                Address
              </label>
              <div className="grid grid-cols-2 gap-8 col-span-3 ">
                <input
                  type="text"
                  class="bg-blue-100 h-10  rounded pl-4 "
                  required
                  placeholder="building/area"
                ></input>
                <input
                  type="text"
                  class="bg-blue-100 h-10  rounded pl-4 "
                  required
                  placeholder="village/city"
                ></input>
                <input
                  type="text"
                  class="bg-blue-100 h-10  rounded  pl-4"
                  required
                  placeholder="Taluka"
                ></input>
                <input
                  type="text"
                  class="bg-blue-100 h-10  rounded  pl-4"
                  required
                  placeholder="District"
                ></input>
                <input
                  type="number"
                  className="bg-blue-100 h-10  rounded  pl-4"
                  required
                  placeholder="Pin-code"
                ></input>
                <input
                  type="text"
                  className="bg-blue-100 h-10  rounded  pl-4"
                  placeholder="State"
                ></input>
              </div>
            </div>
            <div class="flex justify-center mb-4 mt-8">
              <button class="bg-primary rounded p-2 px-8 font-bold text-xl hover:bg-bgsecondary mb-4 ">
                Submit
              </button>
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
