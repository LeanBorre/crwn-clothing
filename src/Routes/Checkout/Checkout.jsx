import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./Checkout.style";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const Checkout = () => {
  const { cartItems, totalAmount } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <Total>Total: ${totalAmount}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
