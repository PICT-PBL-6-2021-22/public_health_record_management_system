import delete_btn from '../../assets/img/dashboard/delete.png'
const DoctorList = () => {
    return ( 
        <div className="m-4 mt-4 font-poppins">
            <div>
                <h1 className="font-bold text-xl ml-16 mt-16" >Doctor List</h1>

            </div>
            <div className="grid grid-rows-2 mt-8 m-14 mr-12  bg-white rounded shadow p-6 gap-4">
                <div className="grid grid-cols-10 font-bold">
                    <h1>Sr.No.</h1>
                    <h1 className='col-span-3'>Doctor Name</h1>
                    <h1>hospital name </h1>
                    <h1>specialist</h1>
                    <h1 className='col-span-3'>Contact</h1>
                    <h1>Action</h1>

                </div>
                <hr></hr>

                <div className="grid grid-cols-10">
                    <h1 className='col-start-1'>1</h1>
                    <h1 className='col-span-3'>Atharva remdas Patil</h1>
                    <h1 className='col-span-2'>01/06/2021</h1>
                    <div  className='col-span-3'>
                        <h1 className='text-lg '>9637585133</h1>
                        <h1 className='text-sm'> jayeshspatil1602@gmail.com</h1>
                    </div>
                    <div >
                        <button className='flex items-center bg-primary w-24 h-8 rounded font-bold shadow hover:bg-bgsecondary'><img src={delete_btn} className='h-4 mx-2'></img>Delete</button>

                    </div>
                  
                </div>

            </div>
        </div>
     );
}
 
export default DoctorList;