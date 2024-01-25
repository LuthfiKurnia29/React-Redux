import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
  axios
    .post("http://localhost:5144/api/Auth/login", data)
    .then((res) => {
        callback(true, res);
    }).catch((err) => {
        callback(false, err);
    });
};



export const getUsername = (token) => {
    const decoded = jwtDecode(token);
    // console.log(decoded);/
    return decoded.given_name;
}

export const getId = (token) => {
    const decoded = jwtDecode(token);
    // console.log(decoded);/
    return decoded.sub;
}
