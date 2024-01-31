"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./pagination.module.css";

const Pagination = ({ count }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const page = params.get("page");

  const ITEM_PER_PAGE = 4;
  const prev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const next = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handlePage = (s) => {
    s === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
      replace(`${pathname}?${params}`)
  };

  return (
    <div className="flex justify-between items-center m-2">
      <button
        className={`${styles.btn} py-1 px-3 bg-slate-400 text-black`}
        disabled={!prev}
        onClick={()=>handlePage("prev")}
      >
        Back
      </button>
      <button
        className={`${styles.btn} py-1 px-3 bg-slate-300 text-black`}
        disabled={!next}
        onClick={()=>handlePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
