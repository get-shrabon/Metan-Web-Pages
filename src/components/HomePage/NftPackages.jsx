import { LuMoveRight } from "react-icons/lu";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { TbFreeRights } from "react-icons/tb";
import { MdWorkspacePremium } from "react-icons/md";
import { BsRocketTakeoff } from "react-icons/bs";
import { RiExchangeDollarFill } from "react-icons/ri";
import weelImg from "../../assets/weel.png";

const NftPackages = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container mx-auto text-white py-32 relative">
      <h2
        data-aos="flip-up"
        className="font-bold text-3xl font-OutFit text-center py-2 p-sm"
      >
        Check Out The Most Creative NFT Packages
      </h2>
      <p data-aos="flip-up" className="text-center p-sm">
        Metaverse is a marketplace dedicated to the digital world.
      </p>
      <img
        data-aos="zoom-in-up"
        className="rotate__animate absolute top-0 right-0 left-0 md:left-[30%]"
        src={weelImg}
        alt=""
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 px-5 md:px-0 relative">
        <div className="nft__card overflow-hidden pb-10">
          <div className="h-full bg-slate-800 text-center rounded-t">
            <div className="bg-primary p-3 rounded-t text-center">
              <span className="text-8xl w-[fit-content] mx-auto block py-5">
                <TbFreeRights />
              </span>
              <h2 className=" text-3xl font-bold font-OutFit mb-3 uppercase">
                Free
              </h2>
            </div>
            <h2 className="text-4xl font-bold font-OutFit my-3">$0</h2>
            <ul className="list-disc list-inside uppercase text-left space-y-2 px-3 ">
              <li>Lorem ipsum dolor sit amet,</li>
              <li>Lorem ipsum dolor sit amet,</li>
              <li>Lorem ipsum dolor sit amet,</li>
              <li>Lorem ipsum dolor sit amet,</li>
            </ul>
          </div>
          <div className="custom__bg__color relative top-[1px] rounded pt-10 nft_hover">
            <button className="btn__bg mx-auto py-5 px-6 rounded">
              Sign Up <LuMoveRight />
            </button>
          </div>
        </div>

        <div className="nft__card overflow-hidden pb-10">
          <div className="h-full bg-slate-800 text-center rounded-t">
            <div className="bg-warning p-3 rounded-t text-center">
              <span className="text-8xl w-[fit-content] mx-auto block py-5">
                <RiExchangeDollarFill />
              </span>
              <h2 className=" text-3xl font-bold font-OutFit mb-3 uppercase">
                Basic
              </h2>
            </div>
            <h2 className="text-4xl font-bold font-OutFit mt-5 mb-3">$11</h2>
            <p className="text-[12px] mb-3 font-semibold uppercase">
              ONLY REGISTRATION
            </p>
            <ul className="list-disc list-inside text-left uppercase space-y-2 px-3 ">
              <li>1 MONTH REGISTRATION</li>
              <li>100 ELC TOKEN FREE</li>
              <li>ALL EARNING UNLOCK</li>
              <li>24/7 EMAIL SUPPORT</li>
            </ul>
          </div>
          <div className="custom__bg__color relative top-[1px] rounded pt-10 nft_hover">
            <button className="btn__bg mx-auto py-5 px-6 rounded">
              Sign Up <LuMoveRight />
            </button>
          </div>
        </div>

        <div className="nft__card overflow-hidden pb-10 ">
          <div className="h-full bg-slate-800 text-center rounded-t">
            <div className="bg-accent p-3 rounded-t text-center">
              <span className="text-8xl w-[fit-content] mx-auto block py-5">
                <BsRocketTakeoff />
              </span>
              <h2 className=" text-3xl font-bold font-OutFit mb-3 uppercase">
                BUSINESS
              </h2>
            </div>
            <h2 className="text-4xl font-bold font-OutFit mt-5 mb-3">$41</h2>
            <p className="text-[12px] mb-3 font-semibold uppercase">
              REGISTRATION & 6 MONTH SUBSCRIPTION
            </p>
            <ul className="list-disc list-inside text-left uppercase space-y-2 px-3 ">
              <li>7 MONTH SUBSCRIPTION</li>
              <li>150 ELC TOKEN FREE</li>
              <li>ALL EARNING UNLOCK</li>
              <li>DAILY CASH BACK ($0.02 PER DAY)</li>
              <li>24/7 EMAIL SUPPORT</li>
            </ul>
          </div>
          <div className="custom__bg__color relative top-[1px] rounded pt-10 nft_hover">
            <button className="btn__bg mx-auto py-5 px-6 rounded">
              Sign Up <LuMoveRight />
            </button>
          </div>
        </div>

        <div className="nft__card overflow-hidden pb-10">
          <div className="h-full bg-slate-800 text-center rounded-t">
            <div className="bg-info p-3 rounded-t text-center">
              <span className="text-8xl w-[fit-content] mx-auto block py-5">
                <MdWorkspacePremium />
              </span>
              <h2 className=" text-3xl font-bold font-OutFit mb-3 uppercase">
                PREMIUM
              </h2>
            </div>
            <h2 className="text-4xl font-bold font-OutFit mt-5 mb-3">$71</h2>
            <p className="text-[12px] mb-3 font-semibold uppercase">
              REGISTRATION & 12 MONTH SUBSCRIPTION
            </p>
            <ul className="list-disc list-inside text-left uppercase space-y-2 px-3 ">
              <li>13 MONTH SUBSCRIPTION</li>
              <li>250 ELC TOKEN FREE</li>
              <li>ALL EARNING UNLOCK</li>
              <li>DAILY CASH BACK ($0.05 PER DAY)</li>
              <li>24/7 EMAIL SUPPORT</li>
            </ul>
          </div>
          <div className="custom__bg__color relative top-[1px] rounded pt-10 nft_hover">
            <button className="btn__bg mx-auto py-5 px-6 rounded">
              Sign Up <LuMoveRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftPackages;
