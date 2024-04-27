import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MuiSelect, {SelectChangeEvent} from "@mui/material/Select";
interface SelectProps {
    options: {label: string; value: string | number}[];
    value: string;
    placeholder: string;
    id?: string;
    name?: string;
    selectRef?: React.Ref<HTMLSelectElement>;
    onChange: (e: SelectChangeEvent<string>) => void;
}

const Select: React.FC<SelectProps> = ({
    options,
    value,
    placeholder,
    onChange,
    selectRef,
    ...props
}) => {
    return (
        <FormControl fullWidth>
            <MuiSelect
                labelId={props.id}
                value={value}
                onChange={onChange}
                inputRef={selectRef}
                {...props}
                displayEmpty
            >
                <MenuItem value="" disabled hidden>
                    {placeholder}
                </MenuItem>
                {options.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
};

export default Select;
