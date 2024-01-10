/* eslint-disable react/no-unescaped-entities */
import ReviewIcon from "../../assets/reviewIcon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FaQuoteRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Customers = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container mx-auto text-white font-OutFit text-center py-32">
      <img className="w-16 mx-auto mb-10" src={ReviewIcon} alt="" />
      <h2 data-aos="flip-up" className="font-bold text-3xl font-OutFit  mb-2">
        What Are Our Customers Saying ?
      </h2>
      <p data-aos="flip-up" className="text-center">
        Opinions from our happy customers.
      </p>
      <Swiper
        data-aos="fade-up"
        className="mt-10 grid grid-cols-4 text-white font-OutFit"
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <div className="btn__bg flex-none p-10 w-full h-full relative rounded">
            <div>
              <p className="z-20 relative">
                I was very curious about the metaverse. I've come a long way
                with this site. Thank you.{" "}
              </p>
              <p className="text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]">
                <FaQuoteRight />
              </p>

              <img
                className="w-20 mx-auto my-7"
                src="https://garantiwebdesign.com/wordpress/metan/wp-content/uploads/2022/07/man1.png"
                alt=""
              />
              <h5>Adam</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="btn__bg flex-none p-10 w-full h-full relative rounded">
            <div>
              <p className="z-20 relative">
                I was very curious about the metaverse. I've come a long way
                with this site. Thank you.{" "}
              </p>
              <p className="text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]">
                <FaQuoteRight />
              </p>

              <img
                className="w-20 mx-auto my-7"
                src="https://garantiwebdesign.com/wordpress/metan/wp-content/uploads/2022/07/man1.png"
                alt=""
              />
              <h5>Adam</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="btn__bg flex-none p-10 w-full h-full relative rounded">
            <div>
              <p className="z-20 relative">
                I was very curious about the metaverse. I've come a long way
                with this site. Thank you.{" "}
              </p>
              <p className="text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]">
                <FaQuoteRight />
              </p>

              <img
                className="w-20 mx-auto my-7"
                src="https://garantiwebdesign.com/wordpress/metan/wp-content/uploads/2022/07/man1.png"
                alt=""
              />
              <h5>Adam</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="btn__bg flex-none p-10 w-full h-full relative rounded">
            <div>
              <p className="z-20 relative">
                I was very curious about the metaverse. I've come a long way
                with this site. Thank you.{" "}
              </p>
              <p className="text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]">
                <FaQuoteRight />
              </p>

              <img
                className="w-20 mx-auto my-7"
                src="https://garantiwebdesign.com/wordpress/metan/wp-content/uploads/2022/07/man1.png"
                alt=""
              />
              <h5>Adam</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="btn__bg flex-none p-10 w-full h-full relative rounded">
            <div>
              <p className="z-20 relative">
                I was very curious about the metaverse. I've come a long way
                with this site. Thank you.{" "}
              </p>
              <p className="text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]">
                <FaQuoteRight />
              </p>

              <img
                className="w-20 mx-auto my-7"
                src="https://garantiwebdesign.com/wordpress/metan/wp-content/uploads/2022/07/man1.png"
                alt=""
              />
              <h5>Adam</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="btn__bg flex-none p-10 w-full h-full relative rounded">
            <div>
              <p className="z-20 relative">
                I was very curious about the metaverse. I've come a long way
                with this site. Thank you.{" "}
              </p>
              <p className="text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]">
                <FaQuoteRight />
              </p>

              <img
                className="w-20 mx-auto my-7"
                src="https://garantiwebdesign.com/wordpress/metan/wp-content/uploads/2022/07/man1.png"
                alt=""
              />
              <h5>Adam</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="btn__bg flex-none p-10 w-full h-full relative rounded">
            <div>
              <p className="z-20 relative">
                I was very curious about the metaverse. I've come a long way
                with this site. Thank you.{" "}
              </p>
              <p className="text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]">
                <FaQuoteRight />
              </p>

              <img
                className="w-20 mx-auto my-7"
                src="https://garantiwebdesign.com/wordpress/metan/wp-content/uploads/2022/07/man1.png"
                alt=""
              />
              <h5>Adam</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="btn__bg flex-none p-10 w-full h-full relative rounded">
            <div>
              <p className="z-20 relative">
                I was very curious about the metaverse. I've come a long way
                with this site. Thank you.{" "}
              </p>
              <p className="text-6xl text-slate-300 rotate-12 absolute top-[70px] right-[50%] left-[40%] z-[0]">
                <FaQuoteRight />
              </p>

              <img
                className="w-20 mx-auto my-7"
                src="https://garantiwebdesign.com/wordpress/metan/wp-content/uploads/2022/07/man1.png"
                alt=""
              />
              <h5>Adam</h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Customers;
