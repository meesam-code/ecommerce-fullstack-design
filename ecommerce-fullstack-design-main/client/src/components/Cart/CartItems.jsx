import React, { useEffect, useState } from "react";
import DetailedCartCard from "./ProductCartCard";
import { UseContext } from "../../Context/EcommerceContext";
import ButtonComponent from "../Button";
import FeatureCard, { features } from "./Features";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { cart, removeFromCart, products, addToFavorite, removeAllCart } =
    UseContext();
  const [items, setItems] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const totalItems = products.filter((product) =>
      cart.some((item) => item.id === product._id),
    );
    setItems(totalItems);
  }, [cart, products]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const moveToShop = () => {
    navigate("/products");
  };

  if (!items) {
    return <div>No items available</div>;
  }

  return items && items.length > 0 ? (
    <div className="flex w-full flex-col gap-4">
      <div className="flex relative flex-col md:min-w-[500px]  border-1 border-[#DEE2E7] sm:p-4 rounded-lg bg-white   w-full ">
        {items &&
          items?.map((item) => (
            <DetailedCartCard
              key={item._id}
              product={item}
              onDelete={() => {
                removeFromCart(item._id);
              }}
              onFavorite={() => {
                removeFromCart(item._id);
                addToFavorite(item._id);
              }}
            />
          ))}
        <div className="mt-14"></div>

        <div className="hidden justify-between md:flex absolute w-full bottom-3 left-2 ">
          <ButtonComponent
            onClick={moveToShop}
            className="text-white bg-[#127FFF] flex items-center gap-2 p-2 px-3 rounded-md shadow-md border border-[#DEE2E7] hover:cursor-pointer text-sm font-medium"
          >
            <img src="/assets/arrowLeft.png" className="w-4 h-4" alt="" /> Back
            To Shop
          </ButtonComponent>
          <ButtonComponent
            onClick={() => removeAllCart()}
            className="text-[#127FFF] bg-white p-2 px-3 rounded-md shadow-md border border-[#DEE2E7] hover:text-blue-600 hover:cursor-pointer text-sm font-medium mr-4"
          >
            Remove All
          </ButtonComponent>
        </div>
      </div>
      <div className="mt-8 hidden  lg:grid grid-cols-3 gap-5">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex  border-t-1 border-[#DEE2E7] w-full  items-center justify-center  bg-white p-4">
      <p>No items in cart</p>
    </div>
  );
};

export default CartItems;
