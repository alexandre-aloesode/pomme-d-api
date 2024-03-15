import React from "react";
import { networkGetProduct } from "./api/network";
import NavBar from "./components/navBar";

function DisplayResearch() {
  const [allProducts, setAllProducts] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    const search = window.location.href.split("/")[4];
    networkGetProduct(search).then((data) => {
      setAllProducts(data);
    });
  }, []);

  React.useEffect(() => {
    {
      allProducts?.products?.map((product, index) => {
        if (index > 1) return;
      });
    }
  }, [allProducts]);

  return (
    <div>
      {allProducts?.products?.map((product, index) => {
        if (index <= 10) {
          return (
            <div
              key={product.id}
              onClick={() => {
                // params.router.navigate(`/product/${product.id}`);
                window.location.href = `/product/${product.id}`;
              }}
            >
              <h1>{product.product_name}</h1>
              <img src={product.image_url} alt={product.product_name} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default DisplayResearch;
