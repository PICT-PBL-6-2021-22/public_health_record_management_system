import delete_btn from '../../assets/img/dashboard/delete.png'

const DoctorListCompo = () => {
    return (
      <div className="grid grid-cols-9">
        <h1 className="col-start-1">1</h1>
        <div className="col-span-2 flex">
          <h1>Dr.</h1>
          <h1 className="ml-1">chaman ram patil</h1>
        </div>
        <h1 className="col-span-2">surya-chandra hospital</h1>
        <h1 className="col-span-1">heart specialist</h1>
        <div className="col-span-2 pr-2">
          <h1 className="text-lg ">9637585133</h1>
          <h1 className="text-sm"> jayeshspatil1602@gmail.com</h1>
        </div>
       
        <button data-bs-toggle="modal" data-bs-target="#deleteDoctor" className="flex items-center bg-primary w-24 h-8 rounded font-bold shadow hover:bg-bgsecondary">
          <img src={delete_btn} className="h-4 mx-2"></img>Delete
        </button>
        
      </div>
    );
}
 
export default DoctorListCompo;