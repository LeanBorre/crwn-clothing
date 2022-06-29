import React, { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import "./Shop.style.scss";
import ProductCard from "../../components/ProductCard/ProductCard";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <Fragment>
      <div className="products-container">
        {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
      </div>
    </Fragment>
  );
};

export default Shop;
