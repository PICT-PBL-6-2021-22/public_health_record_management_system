import { Link } from "react-router-dom";
import patient_profile from "../../assets/img/dashboard/patient2_pbl.png";



const PreviewPrescription = () => {
    return ( 
        <div className="body h-screen col-span-10 font-poppins">
            <Link to="/patient/profile">
                <button className="flex bg-white rounded shadow  px-4  ml-auto mr-10 mt-6 h-14 ">
                  <img
                    src={patient_profile}
                    className="h-14 p-1 rounded-2xl"
                  ></img>
                  <div className="mt-4 ml-4  font-bold font-poppins">
                    <h1>abcd xyz </h1>
                  </div>
                </button>
              </Link>

            <div className="grid grid-cols-2">
                <div className="bg-white shadow-md p-6 m-6 rounded">
                    <div className="grid grid-cols-3">
                        <h1 className="font-bold ">Date :</h1>
                        <h2 className="ml-2 col-span-2">12/12/2012</h2>

                    </div>
                    <div className="grid grid-cols-3 mt-2">
                        <h1 className="font-bold">Name :</h1>
                        <h2 className="ml-2 col-span-2">ram mohan patil</h2>

                    </div>
                    <div className="grid grid-cols-3">
                        <h1 className="font-bold">Doctor Name :</h1>
                        <h2 className="ml-2 col-span-2">Dr. ram mohan patil</h2>

                    </div>
                    <div className="grid grid-cols-3">
                        <h1 className="font-bold">Hospital Name :</h1>
                        <h2 className="ml-2 col-span-2">sai ram hospital,jalgon</h2>

                    </div>
                    <div className="grid grid-cols-3">
                        <h1 className="font-bold">Hospital address :</h1>
                        <h2 className="ml-2 col-span-2">m.j road,near kali-mata mandir,jalgaon,425115</h2>

                    </div>
                    


                </div>
                <div className="bg-white shadow-md p-6 m-6 rounded">
                    <div className="grid grid-cols-3">
                        <h1 className="font-bold">clinical findings :</h1>
                        <h2 className="ml-2 col-span-2"></h2>

                    </div>
                    <div className="grid grid-cols-3">
                        <h1 className="font-bold">chief complaints :</h1>
                        <h2 className="ml-2 col-span-2">fever</h2>

                    </div>
                    <div className="grid grid-cols-3">
                        <h1 className="font-bold">notes :</h1>
                        <h2 className="ml-2 col-span-2">drink more water</h2>

                    </div>
                    <div className="grid grid-cols-3">
                        <h1 className="font-bold">diagnosis :</h1>
                        <h2 className="ml-2 col-span-2">fever</h2>

                    </div>
                    <div className="grid grid-cols-3">
                        <h1 className="font-bold">Procedure Conducted:</h1>
                        <h2 className="ml-2 col-span-2">x-ray</h2>

                    </div>

                </div>
            </div>
            <div className="bg-white shadow-md p-6 m-6 w-1/2 rounded">
                <div className="flex">
                    <h1 className="font-bold">Medicine Name :</h1>
                    <h2 className="ml-2">crosin</h2>

                </div>
                <div className="flex">
                    <h1 className="font-bold">type :</h1>
                    <h2 className="ml-2">antibiotic</h2>

                </div>
                <div className="flex">
                    <h1 className="font-bold">Duration :</h1>
                    <h2 className="ml-2">5</h2>
                    <h2>(days)</h2>

                </div>
                <div className="flex">
                    <h1 className="font-bold">total tablets :</h1>
                    <h2 className="ml-2">5</h2>

                </div>
                <h1 className="font-bold text-xl">dosages</h1>
                <div className="flex">
                    <h1 className="font-bold">morning :</h1>
                    <h2 className="ml-2">2</h2>

                </div>
                <div className="flex">
                    <h1 className="font-bold">afternoon :</h1>
                    <h2 className="ml-2">2</h2>

                </div>
                <div className="flex">
                    <h1 className="font-bold">night :</h1>
                    <h2 className="ml-2">2</h2>

                </div> 
                <div className="flex">
                    <h1 className="font-bold">Insvestigations :</h1>
                    <h2 className="ml-2">not</h2>

                </div>
                <div className="flex">
                    <h1 className="font-bold">advieces :</h1>
                    <h2 className="ml-2">eat less salty</h2>

                </div>          
            </div>
        </div>
     );
}
 
export default PreviewPrescription;