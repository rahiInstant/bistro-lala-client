import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
import { FaDollarSign, FaFirstOrder, FaUser } from "react-icons/fa";
import { PiCurrencyDollarThin } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["admin-data"],
    queryFn: async () => {
      const result = await axiosSecure.get("/admin-stats");
      return result.data;
    },
  });
  console.log(data);
  const stats = (title, value, prefix) => {
    return (
      <Col span={5}>
        <Card>
          <Statistic
            title={title}
            value={value}
            // precision={2}
            valueStyle={{
              color: "#3f8600",
            }}
            prefix={prefix}
          />
        </Card>
      </Col>
    );
  };
  return (
    <div className=" p-8">
      <h1 className="text-2xl font-semibold">
        Hi, Welcome{" "}
        {user?.displayName ? user?.displayName?.toUpperCase() : "Back"}
      </h1>
      <Row gutter={16} className="mt-5">
        {stats("User", data?.user,<FaUser/>)}
        {stats("Item", data?.menuItem)}
        {stats("Order", data?.order)}
        {stats("Revenue", data?.totalRevenue, <PiCurrencyDollarThin />)}
      </Row>
    </div>
  );
};

export default AdminHome;
