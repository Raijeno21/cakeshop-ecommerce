import { Button } from "@/components/ui/button";
import { cartData } from "@/src/fakeData/fakeData";
import { icon } from "@/src/svgIcons";
const CartItems = () => {
  return (
    <section className="mt-10 flex flex-col gap-2">
      {cartData.map((cart) => (
        <div className="w-full flex border border-black/20 " key={cart.id}>
          <div className="w-1/4">
            <img src={cart.img} />
          </div>
          <div className="flex-1 p-2 flex flex-col justify-between ">
            <div className="w-full flex justify-between items-center">
              <p className="text-sm font-semibold">{cart.productName}</p>
              <Button variant={"destructive"}>{icon.x}</Button>
            </div>
            <div className="flex justify-between w-full items-center">
              <div className="flex gap-2">
                <Button>{icon.minusIcon}</Button>
                <div className="flex items-center justify-center border h-8 aspect-square">
                  {cart.quantity}
                </div>
                <Button>{icon.plus}</Button>
              </div>
              <div>₱ {cart.price * cart.quantity}</div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CartItems;
