import { GrDocumentUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import SectionHeader from "../../component/SectionHeader";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthContext";

const PayHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data } = useQuery({
    queryKey: ["payment-data", user],
    queryFn: async () => {
      const result = await axiosSecure.get(`/payment-data/${user?.email}`);
      return result.data;
    },
  });
  return (
    <div className="mb-20">
      <SectionHeader subTitle="At a Glance!" title="PAYMENT HISTORY" />
      <div className="p-10 rounded-xl bg-[#fff] mt-10 max-w-[800px] mx-auto">
        <div className="flex justify-between">
          <div className="font-semibold text-xl">TOTAL ORDER:</div>
          <div className="font-semibold text-xl">TOTAL PRICE: $</div>
        </div>
        <div className="mt-10">
          <table className="">
            <thead className="  ">
              <tr>
                <th>Sr.</th>
                <th>EMAIL</th>
                <th>STATUS</th>
                <th>TOTAL PRICE</th>
                <th>PAYMENT DATE</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, idx) => {
                // const newPrice = totalPrice+item.price
                // setTotalPrice(newPrice)
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{item.email}</td>
                    <td>{item.status}</td>
                    <td>${item.price}</td>
                    <td>{item.date}</td>
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

export default PayHistory;
