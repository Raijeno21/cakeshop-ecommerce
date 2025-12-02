"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { userSchema } from "@/src/dataTypes/schemas/zodSign-up";
import { useMutation } from "@tanstack/react-query";

const Sign_up = () => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [retypePassword, setRetypePassword] = useState<string>("");
  const [emailPlaceholder, setEmailPlaceHolder] = useState<string>("");
  const [passwordPlaceHolder, SetPasswordPlaceholder] = useState<string>("");

  const mutateFN = async () => {
    const response = await fetch(`${apiURL}/api/sign-up`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const res = await response.json();

    if (!response.ok) {
      throw new Error(res.error);
    }

    return res;
  };

  const { mutate, data, isPending } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: mutateFN,
    onSuccess: (res) => {
      setEmail("");
      setPassword("");
      setRetypePassword("");
      console.log(res);
    },
    onError: (error) => {
      setEmail("");
      setPassword("");
      setRetypePassword("");
      setEmailPlaceHolder(error.message);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== retypePassword) {
      setPassword("");
      setRetypePassword("");
      return SetPasswordPlaceholder("* Passwords mismatch");
    }
    const validate = userSchema.safeParse({ email, password });
    if (!validate.success) {
      setPassword("");
      setRetypePassword("");
      return SetPasswordPlaceholder(validate.error.issues[0].message);
    }
    mutate();
  };

  return (
    <main className="max-h-dvh flex items-center justify-center bg-gray-200 w-full h-dvh px-5">
      <form
        className="bg-white max-w-[400px] px-5 py-10 rounded-sm"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Email:</label>
        <input
          required
          id="email"
          type="email"
          className="border-b border-black/20 w-full p-2 mb-2 placeholder:text-red-500 placeholder:italic placeholder:text-xs"
          value={email}
          placeholder={emailPlaceholder}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailPlaceHolder("");
          }}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="border-b border-black/20 w-full p-2 mb-2 placeholder:text-red-500 placeholder:italic placeholder:text-xs"
          id="password"
          placeholder={passwordPlaceHolder}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            SetPasswordPlaceholder("");
          }}
          required
        />
        <label htmlFor="rePassword">Retype Password:</label>
        <input
          type="password"
          className="border-b border-black.20 w-full p-2 mb-2  placeholder:text-red-500 placeholder:italic placeholder:text-xs"
          id="rePassword"
          required
          value={retypePassword}
          placeholder={passwordPlaceHolder}
          onChange={(e) => {
            setRetypePassword(e.target.value);
            SetPasswordPlaceholder("");
          }}
        />
        <p className=" text-sm">
          By continuing you agree to our{" "}
          <span className="text-chart-2">Terms of Service</span> and
          <span className="text-chart-2"> Privacy Policy</span>
        </p>
        <div className=" flex items-center justify-center p-3">
          <Button variant={"primary"} className="px-10 py-2">
            Sign up
          </Button>
        </div>
        <p className="flex justify-center text-sm items-end ">
          Already have an account?
          <Link href="/sign-in" className="text-chart-2 pl-1">
            Sign in
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Sign_up;
