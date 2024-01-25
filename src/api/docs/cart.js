import axios from "axios";
import { baseURL } from "../baseApi";

const cartById = (id) => {
    axios.get(`${baseURL}/${id}/cart`).then(res => res.data);
}

export default cartById;