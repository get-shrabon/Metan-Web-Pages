import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Logo1 from "../../assets/Binance_Logo.png"
import Logo2 from "../../assets/BNB,_native_cryptocurrency_for_the_Binance_Smart_Chain.svg.png"
import Logo3 from "../../assets/download-removebg-preview.png"
import Logo5 from "../../assets/Express+Medicals+_+Colour-removebg-preview.png"
import Logo6 from "../../assets/Express-Shop-Colour-removebg-preview.png"
import Logo7 from "../../assets/Express_Courier_Logo_Logo-removebg-preview.png"

const Partners = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container mx-auto py-20 text-center text-white">
      <h2 data-aos="flip-up" className="font-bold text-3xl font-OutFit  mb-2">
        Our Partners & Investors
      </h2>
      <p data-aos="flip-up" className="text-center">
        Our partners who support us in all our processes
      </p>
      <div
        data-aos="zoom-in-up"
        className="grid grid-cols-2 md:grid-cols-6 gap-5 mt-10 items-center"
      >
        <div>
          <img
            className="grayscale hover:mt-[-5px] hover:grayscale-0  duration-300 mx-auto w-[150px] h-[100px] object-contain"
            src={Logo1}
            alt=""
          />
        </div>
        <div>
          <img
            className="grayscale hover:mt-[-5px] hover:grayscale-0  duration-300 mx-auto w-[150px] h-[100px] object-contain"
            src={Logo2}
            alt=""
          />
        </div>
        <div>
          <img
            className="grayscale hover:mt-[-5px] hover:grayscale-0  duration-300 mx-auto w-[150px] h-[100px] object-contain"
            src={Logo3}
            alt=""
          />
        </div>
        <div>
          <img
            className="grayscale hover:mt-[-5px] hover:grayscale-0  duration-300 mx-auto w-[150px] h-[100px] object-contain"
            src={Logo5}
            alt=""
          />
        </div>
        <div>
          <img
            className="grayscale hover:mt-[-5px] hover:grayscale-0  duration-300 mx-auto w-[150px] h-[100px] object-contain"
            src={Logo6}
            alt=""
          />
        </div>
        <div>
          <img
            className="grayscale hover:mt-[-5px] hover:grayscale-0  duration-300 mx-auto w-[150px] h-[100px] object-contain"
            src={Logo7}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
