import Banner from "./Banner";
import Call from "./Call";
import CheckIt from "./CheckIt";
import OrderOnline from "./OrderOnline";
import Paralax_01 from "./Paralax_01";
import Paralax_02 from "./Paralax_02";
import Recomends from "./Recomends";
import Testomonial from "./Testomonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-[1320px] mx-auto">
        <OrderOnline />
        <Paralax_01 />
        <CheckIt />
        <Call/>
        <Recomends/>
      </div>
      <Paralax_02/>
      <Testomonial/>
    </div>
  );
};

export default Home;
