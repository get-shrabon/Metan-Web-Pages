import { LuMoveRight } from "react-icons/lu";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { GiMining } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import { SiSololearn } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GiTeamDowngrade } from "react-icons/gi";
import { GiIncense } from "react-icons/gi";

const AccessFuture = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="py-32 text-white container  mx-auto">
      <h2
        data-aos="flip-up"
        className="font-bold text-3xl font-OutFit text-center py-2"
      >
        Access The Future With Confidence
      </h2>
      <p data-aos="flip-up" className="text-center">
        Check out the best features.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 px-5 md:px-0">
        <div
          data-aos="zoom-in"
          className="border rounded border-[#ffffff32] access__card text-center"
        >
          <div className="p-5">
            <p className="text-7xl flex justify-center">
              <GiMining />
            </p>
            <h3 className="text-2xl my-2 font-OutFit font-bold">Mining</h3>
            <p>Metaverse universe manageable from all devices.</p>
            <button className="btn__bg mx-auto py-5 px-8 rounded font-OutFit mt-3">
              {" "}
              Read More <LuMoveRight />
            </button>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="border rounded border-[#ffffff32] access__card text-center"
        >
          <div className="p-5">
            <p className="text-7xl flex justify-center">
              <BsCashCoin />
            </p>
            <h3 className="text-2xl my-2 font-OutFit font-bold">
              Daily Cash Back
            </h3>
            <p>Metaverse universe manageable from all devices.</p>
            <button className="btn__bg mx-auto py-5 px-8 rounded font-OutFit mt-3">
              {" "}
              Read More <LuMoveRight />
            </button>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="border rounded border-[#ffffff32] access__card text-center"
        >
          <div className="p-5">
            <p className="text-7xl flex justify-center">
              <SiSololearn />
            </p>
            <h3 className="text-2xl my-2 font-OutFit font-bold">
              Direct Referrals
            </h3>
            <p>Metaverse universe manageable from all devices.</p>
            <button className="btn__bg mx-auto py-5 px-8 rounded font-OutFit mt-3">
              {" "}
              Read More <LuMoveRight />
            </button>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="border rounded border-[#ffffff32] access__card text-center"
        >
          <div className="p-5">
            <p className="text-7xl flex justify-center">
              <FaGlobe></FaGlobe>
            </p>
            <h3 className="text-2xl my-2 font-OutFit font-bold">
              Global Joining Income
            </h3>
            <p>Metaverse universe manageable from all devices.</p>
            <button className="btn__bg mx-auto py-5 px-8 rounded font-OutFit mt-3">
              {" "}
              Read More <LuMoveRight />
            </button>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="border rounded border-[#ffffff32] access__card text-center"
        >
          <div className="p-5">
            <p className="text-7xl flex justify-center">
              <MdGroups2 />
            </p>
            <h3 className="text-2xl my-2 font-OutFit font-bold">
              Team Joining Income
            </h3>
            <p>Metaverse universe manageable from all devices.</p>
            <button className="btn__bg mx-auto py-5 px-8 rounded font-OutFit mt-3">
              {" "}
              Read More <LuMoveRight />
            </button>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="border rounded border-[#ffffff32] access__card text-center"
        >
          <div className="p-5">
            <p className="text-7xl flex justify-center">
              <MdOutlineSubscriptions />
            </p>
            <h3 className="text-2xl my-2 font-OutFit font-bold">
              Global Monthly Subscription Earnings
            </h3>
            <p>Metaverse universe manageable from all devices.</p>
            <button className="btn__bg mx-auto py-5 px-8 rounded font-OutFit mt-3">
              {" "}
              Read More <LuMoveRight />
            </button>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="border rounded border-[#ffffff32] access__card text-center"
        >
          <div className="p-5">
            <p className="text-7xl flex justify-center">
              <GiTeamDowngrade />
            </p>
            <h3 className="text-2xl my-2 font-OutFit font-bold">
              Team Monthly Subscription Earnings
            </h3>
            <p>Metaverse universe manageable from all devices.</p>
            <button className="btn__bg mx-auto py-5 px-8 rounded font-OutFit mt-3">
              {" "}
              Read More <LuMoveRight />
            </button>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="border rounded border-[#ffffff32] access__card text-center"
        >
          <div className="p-5">
            <p className="text-7xl flex justify-center">
              <GiIncense />
            </p>
            <h3 className="text-2xl my-2 font-OutFit font-bold">
              Rank and Incentives
            </h3>
            <p>Metaverse universe manageable from all devices.</p>
            <button className="btn__bg mx-auto py-5 px-8 rounded font-OutFit mt-3">
              {" "}
              Read More <LuMoveRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessFuture;
