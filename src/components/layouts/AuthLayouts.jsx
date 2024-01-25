import { Children } from "react";
import { Link } from "react-router-dom";
import FormLogin from "../fragments/FormLogin";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
    <div className="w-full max-w-xs text-start">
      <h2 className="text-3xl  font-bold mb-2 text-red-600 ">{title}</h2>
      <p className="font-medium text-slate-500 mb-8">
        Welcome, Please enter your details
      </p>
      {children}
      <div className="">
        <p className="mt-4">
          {type === "login"
            ? "Dont have an account?"
            : "Already have an account"}
          {type === "login" && (
          <Link to="/register" className="font-bold text-blue-600">Sign Up</Link>)}
          {type === "register" && (
          <Link to="/login" className="font-bold text-green-600">Sign In</Link>)}
          
        </p>
      </div>
    </div>
    </div>
  );
};

export default AuthLayouts;
