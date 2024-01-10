import { Link } from "react-router-dom";


const PrivacyBanner = () => {
    return (
      <div className="py-32">
        <div className="container mx-auto">
          <h5 className="text-white text-3xl font-bold text-center">
            Privacy Policy
          </h5>
          <div className="text-sm breadcrumbs mx-auto w-[fit-content] text-white font-semibold">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default PrivacyBanner;