import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";


const ErrorPage = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center custom__BG">
      <div className="container mx-auto text-center font-OutFit text-white">
        <h1 className="text-4xl 2xl:text-5xl first-letter:text-[#BF3BF1] font-bold ">
          Oops!
        </h1>
        <h3 className="text-3xl font-bold mt-3 mb-5">Page not Found.</h3>
        <Link to={`/`}>
          <button className="btn__bg py-4 px-6 font-semibold rounded mx-auto">
            <IoHome /> Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
