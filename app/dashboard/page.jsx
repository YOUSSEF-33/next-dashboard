import { HiUsers } from "react-icons/hi";
import styles from "@/app/ui/dashboard/dashboard.module.css";
import Charts from "@/app/ui/dashboard/charts/Charts";
import Rightbar from "../ui/dashboard/Rightbar/Rightbar";

const transactions = [
  {
    id: 1,
    name: "John Doe",
    status: "Completed",
    date: "2023-10-28",
    amount: "$500",
    photo: "https://placekitten.com/40/40", // Replace with actual photo URL
  },
  {
    id: 1,
    name: "John Doe",
    status: "Completed",
    date: "2023-10-28",
    amount: "$500",
    photo: "https://placekitten.com/40/40", // Replace with actual photo URL
  },
  // Add more transactions as needed
];

const page = () => {
  return (
    <div className={`${styles.dash}`}>
      <div className={`${styles.maindash}`}>
        <div className={`flex items-center justify-between`}>
          <div className={`flex flex-col  justify-center ${styles.bg} rounded-md p-6 shadow-md mb-4`}>
            <h2 className="text-xl font-bold mb-2 flex py-3  items-center"><HiUsers className={`text-red-500 `} /><span className="mx-2">Total Users</span></h2>
            <p className="text-2xl font-bold mb-2">10,973</p>
            <p className="text-green-500">12% more than the previous week</p>
          </div>
          <div className={`flex flex-col  justify-center ${styles.bg} rounded-md p-6 shadow-md mb-4`}>
            <h2 className="text-xl font-bold mb-2 flex py-3  items-center"><HiUsers className={`text-red-500 `} /><span className="mx-2">Total Users</span></h2>
            <p className="text-2xl font-bold mb-2">10,973</p>
            <p className="text-green-500">12% more than the previous week</p>
          </div>
          <div className={`flex flex-col  justify-center ${styles.bg} rounded-md p-6 shadow-md mb-4`}>
            <h2 className="text-xl font-bold mb-2 flex py-3  items-center"><HiUsers className={`text-red-500 `} /><span className="mx-2">Total Users</span></h2>
            <p className="text-2xl font-bold mb-2">10,973</p>
            <p className="text-green-500">12% more than the previous week</p>
          </div>
        </div>

        {/* ----------Transactions---------- */}
        <div className={`${styles.bg} text-white p-4  rounded-md mb-4`}>
          <h2 className="text-xl font-semibold mb-4 text-gray-400">
            Latest Transactions
          </h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-sm text-left">Name</th>
                <th className="text-sm text-left">Status</th>
                <th className="text-sm text-left">Date</th>
                <th className="text-sm text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className={`py-2`}>
                  <td className="flex items-center py-2">
                    <img
                      src={transaction.photo}
                      alt={transaction.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    {transaction.name}
                  </td>
                  <td>
                    <span className="bg-red-500/20 p-1 rounded">
                      {transaction.status}
                    </span>
                  </td>
                  <td>{transaction.date}</td>
                  <td>{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={`p-4 rounded ${styles.chart_bg}`}>
          <Charts />
        </div>
      </div>
      <div className={`${styles.events}`}>
        <Rightbar />
      </div>
    </div>
  );
};

export default page;
