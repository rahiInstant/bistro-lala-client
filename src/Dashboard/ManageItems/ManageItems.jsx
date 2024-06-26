import { GrDocumentUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import SectionHeader from "../../component/SectionHeader";
import useMenu from "../../hooks/useMenu";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageItems = () => {
  const axiosSecure = useAxiosSecure();
  const successMsg = (msg) => toast.success(msg);
  const [data, loadAgain] = useMenu();
//   console.log(data);
  const handleDelete = (id) => {
    console.log("delete attempt");
    axiosSecure.delete(`/item-delete/${id}`).then((res) => {
    //   console.log(res.data);
      if (res?.data?.deletedCount >= 1) {
        loadAgain();
        successMsg("Item deleted successfully.");
      }
    });
  };
  return (
    <div className="mb-20">
      <SectionHeader subTitle="My Cart" title="WANNA ADD MORE?" />
      <div className="p-10 rounded-xl bg-[#fff] mt-10 max-w-[800px] mx-auto">
        <div className="flex justify-between">
          <div className="font-semibold text-xl">TOTAL ITEM: {data?.length} </div>
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
                        onClick={() => handleDelete(item._id)}
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

export default ManageItems;
