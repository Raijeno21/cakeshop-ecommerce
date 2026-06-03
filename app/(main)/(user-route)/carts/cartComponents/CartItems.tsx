"use client";
import { Button } from "@/components/ui/button";
import { icon } from "@/src/svgIcons";
import { use, useEffect, useState } from "react";
import Checkout from "./Checkout";
import SuccesPay from "./SuccessPay";
import FailPay from "./FailPay";
import { useCartsQuery } from "@/services/useCartsQueryMutations";
import { useCartsMutations } from "@/services/useCartsQueryMutations";
import { useQueryClient } from "@tanstack/react-query";

const CartItems = () => {
  const queryClient = useQueryClient();
  const userID = queryClient.getQueryData(["user"]) as { id: string };
  const { data, isLoading } = useCartsQuery();
  const { updateCartItem, removeFromCart } = useCartsMutations();
  const handleRemoveremoveFromCart = (id: string) => {
    removeFromCart.mutate({ id });
  };
  const handleUpdateCartItem = (
    id: string,
    quantity: number,
    newQty: number,
  ) => {
    updateCartItem.mutate({ id, quantity, newQty });
  };
  const [isShowCart, setIsShowCart] = useState<boolean>(false);
  const [isPaySuccess, setIsPaySuccess] = useState<boolean>(true);
  const [isPaying, setIsPaying] = useState<boolean>(false);

  if (!data || data.length === 0) {
    return <div className="mt-10 flex flex-col gap-2">Nothing to show</div>;
  }
  if (isLoading) {
    <div>Loading . . .</div>;
  }

  return (
    <section className="mt-10 flex flex-col gap-2">
      {userID?.id ? (
        <>
          {data
            .sort((a: { createdAt?: any }, b: { createdAt?: any }) =>
              a.createdAt! > b.createdAt! ? 1 : -1,
            )
            .map((cart) => (
              <div
                className="w-full flex border border-black/20 "
                key={cart.id}
              >
                <div className="w-1/4 p-1">
                  <img
                    src={cart.image}
                    className="w-full rounded-sm object-cover"
                  />
                </div>
                <div className="flex-1 p-2 flex flex-col justify-between ">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-sm font-semibold">{cart.productName}</p>
                    <Button
                      variant={"destructive"}
                      className="h-6 w-6 p-2 cursor-pointer"
                      onClick={() => handleRemoveremoveFromCart(cart.id!)}
                    >
                      {icon.deleteIcon}
                    </Button>
                  </div>
                  <div className="flex justify-between w-full items-center">
                    <div className="flex gap-2 items-center">
                      <Button
                        size={"xs"}
                        variant={"destructive"}
                        onClick={() =>
                          handleUpdateCartItem(cart.id!, cart.quantity!, -1)
                        }
                      >
                        {icon.minusIcon}
                      </Button>
                      <div className="flex items-center justify-center px-2">
                        {cart.quantity}
                      </div>
                      <Button
                        size={"xs"}
                        variant={"primary"}
                        className="p-0"
                        onClick={() =>
                          handleUpdateCartItem(cart.id!, cart.quantity!, 1)
                        }
                      >
                        {icon.plus}
                      </Button>
                    </div>
                    <div>₱ {cart.price * cart.quantity!}</div>
                  </div>
                </div>
              </div>
            ))}
          <div className=" mt-5 flex justify-center px-5">
            <Button
              variant={"primary"}
              className="w-full py-4"
              onClick={() => setIsShowCart(true)}
            >
              Go to Checkout
            </Button>
          </div>
          {isShowCart && (
            <Checkout setIsShowCart={setIsShowCart} setIsPaying={setIsPaying} />
          )}

          {isPaying &&
            (isPaySuccess ? (
              <SuccesPay setIsPaying={setIsPaying} />
            ) : (
              <FailPay setIsPaying={setIsPaying} />
            ))}
        </>
      ) : (
        <div className="mt-10 flex flex-col gap-2">
          Please login to view your cart
        </div>
      )}
    </section>
  );
};

export default CartItems;
