import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../../../assets/Express Life uk new logo file 01 1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container mx-auto pb-10">
      <img className="mx-auto w-32" src={Logo} alt="" />
      <div className="flex-none md:flex gap-4 items-center my-5">
        <div className="w-full h-[1px] bg-slate-300"></div>
        <div className="flex md:flex-nowrap flex-wrap gap-4 items-center justify-center">
          <Link
            to={`/aboutUs`}
            className="nav__link text-nowrap text-white font-OutFit"
            href=""
          >
            About Us
          </Link>
          <Link
            to={`/features`}
            className="nav__link text-nowrap text-white font-OutFit"
            href=""
          >
            Features
          </Link>
          <Link
            to={`/projects`}
            className="nav__link text-nowrap text-white font-OutFit"
            href=""
          >
            Project
          </Link>
          <Link
            to={`/privacyPolicy`}
            className="nav__link text-nowrap text-white font-OutFit"
            href=""
          >
            Privacy Policy
          </Link>
          <Link
            to={`/termsCondition`}
            className="nav__link text-nowrap text-white font-OutFit"
            href=""
          >
            Tearms & Condition
          </Link>
          <Link to={`/contact`}
            className="nav__link text-nowrap text-white font-OutFit"
            href=""
          >
            Contact
          </Link>
        </div>
        <div className="w-full h-[1px] bg-slate-300"></div>
      </div>
      <div className="flex items-center gap-3 justify-center mb-5">
        <a className="btn__bg p-5 text-2xl rounded" href="">
          <FaFacebook />
        </a>
        <a className="btn__bg p-5 text-2xl rounded" href="">
          <FaTwitter />
        </a>
        <a className="btn__bg p-5 text-2xl rounded" href="">
          <FaInstagram />
        </a>
      </div>
      <p className="text-center font-OutFit ">
        © 2023 Express Life - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
