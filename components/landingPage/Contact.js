import logo from "../../assets/img/landingPage/logo.png";
import Footer from "./Footer";
const Contact = () => {
    return ( 
        
        <div className="body h-screen ">
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

            <div className="bg-secoundry ">

            
            
            <div className=""> 
                <div>
                    <div className="flex justify-center mt-4">
                        <h1 className=" rounded p-4 px-8 font-bold font-poppins text-3xl">Contact us</h1>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 mt-4">
                <div>
                    
                    <div className="max-w-full  mx-32 my-8 bg-white py-8 px-16 rounded-3xl  border-8 border-primary">
                        
                        <div className="flex justify-center">
                            <h1 className=" rounded  px-4 font-bold font-poppins text-3xl">Reach us</h1>
                        </div>
                        <div className="">
                            <h1 className="font-bold font-poppins text-2xl mt-4 ">Email : </h1>
                            <h1 className="font-poppins text-xl">admins@gmail.com</h1>
                        </div>
                        <div>
                            <h1 className="font-bold font-poppins text-2xl mt-4 ">Address :</h1>
                            <h2 className="font-poppins text-xl">first floor, stark tower , near wall street, new york </h2>
                        </div>
                        

                    </div>

                </div>
                <div>
                    <div className="flex justify-center">
                        <h1 className=" rounded  px-4 font-bold font-poppins text-xl"></h1>
                    </div>
                    <div className="bg-white p-16 rounded shadow-lg mr-12 mt-4 mb-8">
                        <form className="grid  gap-8">
                            <div className="grid grid-cols-4  ">
                                <label className="font-poppins font-bold text-xl col-span-1">Name</label>
                                <input type="text" placeholder="name" id="name" className="pl-8 py-2 bg-blue-100  rounded col-span-3 text-lg "></input>
                            </div>
                            <div className="grid grid-cols-4">
                                <label className="font-poppins font-bold text-xl col-span-1">Email</label>
                                <input type="email" placeholder="email" id="email" className="pl-8 py-2 bg-blue-100  rounded col-span-3  text-lg"></input>
                            </div>
                            <div className="grid grid-cols-4">
                                <label className="font-poppins font-bold text-xl col-span-1">Message </label>
                                <textarea type="text" rows="4" cols="25" className="pl-4 bg-blue-100  rounded  col-span-3 text-lg py-2" ></textarea>
                                {/*<input className="pl-8 bg-blue-100  rounded " type="text" placeholder="message"></input>*/}
                            </div>
                            <div className="flex justify-center mt-8">
                              <button className="bg-primary rounded p-3 px-4 font-bold font-poppins text-xl hover:bg-green-700 hover:text-white">Submit</button>
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
}
 
export default Contact;