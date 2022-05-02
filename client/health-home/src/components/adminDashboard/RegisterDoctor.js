import React, { useState } from "react";
import Footer from "../landingPage/Footer";
import plus_logo from "../../assets/img/dashboard/add2_pbl.png";
import minus_logo from "../../assets/img/dashboard/minus2_pbl.png";

export default function Register() {

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
    <div class="body col-span-10 h-screen overflow-y-scroll">

      <div class="bg-secoundry">
        <div class="">
          <div class=" flex justify-center mt-4">
            <h1 class="  p-2 px-8 rounded font-bold text-5xl">Register</h1>
          </div>

          <form class="font-poppins ml-20 mt-8 px-8 py-4 bg-white shadow-lg rounded max-w-screen-lg  mb-4 ">
            <div class="flex   mt-2 bg-bgsecondary w-fit  justify-between rounded mx-auto">
              <h1
                className={
                  "py-2 px-8 text-lg font-poppins font-semibold cursor-text rounded bg-primary"
                }
              >
                Doctor
              </h1>

            </div>

            <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
              <label class="font-bold text-base font-poppins px-4 my-4 ">
                Doctor Name
              </label>
              <input
                class="bg-blue-100 rounded h-10 pl-4 mt-4 uppercase"
                required
                placeholder="first name"
              ></input>
              <input
                class="bg-blue-100 rounded h-10 pl-4 mt-4 uppercase"
                required
                placeholder="middle name"
              ></input>
              <input
                class="bg-blue-100 rounded h-10 pl-4 mt-4 uppercase"
                required
                placeholder="last name"
              ></input>
            </div>
            <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
              <label class="font-bold text-base px-4 ">Birthdate</label>
              <input
                type="date"
                class=" bg-blue-100 h-10 rounded pl-4"
                required
              ></input>
            </div>
            <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
              <label class="font-bold text-base px-4 ">Mobile No. </label>

              <input
                type="tel"
                placeholder="mobile no."
                required
                class="pl-4 bg-blue-100 h-10  rounded"
              ></input>
            </div>

            <div class=" aadhar grid grid-cols-4 gap-2 mt-4 mr-4">
              <label class="font-bold text-base px-4 ">Aadhar Card No. </label>

              <input
                type="tel"
                placeholder="Aadhar card No."
                required
                class="pl-4 bg-blue-100 h-10  rounded"
              ></input>
            </div>

            <div class="grid grid-cols-3 gap-2 mt-4 mr-4">
              <label class="font-bold text-base px-4">
                Emergency Contact No.
              </label>
              <input
                type="tel"
                placeholder="emergency contact no."
                required
                class="pl-4 bg-blue-100 h-10  rounded"
              ></input>
            </div>
            <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
              <label class="  text-base font-bold px-4">Email</label>
              <input
                type="email"
                id="email"
                placeholder="abcd@gmail.com"
                required
                class="bg-blue-100 h-10 rounded pl-4 col-span-2 "
              ></input>
            </div>

            <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
              <label class="  text-base font-bold px-4">Blood Group</label>
              <div className="">
                <select
                  className="pl-4 w-1/2 bg-blue-100 h-10  rounded "
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
              <label class=" text-base font-bold px-4 mb-8 col-span-1">
                Address
              </label>
              <div className="grid grid-cols-2 gap-8 col-span-3 ">
                <input
                  type="text"
                  class="bg-blue-100 h-10  rounded pl-4  "
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

            <div class="grid grid-cols-4 gap-2 mt-8 mr-4">
              <label class=" text-base font-bold px-4 grid col-start-1 col-span-1">
                Education
              </label>
              <div className=" ">
                {DiseaseList.map((Singeldisease, index) => (
                  <div className="disease flex " key={index} id="disease">
                    <input
                      class="bg-blue-100 h-10  rounded mb-8 pl-4 grid col-start-2 col-span-1  "
                      placeholder="eg. MBBS"
                      id="disease"
                    ></input>
                    <input
                      className="bg-blue-100 h-10  rounded mb-8 pl-4 grid col-start-3 col-span-1 ml-4"
                      placeholder="Specialisation"
                      id=""
                    ></input>

                    <div className="flex  ml-4">
                      {DiseaseList.length - 1 === index &&
                        DiseaseList.length < 5 && (
                          <button
                            className=" m-2 h-10 w-16 mt-0 ml-4  font-poppins font-semibold cursor-pointer "
                            onClick={handelDiseaseAdd}
                          >
                            <img src={plus_logo} className="w-6 h-6" alt="plus-logo"></img>
                          </button>
                        )}

                      {DiseaseList.length > 1 && (
                        <button
                          className=" m-2 h-10 w-20 mt-0   font-poppins font-semibold cursor-pointer "
                          onClick={handelDiseaseRemove}
                        >
                          <img src={minus_logo} className="w-6 h-6" alt="minus-logo"></img>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
              <label class="  text-base font-bold px-4">Hospital Name</label>
              <input
                type="text"
                id="hospital-name"
                placeholder="e.g: saikrupa hospital"
                required
                class="bg-blue-100 h-10 rounded pl-4 col-span-2 "
              ></input>
            </div>
            <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
              <label class="  text-base font-bold px-4">
                Hospital Contact No.
              </label>
              <input
                type="tel"
                id="hospital-contact-no"
                placeholder="1234567890"
                required
                class="bg-blue-100 h-10 rounded pl-4 col-span-2 "
              ></input>
            </div>

            <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
              <label type="password" class="  text-base font-bold px-4">
                Password
              </label>
              <input
                type="password"
                id="password"
                class="bg-blue-100 h-10  rounded pl-4 "
                required
                placeholder="password"
              ></input>
            </div>

            <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
              <label type="password" class=" text-base font-bold px-4">
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                class="bg-blue-100 h-10  rounded pl-4 "
                required
                placeholder="Confirm password"
              ></input>
            </div>

            <div class="flex justify-center mb-4 mt-8">
              <button class="bg-primary bg- rounded p-2 px-8 font-bold text-base hover:bg-bgsecondary mb-4 ">
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
