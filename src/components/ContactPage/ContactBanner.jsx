import { Link } from "react-router-dom";

const ContactBanner = () => {
    return (
      <div className="py-32">
        <div className="container mx-auto">
          <h5 className="text-white text-3xl font-bold text-center">Contact</h5>
          <div className="text-sm breadcrumbs mx-auto w-[fit-content] text-white font-semibold">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default ContactBanner;