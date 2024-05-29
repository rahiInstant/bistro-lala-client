import { useState } from "react";
import SectionHeader from "../../component/SectionHeader";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import "./Cart.css";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
const Cart = () => {
  const [data, fetchAgain] = useCart();
  // const [totalPrice, setTotalPrice] = useState(0)
  const totalPrice = data?.reduce((sum,item) => {
    return sum+item.price
  },0)
  console.log(data);
  const axiosSecure = useAxiosSecure();
  function handleDelete(foodName) {
    axiosSecure
      .delete(`/escape?name=${foodName}`)
      .then((res) => {
        if(res.data.deletedCount>=1) {
          fetchAgain()
        }
      });
  }
  return (
    <div className="mb-20">
      <SectionHeader subTitle="My Cart" title="WANNA ADD MORE?" />
      <div className="p-10 rounded-xl bg-[#fff] mt-10 max-w-[800px] mx-auto">
        <div className="flex justify-between">
          <div className="font-semibold text-xl">TOTAL ORDER: {data?.length}</div>
          <div className="font-semibold text-xl">TOTAL PRICE: ${totalPrice}</div>
          <div className="p-2 rounded-md bg-[#D1A054] font-medium">PAY</div>
        </div>
        <div className="mt-10">
          <table className="">
            <thead className="  ">
              <tr>
                <th>Sr.</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, idx) => {
                // const newPrice = totalPrice+item.price
                // setTotalPrice(newPrice)
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td className="flex justify-center items-center gap-3 text-white">
                      <button className="p-2 rounded-md bg-green-800 h-fit">
                        <GrDocumentUpdate />
                      </button>
                      <button
                        onClick={() => handleDelete(item.name)}
                        className="p-2 rounded-md bg-red-800 h-fit"
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
