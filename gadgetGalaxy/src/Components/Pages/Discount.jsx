import React from "react";
import "../modules/Style.css";

function Discount() {
  return (
    <div className="flex justify-center items-center">
      <form class="discountForm">
        <span class="DiscountHeading">TAKE 10% OFF.</span>
        <p class="DiscountSubheading">
          Here is your discount! The promo code will be sent to your email.
        </p>
        <div class="inputContainer">
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            id="email-address"
          />
          <button type="submit" class="submitButton">
            Get it!
          </button>
        </div>

        <button class="exitBtn">×</button>
      </form>
    </div>
  );
}

export default Discount;
