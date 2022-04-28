import delete_btn from "../../assets/img/dashboard/delete.png";

const PatientListCompo = () => {
    return (
      <div className="grid grid-cols-9">
        <h1 className="col-start-1">1</h1>
        <h1 className="col-span-2">123456789123</h1>
        <h1 className="col-span-2">Atharva remdas Patil</h1>
        <h1 className="col-span-1">01/06/2021</h1>
        <div className="col-span-2 pr-2">
          <h1 className="text-lg ">9637585133</h1>
          <h1 className="text-sm"> jayeshspatil1602@gmail.com</h1>
        </div>
        <div>
          <button className="flex items-center bg-primary w-24 h-8 rounded font-bold shadow hover:bg-bgsecondary">
            <img src={delete_btn} className="h-4 mx-2"></img>Delete
          </button>
        </div>
      </div>
    );
}
 
export default PatientListCompo;