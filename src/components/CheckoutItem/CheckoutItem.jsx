import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  ImgContainer,
  Img,
  Name,
  Quantity,
  Price,
  Value,
  Arrow,
  RemoveButton,
} from "./CheckoutItem.style";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImgContainer>
        <Img src={imageUrl} alt={`${name}`} />
      </ImgContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
