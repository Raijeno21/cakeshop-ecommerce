import { Button } from "@/components/ui/button";
import { icon } from "@/src/svgIcons";
import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import FailPay from "./FailPay";

const Checkout = ({
  setIsShowCart,
  setIsPaying,
}: {
  setIsPaying: (b: boolean) => void;
  setIsShowCart: (b: boolean) => void;
}) => {
  const [docu, setDocument] = useState<HTMLElement | null>(null);
  useLayoutEffect(() => {
    setDocument(document.body);
  }, []);

  if (!docu) {
    return null;
  }

  return createPortal(
    <section className="h-dvh fixed z-100  bg-gray-300/60 inset-0 flex flex-col justify-end">
      <div className="border h-[50%] bg-white p-5 rounded-t-xl shadow-2xl ">
        <div className="flex justify-between items-center py-5 border-b">
          <h1 className="text-xl font-semibold">Checkout</h1>
          <Button
            size={"icon-sm"}
            variant={"ghost"}
            onClick={() => setIsShowCart(false)}
          >
            {icon.x}
          </Button>
        </div>

        <div className="flex justify-between border-b py-3">
          <p className="text-gray-400">Delivery</p>
          <div className="flex items-center gap-3">
            <p>Select Method</p>
            <span className="block h-4 w-4 -rotate-90">{icon.miniarrow2}</span>
          </div>
        </div>

        <div className="flex justify-between border-b py-3">
          <p className="text-gray-400">Payment</p>
          <div className="flex items-center gap-3">
            <p className="h-5 w-5">{icon.payIcon}</p>
            <span className="block h-4 w-4 -rotate-90">{icon.miniarrow2}</span>
          </div>
        </div>

        <div className="flex justify-between border-b py-3">
          <p className="text-gray-400">Promo Code</p>
          <div className="flex items-center gap-3 ">
            <p className="">Pick Discount</p>
            <span className="block h-4 w-4 -rotate-90">{icon.miniarrow2}</span>
          </div>
        </div>
        <div className="flex justify-between border-b py-3">
          <p className="text-gray-400">Total Cost</p>
          <div className="flex items-center gap-3 ">
            <p className="">$ 123.00</p>
            <span className="block h-4 w-4 -rotate-90">{icon.miniarrow2}</span>
          </div>
        </div>
        <p className="py-3 text-xs">
          By placing an order, you agree to our
          <span className="font-semibold"> Terms</span> and
          <span className="font-semibold"> Condition.</span>
        </p>
        <div className="flex mt-3  px-5">
          <Button
            variant={"primary"}
            className="py-4 w-full"
            onClick={() => {
              setIsPaying(true);
              setIsShowCart(false);
            }}
          >
            Place Order
          </Button>
        </div>
      </div>
    </section>,
    docu
  );
};

export default Checkout;
