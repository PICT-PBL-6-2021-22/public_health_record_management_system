import Footer from "./Footer";
import Navbar from "./Navbar";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReactLoading from "react-loading";

const Contact = (props) => {
  const form = useRef();
  const [Loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
      "service_ytpdnfv",
      "template_sel0xjo",
      form.current,
      "Qc4IEdSfGeohecLaR"
    );
    e.target.reset();
    setLoading(false);
    props.settoastCondition({
      status: "success",
      message: "Message Sent Successfully!!!",
    });
    props.setToastShow(true);
  };

  return (
    <div className="body w-full ">
      <Navbar></Navbar>

      <div className="bg-secoundry ">
        <div className="">
          <div>
            <div className="flex justify-center mt-4">
              <h1 className=" rounded p-4 px-8 font-bold font-poppins text-3xl">
                Contact us
              </h1>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 mt-4 ">
          <div>
            <div className="max-w-full  lg:mx-32 mx-4 my-8 bg-white py-8 px-16 rounded-3xl  border-8 border-primary">
              <div className="flex justify-center">
                <h1 className=" rounded  px-4 font-bold font-poppins text-3xl">
                  Reach us
                </h1>
              </div>
              <div className="">
                <h1 className="font-bold font-poppins text-2xl mt-4 ">
                  Email :
                </h1>
                <h1 className="font-poppins text-xl">admins@gmail.com</h1>
              </div>
              <div>
                <h1 className="font-bold font-poppins text-2xl mt-4 ">
                  Address :
                </h1>
                <h2 className="font-poppins text-xl">
                  first floor, stark tower , near wall street, new york{" "}
                </h2>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-10 rounded shadow-lg lg:mr-12 mt-12 mb-8 m-4">
              <form className="grid  gap-8 " ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-4  ">
                  <label className="font-poppins font-bold lg:text-xl col-span-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    id="name"
                    name="name"
                    className="pl-8 py-2 bg-blue-100  rounded col-span-3 text-lg outline-none"
                  ></input>
                </div>
                <div className="grid grid-cols-4">
                  <label className="font-poppins font-bold lg:text-xl col-span-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    id="email"
                    name="email"
                    className="pl-8 py-2 bg-blue-100  rounded col-span-3  text-lg outline-none"
                  ></input>
                </div>
                <div className="grid grid-cols-4">
                  <label className="font-poppins font-bold lg:text-xl col-span-1">
                    Message{" "}
                  </label>
                  <textarea
                    type="text"
                    rows="4"
                    cols="25"
                    name="message"
                    className="pl-4 bg-blue-100  rounded  col-span-3 text-lg py-2 outline-none"
                  ></textarea>
                </div>
                <div className="flex justify-center ">
                  {Loading ? (
                    <ReactLoading
                      type={"bubbles"}
                      color={""}
                      height={"9%"}
                      width={"9%"}
                    />
                  ) : (
                    <button className="text-lg mt-2 bg-primary py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary">
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-auto relative bottom-0">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
