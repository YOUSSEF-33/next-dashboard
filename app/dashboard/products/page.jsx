import React from "react";
import Table from "@/app/ui/dashboard/products/productTable/Table";
import Pagination from "@/app/ui/dashboard/users/pagination/Pagination";
import { fetchProducts } from "@/app/lib/data";

const page = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count, products} = await fetchProducts(q, page);
  //console.log(products)
  return (
    <div className="p-2">
      <Table products={products}/>
      <Pagination count={count} />
    </div>
  );
};

export default page;
