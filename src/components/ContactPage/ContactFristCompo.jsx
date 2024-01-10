import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { LuMoveRight } from "react-icons/lu";



const ContactFristCompo = () => {
  return (
    <div className="py-20 px-5 md:px-0">
      <div className="container mx-auto font-OutFit">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="border-slate-300 border text-center text-white rounded-lg py-10 px-3">
            <span className="text-7xl mb-8 flex justify-center">
              <FaPhoneVolume />
            </span>
            <h3 className="uppercase mb-3 text-2xl font-bold ">
              Customer service
            </h3>
            <a className="text-lg" href="tel:07209264">
              07209264
            </a>
          </div>
          <div className="border-slate-300 border text-center text-white rounded-lg py-10 px-3">
            <span className="text-7xl mb-8 flex justify-center">
              <MdOutlineMailOutline />
            </span>
            <h3 className="uppercase mb-3 text-2xl font-bold ">mail address</h3>
            <a className="text-lg" href="mailto:support@expresslife.uk">
              support@expresslife.uk
            </a>
          </div>
          <div className="border-slate-300 border text-center text-white rounded-lg py-10 px-3">
            <span className="text-7xl mb-8 flex justify-center">
              <GrMapLocation />
            </span>
            <h3 className="uppercase mb-3 text-2xl font-bold ">office </h3>
            <p className="text-lg">
              16 Harrison Road, Fulwood, Preston, Lancashire, England, PR2 9QH
            </p>
          </div>
        </div>
        <form className="pt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              className="bg-transparent border outline-none w-full p-5 focus__border duration-300 rounded"
              type="text"
              name=""
              id=""
              placeholder="Full Name"
            />
            <input
              className="bg-transparent border outline-none focus__border duration-300 w-full p-5 rounded"
              type="email"
              name=""
              id=""
              placeholder="Email Address"
            />
            <input
              className="bg-transparent border outline-none focus__border duration-300 w-full p-5 rounded"
              type="number"
              name=""
              id=""
              placeholder="Phone Number"
            />
          </div>
          <div className="my-4">
            <textarea
              className="bg-transparent border outline-none focus__border duration-300 w-full p-5 rounded"
              name=""
              id=""
              cols="30"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button className="btn__bg py-5 mx-auto px-6 font-OutFit rounded mt-4 ">
            Send Form <LuMoveRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFristCompo;
