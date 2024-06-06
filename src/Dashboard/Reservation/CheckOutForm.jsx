import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import useCart from "../../hooks/useCart";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Auth/AuthContext";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [data] = useCart();
  const totalPrice = data?.reduce((total, item) => total + item.price, 0);
  const { data: userData } = useQuery({
    queryKey: ["orderData"],
    queryFn: async () => {
      const result = await axiosSecure.post("/create-payment-intent", {
        price: totalPrice,
      });
      return result.data;
    },
  });
  async function handleSubmit(e) {
    e.preventDefault();
    if (!stripe || !elements) return;
    const card = elements.getElement(CardElement);
    if (card == null) return;
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
    } else {
      setError("");
    }
    console.log("payment status", error ? error : paymentMethod);
    // confirm payment
    const { paymentIntent, error: transactionError } =
      await stripe.confirmCardPayment(userData?.clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (transactionError) {
      console.log("transaction error", transactionError);
      setError(transactionError.message)
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status == "succeeded") {
        setTransactionId(paymentIntent.id);
        const payment= {
          email:user?.email,
          price:totalPrice,
          date:new Date().getUTCDate(),
          cartID: data?.map((item) => item._id),
          name:data?.map(item => item.name),
          transactionId:transactionId,
          status:'pending'
        }
        const paymentSaved = await axiosSecure.post('/payment', payment)
        console.log(paymentSaved)
      }
    }
  }

  // console.log(CardElement)
  return (
    <div className="w-96 border mx-auto mt-16 rounded-md">
      <p className="text-center text-lg font-medium mt-5">
        Total amount have to pay: ${totalPrice}
      </p>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="w-80  mx-auto mt-16 "
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": { color: "#aab7c4" },
              },
              invalid: { color: "#9e2146" },
            },
          }}
        />
        <button
          className="p-4 "
          type="submit"
          disabled={!stripe || !userData?.clientSecret}
        >
          PAY
        </button>
        {error && <p className="text-red-600 text-lg text-center font-medium">{error}</p>}
        {transactionId && <p className="text-green-600 text-lg text-center font-medium">TrnX: {transactionId}</p>}
      </form>
    </div>
  );
};

export default CheckOutForm;
