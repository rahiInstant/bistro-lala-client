import SectionHeader from "../../component/SectionHeader";
import {loadStripe} from '@stripe/stripe-js';
import{Elements} from '@stripe/react-stripe-js'
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_KEY)

const Reservation = () => {

  return (
    <div className="mt-20">
      <SectionHeader
        subTitle="pay and enjoy"
        title="Payment Gateway"
      ></SectionHeader>
      <Elements stripe={stripePromise}> 
        <CheckOutForm/>
      </Elements>
    </div>

  );
};

export default Reservation;
