import { TbWorldStar } from "react-icons/tb";
import { GiRetroController } from "react-icons/gi";
import { LuMoveRight } from "react-icons/lu";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import butterflyImg from "../../assets/butterfly.gif"

const MetaverseSystem = () => {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  return (
    <div className="container py-32 mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
      <div>
        <img
          src={butterflyImg}
          alt=""
        />
      </div>
      <div className="col-span-3 text-white p-5">
        <h2 data-aos="flip-up" className="font-bold text-3xl font-OutFit py-2">
          Best Metaverse Terrain System
        </h2>
        <p data-aos="flip-up" className="pb-4">
          Transact quickly with our agentless, Nft-based digital land purchasing
          platform. Buy and manage land instantly directly from your blockchain
          wallet. Setting up your network is very simple. You can buy land tiles
          with coins. You need to setup in your wallet.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
          <a data-aos="fade-up" href="#" className="flex items-center">
            <button className="btn__bg rounded-s-md text-6xl px-10 py-4">
              <TbWorldStar />
            </button>
            <div className="border-r border-b border-t border-[#ffffff32] h-full w-full rounded-e-md px-3 py-1">
              <h3 className="text-xl font-extrabold text-white font-OutFit">
                Virtual Land
              </h3>
              <p className="font-Outfit">
                Buy virtual land and sail to the new world.
              </p>
            </div>
          </a>

          <a data-aos="fade-up" href="#" className="flex items-center">
            <button className="btn__bg rounded-s-md text-6xl px-10 py-4">
              <GiRetroController />
            </button>
            <div className="border-r border-b border-t border-[#ffffff32] h-full w-full rounded-e-md px-3 py-1">
              <h3 className="text-xl font-extrabold text-white font-OutFit">
                Easy Managment
              </h3>
              <p className="font-Outfit">
                The easiest way to manage your Metaverse world.
              </p>
            </div>
          </a>

          <a data-aos="fade-up" href="#" className="flex items-center">
            <button className="btn__bg rounded-s-md text-6xl px-10 py-4">
              <TbWorldStar />
            </button>
            <div className="border-r border-b border-t border-[#ffffff32] h-full w-full rounded-e-md px-3 py-1">
              <h3 className="text-xl font-extrabold text-white font-OutFit">
                Metaverse Overview
              </h3>
              <p className="font-Outfit">
                The easiest way to manage your digital plots.
              </p>
            </div>
          </a>
          <a data-aos="fade-up" href="#" className="flex items-center">
            <button className="btn__bg rounded-s-md text-6xl px-10 py-4">
              <TbWorldStar />
            </button>
            <div className="border-r border-b border-t border-[#ffffff32] h-full w-full rounded-e-md px-3 py-1">
              <h3 className="text-xl font-extrabold text-white font-OutFit">
                Metaverse Analysis
              </h3>
              <p className="font-Outfit">
                Manage your assets with easy accessibility.
              </p>
            </div>
          </a>
        </div>
        <button className="btn__bg py-5 px-5 font-OutFit rounded mt-4 ">
          Get to Know us <LuMoveRight />
        </button>
      </div>
    </div>
  );
};

export default MetaverseSystem;
