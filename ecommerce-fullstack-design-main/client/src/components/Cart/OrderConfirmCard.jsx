import React from "react";
import { CheckCircle2 } from "lucide-react";
import { UseContext } from "../../Context/EcommerceContext";
import { useNavigate } from "react-router-dom";

const OrderConfirmCard = ({
  orderId,
  amount,
  shippingAddress,
  estimatedDelivery,
}) => {
  const { setOrderConfirm, removeAllCart } = UseContext();
  const navigate = useNavigate();

  const handleShopping = () => {
    setOrderConfirm(null);
    removeAllCart();
  };
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-md w-full p-6 bg-white shadow-xl rounded-2xl border border-gray-200">
      <div className="flex flex-col items-center text-center space-y-4">
        <CheckCircle2 className="text-green-500" size={48} />
        <h2 className="text-2xl font-semibold text-gray-800">
          Order Confirmed!
        </h2>
        <p className="text-gray-600">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <div className="w-full text-left space-y-2 mt-4">
          <div className="flex justify-between">
            <span className="text-gray-500">Order ID:</span>
            <span className="font-medium text-gray-800">{orderId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Amount Paid:</span>
            <span className="font-medium text-gray-800">${amount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Estimated Delivery:</span>
            <span className="font-medium text-gray-800">
              {estimatedDelivery}
            </span>
          </div>
          <div>
            <span className="text-gray-500">Shipping Address:</span>
            <p className="text-gray-700 text-sm mt-1">{shippingAddress}</p>
          </div>
        </div>

        <button
          className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          onClick={() => handleShopping()}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmCard;
