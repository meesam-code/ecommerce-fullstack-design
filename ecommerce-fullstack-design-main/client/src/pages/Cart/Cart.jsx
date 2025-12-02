import React, { useEffect, useState } from "react";
import CartItems from "../../components/Cart/CartItems";
import CouponCard from "../../components/Cart/CoupenCard";
import OrderSummaryCard from "../../components/Cart/CartSummary";
import SavedForLater from "../../components/Cart/SavedItems";
import PromoCard from "../../components/DiscountedCard";
import { UseContext } from "../../Context/EcommerceContext";
import OrderConfirmCard from "../../components/Cart/OrderConfirmCard";
// ✅ Make sure this path is correct

const Cart = () => {
  const { favorite, products, cart, orderConfirm } = UseContext();
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    const favoriteProducts = products.filter((item) =>
      favorite.includes(item._id),
    );
    setSavedItems(favoriteProducts);
  }, [favorite, products]);

  return (
    <section className="relative sm:px-15 md:px-5 lg:px-[50px] sm:py-5 md:py-5 bg-[#f7fafc]">
      <h1 className="text-2xl mb-5 font-semibold md:inline-block hidden">
        My Cart({cart.length})
      </h1>

      <section className="flex flex-col md:flex-row md:gap-4 justify-between">
        {/* Left: Cart Items */}
        <div className="flex-1 w-full md:flex md:justify-center">
          <CartItems />
        </div>

        {/* Right: Summary + Coupon */}
        <div className="flex flex-col md:gap-4 w-full md:w-[350px] lg:shrink-0">
          <div className="md:inline-block hidden">
            <CouponCard onApply={(code) => console.log(code)} />
          </div>
          <OrderSummaryCard />
        </div>
      </section>

      {/* Saved Items */}
      {savedItems.length > 0 && (
        <div className="sm:mt-5">
          <SavedForLater savedItems={savedItems} />
        </div>
      )}

      {/* Promo Card */}
      <section className="mt-8 mb-10 w-full md:inline-block hidden">
        <PromoCard />
      </section>

      {/* Order Confirmation Modal */}
      {orderConfirm && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-30 z-40" />

          {/* Confirmation Card (centered) */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <OrderConfirmCard
              orderId={orderConfirm.orderId}
              amount={orderConfirm.amount}
              shippingAddress={orderConfirm.shippingAddress}
              estimatedDelivery={orderConfirm.estimatedDelivery}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
