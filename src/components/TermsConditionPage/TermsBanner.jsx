import { Link } from "react-router-dom";

const TermsBanner = () => {
  return (
    <div className="pt-32 pb-10">
      <div className="container mx-auto">
        <h5 className="text-white text-3xl font-bold text-center">Terms and Conditions</h5>
        <div className="text-sm breadcrumbs mx-auto w-[fit-content] text-white font-semibold">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsBanner;
