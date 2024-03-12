import React from "react";

function ProductList() {
  const [allProducts, setAllProducts] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    fetch("https://world.openfoodfacts.net/api/v2/search")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  React.useEffect(() => {
    console.log(allProducts);
    {
      allProducts?.products?.map((product, index) => {
        if (index > 1) return;
        console.log(product);
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
                window.location.href = `http://localhost:5173/product/${product.id}`;
                console.log("tttttt");
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

export default ProductList;
