import FormRegister from "../components/fragments/FormRegister";
import AuthLayouts from "../components/layouts/AuthLayouts";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <AuthLayouts title="Register" type="register">
            <FormRegister />
        </AuthLayouts>
    )
}

export default RegisterPage;