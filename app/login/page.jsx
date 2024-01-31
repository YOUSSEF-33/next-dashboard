"use client";

import { authentication } from "../lib/actions";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-[--soft-bg] p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-4 ">Login</h2>
        <form action={authentication}>
          <div className="mb-4">
            <label htmlFor="username"  className="block text-sm font-medium text-gray-300">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md text-black"
              onChange={() => {}}
              required
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md text-black"
              onChange={()=>{}}
              required
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
