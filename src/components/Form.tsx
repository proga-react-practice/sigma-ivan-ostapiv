import React, {ChangeEvent, MouseEvent, useState} from "react";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";

const Form: React.FC = () => {
    const [stadiumName, setStadiumName] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [capacity, setCapacity] = useState<string>("");
    const [fieldType, setFieldType] = useState<string>("");

    const [stadiumNameError, setStadiumNameError] = useState<string>("");
    const [cityError, setCityError] = useState<string>("");
    const [capacityError, setCapacityError] = useState<string>("");
    const [fieldTypeError, setFieldTypeError] = useState<string>("");

    const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    const specialCharsAndNumbers = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~\d]/;
    const positiveIntegerPattern = /^\d+$/;

    const handleStadiumNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setStadiumName(value);
        if (specialChars.test(value)) {
            setStadiumNameError("This field cannot contain special chars");
        } else if (value.length > 40) {
            setStadiumNameError(
                "The field length must be less than 40 characters"
            );
        } else {
            setStadiumNameError("");
        }
    };

    const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCity(value);
        if (specialCharsAndNumbers.test(value)) {
            setCityError("This field must contain only letters");
        } else if (value.length > 40) {
            setStadiumNameError(
                "The field length must be less than 40 characters"
            );
        } else {
            setCityError("");
        }
    };

    const handleCapacityChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCapacity(value);
        if (!positiveIntegerPattern.test(value)) {
            setCapacityError("This field must contain only positive integers");
        } else {
            setCapacityError("");
        }
    };

    const handleFieldTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setFieldType(value);
        if (value.trim() === "") {
            setFieldTypeError("Please select an option");
        }
        setFieldTypeError("");
    };

    const handleFormReset = () => {
        setStadiumName("");
        setCity("");
        setCapacity("");
        setFieldType("");
        setCapacityError("");
        setCityError("");
        setFieldTypeError("");
        setStadiumNameError("");
    };

    const formValidation = () => {
        if (fieldType.trim() === "") {
            setFieldTypeError("Please select an option");
            document.getElementById("field-type")?.focus();
        }
        if (capacity.trim() === "") {
            setCapacityError("This field must contain positive integers");
            document.getElementById("capacity")?.focus();
        }
        if (city.trim() === "") {
            setCityError("This field cannot be empty");
            document.getElementById("city")?.focus();
        }
        if (stadiumName.trim() === "") {
            setStadiumNameError("This field cannot be empty");
            document.getElementById("stadium-name")?.focus();
        }
        if (
            stadiumNameError ||
            cityError ||
            capacityError ||
            fieldTypeError ||
            fieldType.trim() === "" ||
            capacity.trim() === "" ||
            city.trim() === "" ||
            stadiumName.trim() === ""
        ) {
            if (stadiumNameError) {
                document.getElementById("stadium-name")?.focus();
            } else if (cityError) {
                document.getElementById("city")?.focus();
            } else if (capacityError) {
                document.getElementById("capacity")?.focus();
            } else if (fieldTypeError) {
                document.getElementById("field-type")?.focus();
            }
            return false;
        }
        return true;
    };

    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const isFormValid = formValidation();
        console.log(isFormValid);
        if (isFormValid) {
            /* empty */
        }
    };

    const fieldTypeOptions = [
        {label: "Natural", value: "natural"},
        {label: "Synthetic", value: "synthetic"},
        {label: "Mixed", value: "mixed"},
    ];

    return (
        <div className="form-container">
            <form className="stadium-form">
                <div className="input-container">
                    <label htmlFor="stadium-name">Stadium:</label>
                    <Input
                        type="text"
                        id="stadium-name"
                        name="stadiumName"
                        className="stadium-input"
                        placeholder="Enter stadium name"
                        value={stadiumName}
                        onChange={handleStadiumNameChange}
                    />
                    <div className="error-message">{stadiumNameError}</div>
                </div>
                <div className="input-container">
                    <label htmlFor="city">City:</label>
                    <Input
                        type="text"
                        id="city"
                        name="city"
                        className="input"
                        placeholder="Enter city"
                        value={city}
                        onChange={handleCityChange}
                    />
                    <div className="error-message">{cityError}</div>
                </div>
                <div className="input-container">
                    <label htmlFor="capacity">Capacity:</label>
                    <Input
                        type="number"
                        id="capacity"
                        name="capacity"
                        className="stadium-input"
                        placeholder="Enter stadium capacity"
                        value={capacity}
                        onChange={handleCapacityChange}
                    />
                    <div className="error-message">{capacityError}</div>
                </div>
                <div className="input-container select-container">
                    <label htmlFor="field-type">Choose field type:</label>
                    <Select
                        id="field-type"
                        name="fieldType"
                        className="stadium-input stadium-select"
                        placeholder="Choose type"
                        options={fieldTypeOptions}
                        onChange={handleFieldTypeChange}
                        value={fieldType}
                    />
                    <div className="error-message">{fieldTypeError}</div>
                </div>
                <div className="form-buttons">
                    <div>
                        <Button
                            type="submit"
                            className="addButton"
                            onClick={handleSubmit}
                        >
                            Add
                        </Button>
                    </div>
                    <div>
                        <Button
                            type="reset"
                            className="resetButton"
                            onClick={handleFormReset}
                        >
                            Reset
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
