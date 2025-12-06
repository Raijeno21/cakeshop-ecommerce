"use client";
import { createPortal } from "react-dom";
import { useState, useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";
import { icon } from "@/src/svgIcons";
import { useRouter } from "next/navigation";

const FailPay = ({ setIsPaying }: { setIsPaying: (bol: boolean) => void }) => {
  const [docu, setDocument] = useState<HTMLElement | null>(null);
  const router = useRouter();

  const handRoute = (link: string) => {
    if (link === "/") {
      router.push("/");
    }
    if (link === "/explore") {
      router.push(link);
    }
  };
  useLayoutEffect(() => {
    setDocument(document.body);
  });
  if (!docu) {
    return null;
  }
  return createPortal(
    <section className="h-dvh fixed z-100  bg-gray-300/60 inset-0 flex  items-center px-5 ">
      <div className="h-3/4 bg-white w-full rounded-2xl p-5 relative flex items-center justify-center">
        <Button
          variant={"ghost"}
          className="absolute top-5 left-5"
          onClick={() => setIsPaying(false)}
        >
          {icon.x}
        </Button>
        <div className="flex flex-col gap-5 ">
          <p className="text-2xl font-semibold">Ooops! Order Failed</p>
          <p className="text-gray-400">Something went terribly wrong!</p>
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
      </div>
    </section>,
    docu
  );
};

export default FailPay;
