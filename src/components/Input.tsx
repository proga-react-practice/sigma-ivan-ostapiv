import {ChangeEvent} from "react";

interface InputProps {
    type: "text" | "number";
    placeholder?: string;
    className?: string;
    id?: string;
    name?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({...props}) => {
    return <input {...props} />;
};

export default Input;
