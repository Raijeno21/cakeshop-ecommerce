"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

const Sign_in = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [email, setEmail] = useState<string>("");
  const [password, setPasswword] = useState<string>("");

  const mutationFN = async () => {
    const response = await fetch(`${apiUrl}/api/sign-in`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }
    return data;
  };

  return (
    <main className="max-h-dvh flex items-center justify-center bg-gray-200 w-full h-dvh px-5">
      <form className="bg-white max-w-[400px] px-5 py-10 rounded-sm">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          className="border-b border-black/20 w-full p-2 mb-2"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="border-b border-black/20 w-full p-2 mb-2"
          id="password"
        />
        <p className=" text-xs flex justify-end mt-2">Forgot Password?</p>
        <div className="flex justify-center mt-5">
          <Button className="px-10" variant={"primary"}>
            Log in
          </Button>
        </div>
        <p className=" flex justify-center mt-5 text-xs">
          Don't have an account?{" "}
          <Link href="/signUp" className="text-chart-2 pl-2">
            Sign up
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Sign_in;
