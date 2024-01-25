import InputForm from "../elements/input";
import Button from "../elements/button";
const FormRegister = () => {
    return (
        <form action="">
        <InputForm
          label="Fullname"
          type="text"
          name="fullname"
          placeholder="John Doe"
        /> 
        <InputForm
          label="Email"
          type="email"
          name="email"
          placeholder="example@gmail.com"
        /> 
        <InputForm
          label="Password"
          type="password"
          name="password"
          placeholder="****"
        /> 
        <InputForm
          label="ConfirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="****"
        /> 
        <Button variant="bg-blue-600 w-full">Register</Button>
      </form>
    )
}

export default FormRegister;