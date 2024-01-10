/* eslint-disable react/no-unescaped-entities */
import { LuMoveRight } from "react-icons/lu";
import worldImg from "../../assets/world.png"
import BannerImg from "../../assets/Express Life uk new logo file 01 1.png";
const Banner = () => {
  return (
    <div className="w-full py-32 md:py-32  overflow-x-hidden flex items-center bg bg-cover bg-no-repeat bg-center">
      <div className="container mx-auto">
        <img
          className="absolute md:top-20 w-[300px] 2xl:w-auto left-0 top-0 2xl:left-[80px] worth rotate__animate"
          src={worldImg}
          alt=""
        />

        <div className="grid banner__info sm:flex-row-reverse md:grid-cols-2 items-center">
          <div className="mt-0 p-sm md:mt-10 2xl:mt-56">
            <h1 className="text-white mb-3 space-y-2 text-5xl font-semibold font-OutFit">
              Best Virtual 3D <br /> Land Selling Platform
            </h1>
            <p className="font-OutFit text-xl">
              Let's implement creative and award winning projects <br />{" "}
              together in the world of Metaverse and NFT.{" "}
            </p>
            <button className="btn__bg py-4 px-4 font-OutFit rounded mt-4 ">
              Buy Land Virtual Immediately <LuMoveRight />
            </button>
          </div>
          <div className="">
            <img
              className=" mx-auto flip__animate object-cover"
              src={BannerImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
