import Link from "next/link";
import styles from "./table.module.css";
import { FaSearch } from "react-icons/fa";
import Search from "../../search/Search";
import { deleteProduct } from "@/app/lib/actions";

const Table = ({ products }) => {
  return (
    <div>
      <div className={`${styles.bg} text-white p-4 rounded-md w-full`}>
        <div className="flex items-center justify-between">
          <div className="relative text-gray-600 focus-within:text-gray-200 py-2">
            <Search placeholder={"product"} />
          </div>
          <Link href="/dashboard/products/addproduct">
            <button className=" text-sm px-3 py-1 bg-blue-900/40 border-none rounded m-2">
              Add new
            </button>
          </Link>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-sm text-left">Name</th>
              <th className="text-sm text-left">Description</th>
              <th className="text-sm text-left">Created at</th>
              <th className="text-sm text-left">stoke</th>
            </tr>
          </thead>
          <tbody>
            {products.map((transaction) => (
              <tr key={transaction.id} className={`py-2`}>
                <td className="flex items-center py-2">
                  <img
                    src={transaction.img}
                    alt={transaction.title}
                    className="w-8 h-8 text-sm rounded-full mr-2"
                  />
                  {transaction.title}
                </td>
                <td>
                  <span className="bg-red-500/20 text-sm p-1 rounded">
                    {transaction.desc.slice(0, 23) + "..."}
                  </span>
                </td>
                <td>{transaction.createdAt?.toString().slice(4, 16)}</td>
                <td>{transaction.isStoke ? "in stoke" : "out of stoke"}</td>
                <td className="flex  justify-center">
                  <button
                    type="submit"
                    className="text-sm px-3 py-1 bg-green-800 border-none rounded m-2"
                  >
                    View
                  </button>
                  <form action={deleteProduct}>
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

export default Table;
