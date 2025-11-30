import { Button } from "@/components/ui/button";
import Link from "next/link";
const Sign_in = () => {
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
          <Link href="/sign-up" className="text-chart-2 pl-2">
            Sign up
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Sign_in;
