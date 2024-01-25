import InputForm from "../elements/input";
import Button from "../elements/button";
import { useEffect, useRef } from "react";
import { login } from "../../services/auth.services";
const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    }
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', res.data);
        window.location.href = "/products";
      }else{
        console.log(res);
      }
    }); 
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, [])
    return (
        <form action="" onSubmit={handleLogin}>
        <InputForm
          label="Email"
          type="email"
          name="email"
          placeholder="example@gmail.com"
          ref={emailRef}
        /> 
        <InputForm
          label="Password"
          type="password"
          name="password"
          placeholder="****"
        /> 
        <Button variant="bg-green-600 w-full" type="submit">Login</Button>
      </form>
    )
}

export default FormLogin;