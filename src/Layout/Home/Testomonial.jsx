import SectionHeader from "../../component/SectionHeader";
import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";
const Testomonial = () => {

  return (
    <div className="mt-24 max-w-[1320px] mx-auto">
      <SectionHeader subTitle={"What Our Clients Say"} title={"TESTIMONIALS"} />
      <div className="flex items-center flex-col gap-5">
        <Rating
          value={3}
          style={{ maxWidth: "250px" }}
          className="my-12"
        ></Rating>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide className="px-32">
            <div className="text-center">
              <p className="text-xl">
                Various version have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <h1 className="text-[32px] mt-6">JANE DOE</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-32">
            <div className="text-center">
              <p className="text-xl">
                Various version have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <h1 className="text-[32px] mt-6">JANE DOE</h1>
            </div>
          </SwiperSlide>

        </Swiper>
    </div>
  );
};

export default Testomonial;
