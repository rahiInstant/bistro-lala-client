import SectionHeader from "../../component/SectionHeader";

const CheckIt = () => {
  const menu = (
    <div className="flex items-center gap-5">
      <div className="">
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          className="w-28 h-28 "
          src="/home/slide1.jpg"
          alt=""
        />
      </div>
      <div className="flex gap-3 flex-1">
        <div>
          <h1 className="text-xl font-medium">
            ROAST DUCK BREAST ------------------
          </h1>
          <p>
            Roasted duck breast (served pink) with gratin potato and a griottine
            cherry sauce
          </p>
        </div>
        <div className="text-xl">
          <h2>$14.5</h2>
        </div>
      </div>
    </div>
  );
  return (
    <div className="mt-20">
      <SectionHeader subTitle={"Check it out"} title={"FROM OUR MENU"} />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {menu}
        {menu}
        {menu}
        {menu}
        {menu}
        {menu}
        {menu}
        {menu}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="uppercase p-5 border-b-4 border-gray-700 rounded-xl">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default CheckIt;
