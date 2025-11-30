import { Button } from "@/components/ui/button";
import { cartData } from "@/src/fakeData/fakeData";
import { icon } from "@/src/svgIcons";
const CartItems = () => {
  return (
    <section className="mt-10 flex flex-col gap-2">
      {cartData.map((cart) => (
        <div className="w-full flex border border-black/20 " key={cart.id}>
          <div className="w-1/4 p-1">
            <img src={cart.img} className="w-full rounded-sm object-cover" />
          </div>
          <div className="flex-1 p-2 flex flex-col justify-between ">
            <div className="w-full flex justify-between items-center">
              <p className="text-sm font-semibold">{cart.productName}</p>
              <Button variant={"destructive"} className="h-6 w-6 p-2 ">
                {icon.deleteIcon}
              </Button>
            </div>
            <div className="flex justify-between w-full items-center">
              <div className="flex gap-2 items-center">
                <Button size={"icon-sm"}>{icon.minusIcon}</Button>
                <div className="flex items-center justify-center px-2">
                  {cart.quantity}
                </div>
                <Button size={"icon-sm"}>{icon.plus}</Button>
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
