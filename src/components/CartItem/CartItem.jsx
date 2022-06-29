import React from "react";

import { CartItemContainer, Img, ItemDetails, Name } from "./CartItem.style";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${quantity * price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
