import { LuMoveRight } from "react-icons/lu";
import { TbWorldStar } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import waterimg from "../../assets/waterAnimation.gif";

const MetaverseStats = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 items-center gap-5 py-32 p-sm">
      <div className="col-span-3 text-white bg-no-repeat bg-right bg-contain pop__bg">
        <h2 data-aos="flip-up" className="font-bold text-3xl font-OutFit py-2">
          Metaverse Stats At A Glance
        </h2>
        <p data-aos="flip-up" className="pb-4">
          Get everything you need for metaverse living: XR apps, devices, tools,
          services, and more. The open, secure metaverse for individuals,
          enterprises, and developers. Explore today
        </p>
        <div className="grid grid-cols-1 gap-3">
          <a data-aos="fade-up" href="#" className="flex items-center">
            <button className="btn__bg rounded-s-md text-6xl px-10 py-4">
              <TbWorldStar />
            </button>
            <div className="border-r border-b border-t border-[#ffffff32] h-full w-full rounded-e-md px-3 py-1 flex items-center">
              <div>
                <h3 className="text-3xl font-extrabold text-white font-OutFit">
                  Land NFT Minted
                </h3>
                <p className="font-Outfit">1299,962</p>
              </div>
            </div>
          </a>
          <a data-aos="fade-up" href="#" className="flex items-center">
            <button className="btn__bg rounded-s-md text-6xl px-10 py-4">
              <TbWorldStar />
            </button>
            <div className="border-r border-b border-t border-[#ffffff32] h-full w-full rounded-e-md px-3 py-1 flex items-center">
              <div>
                <h3 className="text-3xl font-extrabold text-white font-OutFit">
                  Commission Pool
                </h3>
                <p className="font-Outfit">539,820 USD</p>
              </div>
            </div>
          </a>
          <a data-aos="fade-up" href="#" className="flex items-center">
            <button className="btn__bg rounded-s-md text-6xl px-10 py-4">
              <TbWorldStar />
            </button>
            <div className="border-r border-b border-t border-[#ffffff32] h-full w-full rounded-e-md px-3 py-1 flex items-center">
              <div>
                <h3 className="text-3xl font-extrabold text-white font-OutFit">
                  Charity Pool
                </h3>
                <p className="font-Outfit">4,2563,539 USD</p>
              </div>
            </div>
          </a>
          <a data-aos="fade-up" href="#" className="flex items-center">
            <button className="btn__bg rounded-s-md text-6xl px-10 py-4">
              <TbWorldStar />
            </button>
            <div className="border-r border-b border-t border-[#ffffff32] h-full w-full rounded-e-md px-3 py-1 flex items-center">
              <div>
                <h3 className="text-3xl font-extrabold text-white font-OutFit">
                  Total Land Sold
                </h3>
                <p className="font-Outfit">6895,8569,274 USD</p>
              </div>
            </div>
          </a>
        </div>
        <button
          data-aos="fade-up"
          className="btn__bg py-5 px-10 font-OutFit rounded mt-4 "
        >
          Buy Land Immediately <LuMoveRight />
        </button>
      </div>
      <div>
        <img src={waterimg} alt="" />
      </div>
    </div>
  );
};

export default MetaverseStats;
