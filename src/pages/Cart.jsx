import Navbar from "../partials/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { getProducts } from "../services/products.services";
import Button from "../components/elements/button";
import { removeFromCart } from "../redux/slices/cartSlice";


const CartPage = (props) => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    // Hit API
    useEffect(() => {
      getProducts((data) => {
        // console.log(data);
        setProducts(data)
      });
    }, [])
    const cart = useSelector((state) => state.cart.data);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() =>{
        if (products?.length > 0 && cart?.length > 0)  {
          const sum = cart.reduce((acc, item ) => {
            const product = products.find((product) => product.id === item.id);
            return acc + product.price * item.qty;
          }, 0)
          setTotalPrice(sum);
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      }, [cart, products])

    
    const totalPriceRef = useRef(null);
    useEffect(() => {
        if (cart.length > 0) {
        totalPriceRef.current.style.display = "table-row";
        }else{
        totalPriceRef.current.style.display = "none";
        }
    }, [cart])

    

    return (
        <>
        <Navbar />
        <div className="w-full mt-5 p-6">
        <table className="text-left table-auto border-separate border-spacing-x-5 w-full">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products?.length > 0 &&
            cart.map((item) => {
              const product = products.find((product) => product.id === item.id)
              return (
                <tr key={item.id}>
                  <td>{product.title}</td>
                  <td>{product.price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                  <td>{item.qty}</td>
                  <td>{(item.qty * product.price).toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                  <td>
                    <Button onClick={() => dispatch(removeFromCart(item.id))}>Hapus</Button>
                  </td>
                </tr>
              )
            })
          }
          <tr ref={totalPriceRef}>
            <td colSpan={3}><b>Total Price</b></td>
            <td>
              Rp. {" "}
               {totalPrice.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
          </tr>
        </tbody>
      </table>
      </div>
      </>
    )
}

export default CartPage;