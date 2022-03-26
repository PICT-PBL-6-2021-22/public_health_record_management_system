import logo from "../../assets/img/landingPage/logo.png";
import Footer from "./Footer";
const About = () => {
    return ( 
        <div className="body h-screen">
            <nav>
                <nav className="bg-white w-screen h-14 shadow-sm px-2 lg:px-16 py-3 flex justify-items-center items-center">
                    <img src={logo} alt="logo" className="h-8 pr-3" />
                    <h1 className="font-poppins font-medium lg:font-bold text-sm lg:text-xl">Healthcare Management System</h1>
                    <ul className="flex ml-auto w-48 justify-evenly font-lato font-semibold">
                        <li></li>
                        <li></li>
                    </ul>
      
                    {/*<button className="bg-primary py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary" ></button>*/}
                </nav>

            </nav>

            <div className="bg-secoundry max-h-screen">
                <div className="flex justify-center mt-4">
                    <h1 className=" rounded p-4 px-8 font-bold font-poppins text-2xl">About us</h1>
                </div>
                <div>
                    <h1>lorem..........</h1>
                </div>
                
            </div>

        </div>
     );
}
 
export default About;