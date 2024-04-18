import React, {ChangeEvent} from "react";

interface SelectProps {
    options: {label: string; value: string | number}[];
    value: string;
    placeholder: string;
    className?: string;
    id?: string;
    name?: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({options, placeholder, ...props}) => {
    return (
        <select {...props}>
            <option value="" hidden>
                {placeholder}
            </option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
