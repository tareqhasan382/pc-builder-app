import { useProductContext } from "../../app/context/ProductContext ";
import { useSession } from "next-auth/react";
const Cart = () => {
  const { data: session } = useSession();
  const { cart } = useProductContext();
  return (
    <div className=" py-24 flex flex-col item-center h-screen ">
      <h3 className=" text-center text-lg font-bold text-pink-500 ">
        {session?.user?.name} congratulations your checkOut Successfully
      </h3>
      {cart.map((item) => (
        <div
          key={item._id}
          className=" flex justify-center my-2 mx-5 rounded-lg "
        >
          <h3>{item.title} </h3>
        </div>
      ))}
    </div>
  );
};

export default Cart;
