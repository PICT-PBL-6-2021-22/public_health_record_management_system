import { Link } from "react-router-dom";
import img_404 from "../assets/img/dashboard/404_page.png";
import Footer from "../components/landingPage/Footer";

const Page_404 = () => {
  return (
    <div className="w-screen h-screen bg-white">
      <img src={img_404} className="mx-auto w-fit h-4/6 my-12" />
      <h1 className="font-poppins font-bold font flex justify-center py-3">
        Page you are searching for doesn't exist!!!
      </h1>
      <div className="flex font-poppins bg-primary px-2 w-fit rounded h-10 items-center mx-auto hover:bg-bgprimary">
        <Link to="/">
          <button className="font-bold px-2">Back to Home</button>
        </Link>
      </div>

      <div className="h-2/12 mt-2">
        <Footer />
      </div>
    </div>
  );
};

export default Page_404;
