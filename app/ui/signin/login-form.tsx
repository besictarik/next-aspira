"use client";

import { signIn } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import LoginButton from "./login-button";

const LoginForm = () => {
  const [error, dispatch] = useFormState(signIn, undefined);

  return (
    <form action={dispatch} className="flex w-[400px] flex-col">
      <h3 className="mb-1 text-2xl font-semibold text-[#3d4465]">
        Welcome to Aspira
      </h3>
      <p className="pb-6 text-base leading-[1.8] text-[#7e7e7e]">
        Sign in by entering information below
      </p>
      {error && (
        <p className="my-2 border border-red-900 bg-red-300 p-1 text-red-900">
          {error}
        </p>
      )}
      {/* {error && (
        <p className="my-2 border border-green-900 bg-green-300 p-1 text-green-900">
          {error}
        </p>
      )} */}

      <div className="mb-4 flex flex-col">
        <label htmlFor="email" className="pb-2">
          <strong className="text-[#7e7e7e]">Email</strong>
        </label>
        <input
          className="placeholder::text-sm h-14 border border-[#d3d3d3] bg-white px-3 py-[6px] text-sm text-[#b1b1b1]"
          type="email"
          name="email"
          id="email"
          placeholder="username@aspira.hr"
          required
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="password" className="pb-2">
          <strong className="text-[#7e7e7e]">Password </strong>
        </label>
        <input
          className="h-14 border border-[#d3d3d3] bg-white px-3 py-[6px] text-sm text-[#b1b1b1] placeholder:text-sm"
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
          required
        />
      </div>
      <div className="my-6 ml-1 flex items-center">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className="relative h-2 w-2 rounded-lg border border-gray-400 bg-white bg-none after:absolute after:-left-1 after:-top-1 after:flex after:h-[200%] after:w-[200%] after:items-center after:justify-center after:rounded after:bg-[#d4d7da] after:text-white  checked:after:bg-[#ff0000] checked:after:content-['✔']"
        />

        <label htmlFor="checkbox" className="ml-3 text-base text-[#7e7e7e]">
          Remember my preference
        </label>
      </div>
      <LoginButton />
    </form>
  );
};

export default LoginForm;
