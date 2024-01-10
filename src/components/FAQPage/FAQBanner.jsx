import { Link } from "react-router-dom";

const FAQBanner = () => {
  return (
    <div className="pt-32 pb-10">
      <div className="container mx-auto">
        <h5 className="text-white text-3xl font-bold text-center">FAQ</h5>
        <div className="text-sm breadcrumbs mx-auto w-[fit-content] text-white font-semibold">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQBanner;
