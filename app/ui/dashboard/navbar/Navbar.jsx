"use client";

import { FaSearch } from "react-icons/fa";
import styles from "./navbar.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaEarthAfrica } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";



const Navbar = () => {
  const pathname = usePathname();
  const pathnameArray = pathname.split("/");
  const path = pathnameArray[pathnameArray.length - 1];
  //console.log(path)

  return (
    <div
      className={` ${styles.navbarbg} flex justify-between items-center rounded`}
    >
      <div className={styles.nav_text}>
        <h1>{path}</h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="relative text-gray-600 focus-within:text-gray-200 mx-3 w-[50%]">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
            <button
              type="submit"
              className="  p-1 focus:outline-none focus:shadow-outline"
            >
              {/* Using the FaSearch icon from react-icons */}
              <FaSearch />
            </button>
          </span>
          <input
            type="search"
            name="search"
            placeholder="Search..."
            className="py-2  pl-10 text-sm text-white bg-gray-800 border border-transparent rounded-md focus:outline-none  focus:text-gray-400"
          />
        </div>
        <div className="flex justify-between items-center mx-2 w-[65px]">
          <Link href="#">
            <MdOutlineMessage />
          </Link>
          <Link href="#">
            <IoIosNotifications />
          </Link>
          <Link href="#">
            <FaEarthAfrica />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
