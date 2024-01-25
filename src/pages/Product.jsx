import { useEffect, useState } from "react";
import CardProducts from "../components/fragments/CardProducts";
import { getProducts } from "../services/products.services";
import TableCart from "../components/fragments/TableCart";
import Navbar from "../partials/Navbar";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  // Hit API
  useEffect(() => {
    getProducts((data) => {
      // console.log(data);
      setProducts(data)
    });
  }, [])

  // console.log(products);
  // console.log(getProducts());


  // const handleLogout = () => {
      
  // };


  return (
    <>
      <Navbar />
      <div className="flex justify-center py-5">
        <div className="w-full items-center justify-center flex flex-wrap">
          {products.length > 0 && products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Header image={product.image} id={product.id}/>
              <CardProducts.Body name={product.title}>
                {product.description}
              </CardProducts.Body>
              <CardProducts.Footer
                price={product.price}
                id={product.id}
              />
            </CardProducts>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
