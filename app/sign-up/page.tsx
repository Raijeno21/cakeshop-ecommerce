import { Button } from "@/components/ui/button";
import Link from "next/link";
const Sign_up = () => {
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
          required
          pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}"
        />
        <label htmlFor="rePassword">Retype Password:</label>
        <input
          type="password"
          className="border-b border-black.20 w-full p-2 mb-2"
          id="rePassword"
          required
          pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}"
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
          Already have an account?{" "}
          <Link href="/sign-in" className="text-chart-2 pl-1">
            Sign in
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Sign_up;
