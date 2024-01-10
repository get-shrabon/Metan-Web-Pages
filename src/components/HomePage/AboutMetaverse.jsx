import { LuMoveRight } from "react-icons/lu";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AboutMetaverse = () => {
     useEffect(() => {
       Aos.init({ duration: 1000 });
     }, []);
  return (
    <div className="container mx-auto py-32 text-white  font-OutFit p-sm">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <h2
            data-aos="flip-up"
            className="font-bold text-3xl font-OutFit  mb-5"
          >
            Learn More About Metaverse
          </h2>
          <p data-aos="flip-up">
            Imagine a virtual world where billions of people live, work, shop,
            learn and interact with each other from the comfort of their seats
            in the physical world.
          </p>
          <p data-aos="flip-up" className="py-5">
            Get everything you need for metaverse living: XR apps, devices,
            tools, services, and more. The open, secure metaverse for
            individuals, enterprises, and developers. Explore today!
          </p>
          <p data-aos="flip-up">
            Preparing your brand for the new realities of marketing. Enter the
            world of the metaverse to accelerate brand value through digital
            innovation. For more information, fill out the form on the side.
          </p>
        </div>
        <div data-aos="flip-down">
          <form>
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
            <button className="bg-transparent border outline-none w-full p-5 rounded flex items-center gap-2 justify-center font-OutFit font-bold">
              Submit Form <LuMoveRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutMetaverse;
