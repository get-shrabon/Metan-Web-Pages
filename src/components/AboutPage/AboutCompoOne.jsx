/* eslint-disable react/no-unescaped-entities */
import { TbWorldStar } from "react-icons/tb";
import Butterfly from "../../assets/butterfly.gif";
import { GiRetroController } from "react-icons/gi";
import { LuMoveRight } from "react-icons/lu";
const AboutCompoOne = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-5 px-5 md:px-0">
        <div className="space-y-6 col-span-2">
          <a data-aos="fade-up" href="#" className="flex items-center">
            <button className="btn__bg rounded-s-md text-6xl px-10 h-[110px] ">
              <TbWorldStar />
            </button>
            <div className="border-r border-b border-t border-[#ffffff32] h-[110px] w-full rounded-e-md px-3 flex items-center">
              <div>
                <h3 className="text-xl font-extrabold text-white font-OutFit">
                  Virtual Land
                </h3>
                <p className="font-Outfit">
                  Buy virtual land and sail to the new world.
                </p>
              </div>
            </div>
          </a>

          <a data-aos="fade-up" href="#" className="flex items-center">
            <button className="btn__bg rounded-s-md text-6xl px-10 h-[110px]">
              <GiRetroController />
            </button>
            <div className="border-r border-b border-t border-[#ffffff32] h-[110px] w-full rounded-e-md px-3 flex items-center">
              <div>
                <h3 className="text-xl font-extrabold text-white font-OutFit">
                  Easy Managment
                </h3>
                <p className="font-Outfit">
                  The easiest way to manage your Metaverse world.
                </p>
              </div>
            </div>
          </a>

          <a data-aos="fade-up" href="#" className="flex items-center">
            <button className="btn__bg rounded-s-md text-6xl px-10 h-[110px]">
              <TbWorldStar />
            </button>
            <div className="border-r border-b border-t border-[#ffffff32] h-[110px] w-full rounded-e-md px-3 flex items-center">
              <div>
                <h3 className="text-xl font-extrabold text-white font-OutFit">
                  Metaverse Overview
                </h3>
                <p className="font-Outfit">
                  The easiest way to manage your digital plots.
                </p>
              </div>
            </div>
          </a>
          <a data-aos="fade-up" href="#" className="flex items-center">
            <button className="btn__bg rounded-s-md text-6xl px-10 h-[110px]">
              <TbWorldStar />
            </button>
            <div className="border-r border-b border-t border-[#ffffff32] h-[110px] w-full rounded-e-md px-3 flex items-center">
              <div>
                <h3 className="text-xl font-extrabold text-white font-OutFit">
                  Metaverse Analysis
                </h3>
                <p className="font-Outfit">
                  Manage your assets with easy accessibility.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-span-2 ">
          <p className="font-OutFit text-white text-lg">
            Express Life is a dynamic and innovative network marketing company
            with a clear mission: to empower individuals to shape their
            financial futures. Founded on principles of transparency,
            opportunity, and community, we offer a unique platform for
            individuals seeking to unlock their potential in the digital
            economy. At Express Life, we believe that financial success should
            be accessible to everyone, and we've designed our network marketing
            program to reflect that commitment. Our program offers multiple
            avenues for income generation, including direct referrals, global
            joining income, team joining income, global monthly subscription
            earnings, and team monthly subscription earnings. We've created a
            robust ranking and incentive system that rewards your dedication and
            growth within our network. Our vision extends beyond financial
            rewards; we aim to foster a thriving community of like-minded
            individuals who support each other's journeys toward financial
            freedom. Join us today and discover a world of opportunities with
            Express Life. Your financial future is just a step away.
          </p>
          <button className="btn__bg py-5 px-5 font-OutFit rounded mt-4 ">
            Get to Know us <LuMoveRight />
          </button>
        </div>
        <div>
          <img src={Butterfly} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutCompoOne;
