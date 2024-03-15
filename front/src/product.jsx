import React, { useEffect } from "react";
import { networkGet } from "./api/network";
import NavBar from "./components/navBar";

function ProductPage() {
  const [productInfo, setProductInfo] = React.useState({});

  useEffect(() => {
    const id = window.location.href.split("/")[4];
    networkGet(`product/${id}`).then((data) => {
      setProductInfo(data.product);
      console.log(data.product);
    });
  }, []);

  return (
    <div>
      <div key={productInfo.id}>
        <h1>Marque : {productInfo.brands}</h1>
        <h1>Produit : {productInfo.product_name}</h1>
        <img src={productInfo.image_url} alt={productInfo.product_name} />
      </div>
    </div>
  );
}
export default ProductPage;
