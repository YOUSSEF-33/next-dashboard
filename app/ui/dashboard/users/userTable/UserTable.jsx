import Link from "next/link";
import styles from "./usertable.module.css";
import { FaSearch } from "react-icons/fa";
import Search from "../../search/Search";
import { deleteUser } from "@/app/lib/actions";

const UserTable = ({ pathname, user }) => {
  const ConvertTime = (time) => {
    const date = new Date(time);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedDateTime = `${year}/${month < 10 ? "0" : ""}${month}/${
      day < 10 ? "0" : ""
    }${day} ${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    return formattedDateTime;
  };

  return (
    <div>
      <div className={`${styles.bg} text-white p-4 rounded-md w-full`}>
        <div className="flex items-center justify-between">
          <div className="relative text-gray-600 focus-within:text-gray-200 py-2">
            <Search placeholder={"users"} />
          </div>
          <Link href="/dashboard/users/adduser">
            <button className=" text-sm px-3 py-1 bg-blue-900/40 border-none rounded m-2">
              Add new
            </button>
          </Link>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-sm text-left">Name</th>
              <th className="text-sm text-left">Email</th>
              <th className="text-sm text-left">Created at</th>
              <th className="text-sm text-left">Role</th>
              <th className="text-sm text-left">Statu</th>
            </tr>
          </thead>
          <tbody>
            {user.map((transaction) => (
              <tr key={transaction._id} className={`py-2 `}>
                <td className="flex items-center py-2">
                  <img
                    src={transaction.img}
                    alt={transaction.username}
                    className="w-8 h-8 text-sm rounded-full mr-2"
                  />
                  {transaction.username}
                </td>
                <td>
                  <span className="bg-red-500/20 text-sm p-1 rounded">
                    {transaction.email}
                  </span>
                </td>
                <td>{ConvertTime(transaction.createdAt)}</td>
                <td>{transaction.isAdmin ? "Admin" : "Not Admin"}</td>
                <td>{transaction.isActive ? "Active" : "idle"}</td>
                <td className="flex  justify-center">
                  <Link href={"/dashboard/users/" + transaction._id}>
                    <button
                      type="submit"
                      className="text-sm px-3 py-1 bg-green-800 border-none rounded m-2"
                    >
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={transaction.id} />
                    <button
                      type="submit"
                      className=" text-sm px-3 py-1 bg-red-800 border-none rounded m-2"
                    >
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
