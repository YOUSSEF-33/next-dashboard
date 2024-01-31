"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./sidebar.module.css";
import { MdDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";
import { IoIosCart } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { MdWork } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineTeam } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { IoHelpCircle } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { Session, logOut } from "@/app/lib/actions";

const pages = [
  {
    title: "Dashboard",
    pathname: "dashboard",
    href: "/dashboard",
    icon: <MdDashboard />,
    active: false,
  },
  {
    title: "Product",
    pathname: "products",
    href: "/dashboard/products?page=1",
    icon: <IoIosCart />,
    active: false,
  },
  {
    title: "Users",
    pathname: "users",
    href: "/dashboard/users?page=1",
    icon: <FaUsers />,
    active: false,
  },
  {
    title: "Transactions",
    pathname: "transactions",
    href: "/dashboard/transactions",
    icon: <GrTransaction />,
    active: false,
  },
];

const analytics = [
  {
    title: "Revenue",
    pathname: "revenue",
    icon: <MdWork />,
    active: false,
  },
  {
    title: "Reports",
    pathname: "reports",
    icon: <HiOutlineDocumentReport />,
    active: false,
  },
  {
    title: "Teams",
    pathname: "teams",
    icon: <AiOutlineTeam />,
    active: false,
  },
];

const user = [
  {
    title: "Settings",
    pathname: "settings",
    icon: <CiSettings />,
    active: false,
  },
  {
    title: "Help",
    pathname: "help",
    icon: <IoHelpCircle />,
    active: false,
  }
  
];

const Sidebar =  ({session}) => {
  const pathname = usePathname();
  const pathnameArray = pathname.split("/");
  const path = pathnameArray[pathnameArray.length - 1];
  console.log(session)
  
  return (
    <div className={`${styles.container} h-full pt-4 px-9 hidden md:block`}>
      <div className="flex items-center pb-3">
        <div>
          <Image
            className={"rounded-full"}
            src={"/noprofile.jpeg"}
            width={30}
            height={30}
          />
        </div>
        <div className="flex flex-col mx-2">
          <h1 className="text-sm">ihj</h1>
          <span className="text-sm text-gray-400">admin</span>
        </div>
      </div>
      <hr />
      <div className="py-4">
        <h1 className="text-gray-400 text-sm">Pages</h1>
        <div className="mx-3 mt-2">
          {pages.map((link) => (
            <div key={link.pathname}>
              {path == link.pathname
                ? (link.active = true)
                : (link.active = false)}
              <Link
                href={link.href}
                className={`${styles.link} ${
                  link.active && styles.active
                } flex items-center p-2`}
              >
                {link.icon}
                <h2 className="px-2 text-sm">{link.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="py-1">
        <h1 className="text-gray-400 text-sm">Analytics</h1>
        <div className="mx-3 mt-2">
          {analytics.map((link) => (
            <div key={link.pathname}>
              <Link href="#" className={`${styles.link} flex items-center p-2`}>
                {link.icon}
                <h2 className="px-2 text-sm">{link.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="py-2">
        <h1 className="text-gray-400 text-sm">User</h1>
        <div className="mx-3 mt-2">
          {user.map((link) => (
            <div>
              <Link href="#" className={`${styles.link} flex items-center p-2`}>
                {link.icon}
                <h2 className="px-2 text-sm">{link.title}</h2>
              </Link>
            </div>
          ))}
          <div>
            <form action={logOut}>
              <button type="submit" className={`${styles.link} flex items-center p-2 d-block`}>
                <CiLogout/>
                <h2 className="px-2 text-sm">Log out</h2>
              </button>
              </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
