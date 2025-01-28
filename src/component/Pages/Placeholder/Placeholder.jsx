import React from "react";
import "./Placeholder.css";

const Placeholder = ({ food_list = [], cartItem = {} }) => {
  const subtotal = food_list.reduce(
    (acc, item) => acc + (cartItem[item._id] || 0) * item.price,
    0
  );

  const deliveryFee = 50;
  const total = subtotal + deliveryFee;

  return (
    <form className="place-order mt-32">
      <div className="place-order-left px-7">
        <p className="title text-2xl font-bold">Delivery Information</p>
        <div className="multi-fields mt-6">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>

      <div className="place-order-right mr-20 bg-red-600 p-10 rounded-md mt-16   ">
        <div className="cart-total mb-6">
          <h2 className="text-lg font-bold">Cart Totals</h2>
          <div className="mt-4">
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{subtotal}</p>
            </div>
            <hr className="my-2" />

            <div className="cart-total-details ">
              <p>Delivery Fee</p>
              <p>₹{deliveryFee}</p>
            </div>
            <hr className="my-2" />

            <div className="cart-total-details ">
              <p>Total</p>
              <p>₹{total}</p>
            </div>
          </div>

          <button className="mt-4 bg-green-600 px-4 py-2 rounded-lg w-full hover:bg-green-700 transition">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default Placeholder;
