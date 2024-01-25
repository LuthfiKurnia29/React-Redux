import { useLogout, useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import Button from "../components/elements/button";

const Navbar = () => {
    const username = useLogin();
    return (
        <div
        className="flex justify-end h-20 bg-blue-600 text-white items-center px-10"
      >
        <div className="flex mr-20">
        <Link to={'/cart'} className="bg-white">Keranjang</Link>
        </div>
        {username}
        <Button className="ml-5 bg-black" onClick={useLogout}>
          Logout
        </Button>
      </div>
    )
}

export default Navbar;