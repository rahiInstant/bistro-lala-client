
const Banner = () => {
  return (
    <div className="">
      <div className="h-[800px] w-full flex items-center justify-center  bg-[url('/menu/banner3.jpg')] bg-no-repeat bg-cover bg-center ">
        <div className="bg-[#15151599] w-[70%] h-[60%] text-white flex flex-col items-center justify-center">
          <h2 className="text-[88px] font-bold ">OUR MENU</h2>
          <h2 className="text-[24px] font-semibold">
            Would you like to try a dish?
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
