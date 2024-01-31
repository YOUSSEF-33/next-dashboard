
import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/users/pagination/Pagination";
import UserTable from "@/app/ui/dashboard/users/userTable/UserTable";
//import { useRouter } from "next/router";

// Create the page component
const Page = async ({searchParams}) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count, user} = await fetchUsers(q, page);
  console.log(user);

  return (
    <div className="p-2">
      {/* Render the UserTable component with the pathname */}
      <UserTable pathname={"Users"} user={user} />
      {/* Render the Pagination component */}
      <Pagination count={count}/>
    </div>
  );
};

// Export the page component
export default Page;
