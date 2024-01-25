import { Link } from "react-router-dom";
import Button from "../elements/button";    
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/slices/cartSlice'
const CardProducts = (props) => {
    const {children} = props;
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between mb-2">
        {children}
    </div>
  )
}

const Header = (props) => {
    const {image, id} = props;
    return (
        <Link to={`/product/${id}`}>
            <img src={image} className="p-8 rounded-t-lg h-60 w-full object-hover" alt="product" />
        </Link>
    )
}

const Body = (props) => {
    const {children, name} = props;
    return (
        <div className="px-5 pb-5 text-start h-full">
        <a href="">
            <h5 className="text-xl font-semibold tracking-tight text-white">{name.substring(0,20)} ...</h5>
            <p className="text-m text-white">{children.substring(0, 20)} ...    </p>
        </a>
    </div>
    )
}

const Footer = (props) => {
    const {price, id } = props;
    const dispatch = useDispatch();
    return (
        <div className="flex items-center justify-between p-4">
            <span className="text-xl font-bold text-white">
            Rp. {" "} 
            {price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</span>
            <Button className="bg-red-600" onClick={() => dispatch(addToCart({id, qty: 1}))}>Add To Cart</Button>
        </div>
    )
}

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;
export default CardProducts;
CardProducts.defaultProps = {
    children: null,
}
CardProducts.propTypes = {
    children: PropTypes.node,
}
