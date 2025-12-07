"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const Sign_in = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [email, setEmail] = useState<string>("");
  const [password, setPasswword] = useState<string>("");
  const [passwordPlaceHolder, SetPasswordPlaceholder] = useState<string>("");
  const [emailPlaceholder, setEmailPlaceHolder] = useState<string>("");

  const router = useRouter();

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
    router.push("/");
    return data;
  };
  const { mutate, isPending } = useMutation({
    mutationKey: ["signIn"],
    mutationFn: mutationFN,
    onSuccess: (data) => {
      setEmail("");
      setPasswword("");
      console.log(data);
    },
    onError: (error) => {
      if (error.message === "* Password is incorrect") {
        setPasswword("");
        SetPasswordPlaceholder(error.message);
      }
      if (error.message === "* Email does'nt exist") {
        setEmail("");
        setPasswword("");
        setEmailPlaceHolder(error.message);
      }
      console.log(error.message);
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          id="email"
          value={email}
          placeholder={emailPlaceholder}
          type="email"
          className="border-b border-black/20 w-full p-2 mb-2 placeholder:text-red-500 placeholder:italic"
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailPlaceHolder("");
          }}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          placeholder={passwordPlaceHolder}
          className="border-b border-black/20 w-full p-2 mb-2 placeholder:text-red-500 placeholder:italic"
          id="password"
          onChange={(e) => {
            setPasswword(e.target.value);
            SetPasswordPlaceholder("");
          }}
        />
        <p className=" text-xs flex justify-end mt-2">Forgot Password?</p>
        <div className="flex justify-center mt-5">
          <Button
            className="px-10 w-full py-1 h-10"
            variant={"primary"}
            disabled={isPending}
          >
            {isPending ? (
              <div className=" h-full aspect-square classicSpinner bg-white"></div>
            ) : (
              <p>Sign In</p>
            )}
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
