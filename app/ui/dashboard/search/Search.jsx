"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const handleChange = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    const value = e.target.value;
    if (value) {
      value.length > 2 && params.set("q", value);
      params.set("page", 1)
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 200);

  return (
    <div>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button
          type="submit"
          className="p-1 focus:outline-none focus:shadow-outline"
        >
          {/* Using the FaSearch icon from react-icons */}
          <FaSearch />
        </button>
      </span>
      <input
        type="search"
        name="search"
        placeholder={`Search for ${placeholder}`}
        onChange={handleChange}
        className="py-2 pl-10 text-sm text-white bg-gray-800 border border-transparent rounded-md focus:outline-none  focus:text-gray-400"
      />
    </div>
  );
};

export default Search;
