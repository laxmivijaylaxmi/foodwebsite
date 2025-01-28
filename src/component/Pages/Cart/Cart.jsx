import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cartItem = {},
    food_list = [],
    removeFromCart,
    updateCartQuantity,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const subtotal = food_list.reduce(
    (acc, item) => acc + (cartItem[item._id] || 0) * item.price,
    0
  );
  const deliveryFee = 50;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart mt-32 flex flex-wrap">
      <div className="cart-items w-full lg:w-4/4 px-4">
        <div className="cart-items-title px-5 flex justify-between text-center font-bold">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="my-4 hidden md:block" />

        {food_list.map((item) => {
          const quantity = cartItem[item._id] || 0;
          if (quantity > 0) {
            return (
              <div
                key={item._id}
                className="cart-items-item px-4 flex justify-between items-center my-2"
              >
                <img
                  className="w-20 h-20 rounded-md"
                  src={item.image}
                  alt={item.name}
                />

                <p>{item.name}</p>
                <p>₹{item.price}</p>

                <select
                  value={quantity}
                  onChange={(e) =>
                    updateCartQuantity(item._id, parseInt(e.target.value))
                  }
                  className=" rounded px-2 py-1 text-black"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>

                <p>₹{item.price * quantity}</p>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="cursor-pointer text-red-500 text-xl font-bold bg-slate-300 hover:text-white hover:bg-teal-700 rounded-full w-8 h-8 flex items-center justify-center"
                >
                  ×
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom mt-10 px-4 bg-red-600 text-white ml-20 p-4 rounded-md">
        <div className="cart-total mb-6">
          <h2 className="text-lg font-bold">Cart Totals</h2>
          <div className="mt-4">
            <div className="cart-total-details flex justify-between">
              <p>Subtotal</p>
              <p>₹{subtotal}</p>
            </div>
            <hr className="my-2" />
            <div className="cart-total-details flex justify-between">
              <p>Delivery Fee</p>
              <p>₹{deliveryFee}</p>
            </div>
            <hr className="my-2" />
            <div className="cart-total-details flex justify-between font-bold">
              <p>Total</p>
              <p>₹{total}</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="mt-4 bg-green-600 px-4 py-2 rounded-lg w-full hover:bg-green-700 transition"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cart-promocode mt-4 p-1 rounded-lg border bg-gray-100">
          <p className="text-sm text-gray-700 mb-2">
            If you have a promo code, enter it here:
          </p>
          <div className="cart-promocode-input flex">
            <input
              type="text"
              placeholder="Promo code"
              className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 px-6 py-2 rounded-r-md text-white font-medium hover:bg-blue-600 transition duration-300">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
