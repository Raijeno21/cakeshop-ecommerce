"use client";
import { Button } from "@/components/ui/button";
import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
const SuccesPay = ({
  setIsPaying,
}: {
  setIsPaying: (bol: boolean) => void;
}) => {
  const [docu, setDocument] = useState<HTMLElement | null>(null);
  useLayoutEffect(() => {
    setDocument(document.body);
  });
  const router = useRouter();

  const handRoute = (link: string) => {
    setIsPaying(false);
    if (link === "/") {
      router.push("/");
    }
    if (link === "/explore") {
      router.push(link);
    }
  };
  if (!docu) {
    return null;
  }

  return createPortal(
    <section className=" fixed inset-0 z-99 flex items-center flex-col justify-center gap-5 bg-white">
      <div className="flex flex-col px-10 gap-5">
        <p className="text-2xl font-semibold flex text-center">
          You Order has been accepted
        </p>
        <p className="text-gray-400 text-center">
          Your items has been placed and is on it's way to being processed
        </p>
      </div>
      <div className="absolute bottom-[10%] flex flex-col gap-5 w-full px-10">
        <Button
          className="w-full py-4"
          variant={"primary"}
          onClick={() => handRoute("/explore")}
        >
          Track Order
        </Button>
        <Button
          className="w-full border py-4 shadow"
          variant={"ghost"}
          onClick={() => handRoute("/")}
        >
          Back to Home
        </Button>
      </div>
    </section>,
    docu
  );
};

export default SuccesPay;
