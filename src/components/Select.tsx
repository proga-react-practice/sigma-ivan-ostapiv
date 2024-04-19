import React, {ChangeEvent} from "react";

interface SelectProps {
    options: {label: string; value: string | number}[];
    value: string;
    placeholder: string;
    className?: string;
    id?: string;
    name?: string;
    selectRef?: React.Ref<HTMLSelectElement>;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
    options,
    placeholder,
    selectRef,
    ...props
}) => {
    return (
        <select ref={selectRef} {...props}>
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
