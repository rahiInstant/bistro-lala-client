import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../component/SectionHeader";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data, isPending, refetch } = useQuery({
    queryKey: ["loadAllUsers"],
    queryFn: async () => {
      const result = await axiosSecure.get("/all-user");
      return result.data;
    },
  });

  if (isPending) {
    return "loading...";
  }
  function handleDelete(userName) {
    axiosSecure.delete(`/remove-user?name=${userName}`).then((res) => {
      if (res.data.deletedCount >= 1) {
        refetch();
      }
    });
  }

  const handleIsAdmin = (email) => {
    console.log("get power");
    axiosSecure.patch(`/give-power?email=${email}`).then((res) => {
      //   refetch()
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
      }
    });
  };
  console.log(data);
  return (
    <div className="mb-20">
      <SectionHeader
        subTitle="How many??"
        title="MANAGE ALL USERS"
      ></SectionHeader>
      <div className="p-10 rounded-xl bg-[#fff] mt-10 max-w-[800px] mx-auto">
        <h1 className="text-[32px] font-semibold">
          Total user: {data?.length}
        </h1>
        <table className="mt-6">
          <thead className="  ">
            <tr>
              <th>Sr.</th>
              <th>ITEM NAME</th>
              <th>Email</th>
              <th>ACTION</th>
              <th>isAdmin</th>
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
                  <td>${item.email}</td>
                  <td className="  text-white">
                    <button className="p-2 mr-3 rounded-md bg-green-800 h-fit">
                      <GrDocumentUpdate />
                    </button>
                    <button
                      onClick={() => handleDelete(item.name)}
                      className="p-2 rounded-md bg-red-800 h-fit"
                    >
                      <MdDelete />
                    </button>
                  </td>
                  <td className="">
                    <button
                      onClick={() => handleIsAdmin(item.email)}
                      className={`p-2 rounded-md ${
                        item.isAdmin ? "bg-red-800" : "bg-green-800"
                      } h-fit text-white`}
                    >
                      <FaRegUser />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
