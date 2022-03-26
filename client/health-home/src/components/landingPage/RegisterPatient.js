import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import plus_logo from '../../assets/img/dashboard/add2_pbl.png';
import minus_logo from '../../assets/img/dashboard/minus2_pbl.png';

export default function Register() {
    const [Toggle, setToggle] = useState("Patient");

    const [DiseaseList,setDiseaseList] = useState([{disease:""},])

    const handelDiseaseAdd = () => {
        setDiseaseList([...DiseaseList,{disease:""}]);

    }

    const handelDiseaseRemove = (index) => {
        const list = [...DiseaseList];
        list.splice(index,1);
        setDiseaseList(list);

    }
    
    return ( 
        <div class="body">
            <Navbar></Navbar>
            <div class="bg-secoundry w-full" >

                <div class="">
                
                
                <div class=" flex justify-center mt-4">
                  <h1 class="  p-2 px-8 rounded font-bold text-5xl">Register</h1>
                </div>

               

                <form class="font-poppins ml-60  px-8 py-4 bg-white shadow-lg rounded max-w-screen-lg mt-8 ">

                    <div class="flex   mt-2 bg-bgsecondary w-fit  justify-between rounded mx-auto">
                     <button className={"py-2 px-8 text-lg font-poppins font-semibold cursor-pointer rounded bg-primary"}>Patient</button>


                 

                        {/*<button class=" bg-green-500 rounded basis-1/6  m-2 p-1 text-4xl">patient</button>*/}
                        {/*<button class=" bg-green-500  rounded basis-1/6  m-2 p-1 text-4xl">doctor</button>*/}
                    </div>    
                    
                    
                    <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
                        <label class="font-bold text-xl font-poppins px-4 my-4 ">Name</label>
                        <input class="bg-blue-100 rounded h-10 pl-4 mt-4 uppercase" required placeholder="first name" ></input>
                        <input class="bg-blue-100 rounded h-10 pl-4 mt-4 uppercase" required placeholder="middle name"></input>
                        <input class="bg-blue-100 rounded h-10 pl-4 mt-4 uppercase" required placeholder="last name"></input>
                    </div>
                    <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
                      <label class="font-bold text-xl px-4 ">Birthdate</label>
                      <input type="date" class=" bg-blue-100 h-10 rounded pl-4" required></input>

                    </div>
                    <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
                        <label class="font-bold text-xl px-4 ">Mobile No. </label>
                        
                        <input type="tel" placeholder="mobile no." required class="pl-4 bg-blue-100 h-10  rounded"></input>

                    </div>
                    
                    <div class=" aadhar grid grid-cols-4 gap-2 mt-4 mr-4">
                        <label class="font-bold text-xl px-4 ">Aadhar Card No.  </label>
                        
                        <input type="text" placeholder="Aadhar card No." required class="pl-4 bg-blue-100 h-10  rounded"></input>

                    </div>

                    
                    <div class="grid grid-cols-3 gap-2 mt-4 mr-4">
                        <label class="font-bold text-xl px-4">Emergency Contact No.</label>
                        <input type="tel" placeholder="emergency contact no." required class="pl-4 bg-blue-100 h-10  rounded"></input>

                    </div>
                    <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
                        <label class="  text-xl font-bold px-4 ">Email</label>
                        <input type="email" id="email" placeholder="e.g : abcdefg@gmail.com" required class="bg-blue-100 h-10 rounded pl-4 col-span-2"></input>

                    </div>

                    <div class="grid grid-cols-4 gap-2 mt-4 mr-4">

                        <label class="  text-xl font-bold px-4" >Blood Group</label>
                        <div className="">
                            <select className="pl-4 w-1/2 bg-blue-100 h-10  rounded " id="blood-group">
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
                        <label class=" text-xl font-bold px-4 mb-8 col-span-1" >Address</label>
                        <div className="grid grid-cols-2 gap-8 col-span-3 ">
                            <input type="text"  class="bg-blue-100 h-10  rounded pl-4  " required placeholder="building/area"></input>
                            <input type="text"  class="bg-blue-100 h-10  rounded pl-4 " required placeholder="village/city"  ></input>
                            <input type="text"  class="bg-blue-100 h-10  rounded  pl-4" required placeholder="Taluka"  ></input>
                            <input type="text"  class="bg-blue-100 h-10  rounded  pl-4" required placeholder="District"  ></input>
                            <input type="number" className="bg-blue-100 h-10  rounded  pl-4" required placeholder="Pin-code"></input>
                            <input type="text" className="bg-blue-100 h-10  rounded  pl-4" placeholder="State"></input>

                        </div>
                        


                    </div>

                    <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
                        <label type="password" class="  text-xl font-bold px-4">Password</label>
                        <input type="password" id="password" class="bg-blue-100 h-10  rounded pl-4 " required placeholder="password" ></input>


                    </div>

                    <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
                        <label type="password" class=" text-xl font-bold px-4">Confirm Password</label>
                        <input type="password" id="password" class="bg-blue-100 h-10  rounded pl-4 " required placeholder="Confirm password" ></input>


                    </div>

                    <div class="grid grid-cols-2 gap-2 mt-8 mr-4">
                        <label  class=" text-xl font-bold px-4 grid col-start-1 col-span-1">Name of any permanant disease (if any)</label>
                        <div className=" ">
                            {DiseaseList.map((Singeldisease,index) => (
                                <div className="disease  grid grid-cols-3" key={index} id="disease">
                                    <input class="bg-blue-100 h-10  rounded mb-8 pl-4 grid  " placeholder="eg. diabetese" id="disease"></input>
                                    <input className="bg-blue-100 h-10  rounded mb-8 pl-4 grid  ml-4" placeholder="year eg.2" id=""></input>
                                   
                                    <div className="grid grid-cols-2 ml-4">
                                        {DiseaseList.length-1 === index && DiseaseList.length <5 && <button className=" m-2 h-10 w-16 mt-0  font-poppins font-semibold cursor-pointer " onClick={handelDiseaseAdd}><img src={plus_logo} className="w-8 h-8"></img></button>}
                                        
                                        {DiseaseList.length >1 && <button className=" m-2 h-10 w-20 mt-0   font-poppins font-semibold cursor-pointer " onClick={handelDiseaseRemove}><img src={minus_logo} className="w-8 h-8"></img></button>}

                                    </div> 
                                    
                                 

                                </div>

                            ))}


                        </div>
                        
                        
                    </div>


                </form>

                <form class="font-poppins px-8 py-4 ml-60  bg-white shadow-lg rounded max-w-screen-lg mt-8 mb-4">
                   <div class=" flex justify-center">
                        <h1 class=" p-4 rounded font-bold text-3xl mt-2">Emergency Contact Details</h1>
                    </div>

                    <div class="grid grid-cols-4 gap-2 mt-8 mr-4 ">
                        <label class="font-bold text-xl px-4 ">Name</label>
                        <input class="bg-blue-100 rounded h-10 pl-4" placeholder="first name"></input>
                        <input class="bg-blue-100 rounded h-10 pl-4" placeholder="last name"></input>
                        
                    </div>
                    <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
                        <label class="font-bold text-xl px-4 ">Mobile No. </label>
                        
                        <input type="tel" placeholder="mobile no."required class="pl-4 bg-blue-100 h-10  rounded"></input>

                    </div>

                    <div class="grid grid-cols-4 gap-2 mt-4 mr-4">
                        <label class="  text-xl font-bold px-4">Email</label>
                        <input type="email" id="email" class="bg-blue-100 h-10 rounded pl-4"></input>

                    </div>

                   
                    <div class="mt-4">
                        <label class=" rounded p-2 text-xl font-bold px-4">Relation with patient</label>
                        <input class="bg-blue-100 h-10 ml-6 rounded pl-4" placeholder="eg. father" ></input>

                    </div>

                    <div class="grid grid-cols-4 gap-2 mt-4 mr-4 grid-flow-dense ">
                        <label class=" text-xl font-bold px-4 mb-8 col-span-1" >Address</label>
                        <div className="grid grid-cols-2 gap-8 col-span-3 ">
                            <input type="text"  class="bg-blue-100 h-10  rounded pl-4  " required placeholder="building/area"></input>
                            <input type="text"  class="bg-blue-100 h-10  rounded pl-4 " required placeholder="village/city"  ></input>
                            <input type="text"  class="bg-blue-100 h-10  rounded  pl-4" required placeholder="Taluka"  ></input>
                            <input type="text"  class="bg-blue-100 h-10  rounded  pl-4" required placeholder="District"  ></input>
                            <input type="number" className="bg-blue-100 h-10  rounded  pl-4" required placeholder="Pin-code"></input>
                            <input type="text" className="bg-blue-100 h-10  rounded  pl-4" placeholder="State"></input>


                        </div>
                        


                    </div>
                    <div class="flex justify-center mb-4 mt-8">
                        <button class="bg-primary rounded p-2 px-8 font-bold text-xl hover:bg-bgsecondary mb-4 ">Submit</button>
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
 
