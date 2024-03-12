import React, { useEffect } from "react";

function ProductPage() {
  const [productID, setProductID] = React.useState("");
  const [productInfo, setProductInfo] = React.useState({});

  useEffect(() => {
    const id = window.location.href.split("/")[4];
    fetch("https://world.openfoodfacts.net/api/v2/product/" + id)
      .then((response) => response.json())
      .then((data) => {
        setProductInfo(data.product);
      });
  }, []);

  return (
    <div>
      <div>Product page</div>
      <div key={productInfo.id}>
        <h1>{productInfo.product_name}</h1>
        <img src={productInfo.image_url} alt={productInfo.product_name} />
      </div>
    </div>
  );
}
export default ProductPage;
