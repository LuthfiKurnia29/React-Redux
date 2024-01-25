import { forwardRef } from "react";
import Label from "./Label"
import Input from "./input"
const InputForm = forwardRef((props, ref) => {
    const { label, type, name, placeholder } = props;
    return (
        <div className="mb-6 gap-6 items-center">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} ref={ref} />
        </div>
    )
})

export default InputForm;