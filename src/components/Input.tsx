import {ChangeEvent} from "react";

interface InputProps {
    type: "text" | "number";
    placeholder?: string;
    className?: string;
    id?: string;
    name?: string;
    inputRef?: React.Ref<HTMLInputElement>;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({onChange, inputRef, ...props}) => {
    return <input {...props} ref={inputRef} onChange={onChange} />;
};

export default Input;
