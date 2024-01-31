import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";

export default async function UserForm({ params }) {
  const { id } = params;
  const user = await fetchUser(id);
  console.log(user);
  return (
    <div className="flex justify-center items-center my-5 bg-neutral-800 rounded py-8 mx-2">
      <form method="GET" action={updateUser}>
        <input type="hidden" name="id" value={id} />
        <div className="space-y-12">
          <div className="border-b border-gray-200/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-200">
              Update User
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-100">
              Make sure the information is correct .
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  Username
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="block flex-1 mx-2 border-0 bg-transparent py-1.5 pl-1 text-gray-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder={user.username}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <div className="flex items-center py-2" >
                  <img
                    src={user.img || "/noprofile.jpeg"}
                    alt={user.firstName}
                    className="w-8 h-8 text-sm rounded-full mr-2"
                  />
                  </div>
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span className="p-1">Change</span>
                    <input
                      id="file-upload"
                      name="img"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-200">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder={user.firstName}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-900 bg-gray-900 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    autoComplete="family-name"
                    placeholder={user.lastName}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-900 bg-gray-900 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={user.email}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-900 bg-gray-900 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-900 bg-gray-900 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                  >
                    <option
                      value={"United States"}
                      selected={user.country == "United States"}
                    >
                      United States
                    </option>
                    <option value={"Egypt"} selected={user.country == "Egypt"}>
                      Egypt
                    </option>
                    <option
                      value={"Canada"}
                      selected={user.country == "Canada"}
                    >
                      Canada
                    </option>
                    <option
                      value={"Mexico"}
                      selected={user.country == "Mexico"}
                    >
                      Mexico
                    </option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  Is Admin
                </label>
                <div className="mt-2">
                  <select
                    id="admin"
                    name="isAdmin"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-900 bg-gray-900 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                  >
                    <option value={true} selected={user.isAdmin}>
                      Admin
                    </option>
                    <option value={false} selected={!user.isAdmin}>
                      Not Admin
                    </option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  Is Admin
                </label>
                <div className="mt-2">
                  <select
                    id="active"
                    name="isActive"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-900 bg-gray-900 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                  >
                    <option value={true} selected={user.isActive}>
                      Active
                    </option>
                    <option value={false} selected={!user.isActive}>
                      Not Active
                    </option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder={user.address || ""}
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-900 bg-gray-900 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
