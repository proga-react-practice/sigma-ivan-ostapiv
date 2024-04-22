import {MouseEvent, ReactNode} from "react";

interface ButtonProps {
    type: "button" | "submit" | "reset";
    children: ReactNode;
    className?: string;
    id?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({...props}) => {
    return <button {...props} />;
};

export default Button;
