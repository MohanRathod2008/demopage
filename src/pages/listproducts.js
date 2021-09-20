import { useState } from "react";

import Products from "../demodata";
import List from "../componets/List";
import Filter from "../componets/Filter";
import Search from "../componets/Search";
import Sort from "../componets/Sort";

function ListProducts() {
  const [products, setProducts] = useState(Products);
  const [filterValue, setFilterValue] = useState("none");

  const [input, setInput] = useState("");

  const productFilter = (value) => {
    console.log("value : " + value);
    let filteredProducts = Products.filter(function (prod) {
      return prod.category === value;
    });
    console.log("filteredProducts : " + filteredProducts);
    setProducts(filteredProducts);
  };

  const updateInput = async (input) => {
    const filteredProducts = Products.filter((prod) => {
      return prod.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setProducts(filteredProducts);
  };

  const onChangeSort = (value) => {
    console.log('sort value: ' + value);
    if (value === "1") {
        sortByPriceAsc();
    } else if (value === "2") {
        sortByPriceDesc();
    } else {
        sortByName();
    }
  };

  const sortByName = () => {
    const sorted = [...Products].sort((a, b) => a['name'] > b['name']);
    setProducts(sorted);
  };

  const sortByPriceAsc = () => {
    const sorted = [...Products].sort((a, b) => a['price'] - b['price']);
    setProducts(sorted);
  };

  const sortByPriceDesc = () => {
    const sorted = [...Products].sort((a, b) => b['price'] - a['price']);
    setProducts(sorted);
  };

  return (
    <div className="">
      <h2>The Book Shop</h2>
      <div className="top">
        <Filter
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          productFilter={productFilter}
        />
        <Search input={input} setKeyword={updateInput} />
        <Sort onChangeSort={onChangeSort}/>
      </div>
      <List products={products} />
    </div>
  );
}

export default ListProducts;
