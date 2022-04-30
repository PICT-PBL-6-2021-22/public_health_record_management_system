import logo from "../../assets/img/landingPage/logo.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
const About = () => {
  return (
    <div className="body  lg:overflow-hidden lg:h-screen max-h-min flex flex-col h-screen">
      
      <Navbar></Navbar>
      

      <div className=" bg-secoundry font-poppins over ">
        <div className="  flex justify-center">
          <h1 className=" p-4 px-8 font-bold  text-2xl ">About us</h1>
        </div>
        <div className="">
          <p className="lg:mx-60 lg:my-4 flex justify-center m-4">
            we are the best hospital in our area and serving good facilities to
            the patient. our patients are always satisfied with us and our
            service. our doctors are highly quilified and expert in their filds.
            and they are the proud of our hospital.
          </p>
          <div className="lg:grid lg:grid-cols-4 mt-8">
            <article className="mx-10 p-10 border-primary border-2 rounded  hover:shadow-lg col-start-2">
              <h1 className="font-bold">Vision</h1>
              <p className="">
                To be known as a multispecialty healthcare organization
                providing state of the art patient care facilities, while
                retaining its established reputation of caring for all sections
                of society – A Hospital with a Heart.
              </p>
            </article>
            <article className="lg:mx-10 lg:p-10 border-primary border-2 rounded hover:shadow-lg mx-10 mt-4 p-10">
              <h1 className="font-bold">Mission</h1>
              <p className="">
                To be known as a multispecialty healthcare organization
                providing state of the art patient care facilities, while
                retaining its established reputation of caring for all sections
                of society – A Hospital with a Heart.
              </p>
            </article>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
