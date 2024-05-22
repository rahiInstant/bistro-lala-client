import SectionHeader from "../../component/SectionHeader";

const Paralax_02 = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(0deg, rgba(21, 21, 21, 0.70) 0%, rgba(21, 21, 21, 0.70) 100%), url("/home/featured.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment:'fixed'
      }}
      className="h-[850px] mt-24 py-28 px-36"
    >
      <SectionHeader
        subTitle={"Check it out"}
        title={"FROM OUR MENU"}
        color="#fff"
      />
      <div className="mt-12 flex justify-center items-center gap-8">
        <img className="h-[400px] lg:w-1/2" src="/home/featured.jpg" alt="" />
        <div className="w-1/2 text-white ">
          <div className="space-y-2">
            <h1 className="text-2xl">
              March 20, 2023 
            </h1>
            <h2 className="text-xl">WHERE CAN I GET SOME?</h2>
            <div className="w-[85%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </div>
          </div>
          <button className="border-b-2 mt-6  border-white rounded-xl px-5 py-3">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Paralax_02;
