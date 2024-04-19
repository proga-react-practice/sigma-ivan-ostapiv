import React, {ChangeEvent, MouseEvent, useState, useRef} from "react";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";
import {CardProps} from "./Card";

interface FormProps {
    setCardInfo: React.Dispatch<React.SetStateAction<CardProps[]>>;
}

const Form: React.FC<FormProps> = ({setCardInfo}) => {
    const [stadiumName, setStadiumName] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [capacity, setCapacity] = useState<string>("");
    const [fieldType, setFieldType] = useState<string>("");

    const [stadiumNameError, setStadiumNameError] = useState<string>("");
    const [cityError, setCityError] = useState<string>("");
    const [capacityError, setCapacityError] = useState<string>("");
    const [fieldTypeError, setFieldTypeError] = useState<string>("");

    const stadiumNameRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const capacityRef = useRef<HTMLInputElement>(null);
    const fieldTypeRef = useRef<HTMLSelectElement>(null);

    const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    const specialCharsAndNumbers = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~\d]/;
    const positiveIntegerPattern = /^\d+$/;

    const removeCard = (id: string) => {
        setCardInfo((prevCardInfo) =>
            prevCardInfo.filter((card) => card.id !== id)
        );
    };

    const handleStadiumNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setStadiumName(value);
        if (value.trim() === "") {
            setStadiumNameError("This field cannot be empty");
        } else if (specialChars.test(value)) {
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
        if (value.trim() === "") {
            setCityError("This field cannot be empty");
        } else if (specialCharsAndNumbers.test(value)) {
            setCityError("This field must contain only letters");
        } else if (value.length > 40) {
            setCityError("The field length must be less than 40 characters");
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
        let isValid = false;
        if (!stadiumName) {
            setStadiumNameError(stadiumName || "This field cannot be empty");
        }
        if (!city) {
            setCityError(city || "This field cannot be empty");
        }
        if (!capacity) {
            setCapacityError(
                capacity || "This field must contain positive integers"
            );
        }
        if (!fieldType) {
            setFieldTypeError(fieldType || "Please select an option");
        }

        if (!isValid) {
            if (stadiumNameError || !stadiumName)
                stadiumNameRef.current?.focus();
            else if (cityError || !city) cityRef.current?.focus();
            else if (capacityError || !capacity) capacityRef.current?.focus();
            else if (fieldTypeError || !fieldType)
                fieldTypeRef.current?.focus();
            else isValid = true;
        }

        return isValid;
    };

    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const isFormValid = formValidation();

        if (isFormValid) {
            const newCard: CardProps = {
                stadiumName: stadiumName,
                city: city,
                capacity: capacity,
                fieldType: fieldType,
                id: Date.now().toString(),
                onClick: (id) => removeCard(id),
            };

            setCardInfo((prevCardInfo) => [newCard, ...prevCardInfo]);
            setStadiumName("");
            setCity("");
            setCapacity("");
            setFieldType("");
        }
    };

    const fieldTypeOptions = [
        {label: "Natural", value: "natural"},
        {label: "Synthetic", value: "synthetic"},
        {label: "Mixed", value: "mixed"},
    ];

    return (
        <div className="form-container">
            <h2>Stadium form</h2>
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
                        inputRef={stadiumNameRef}
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
                        className="stadium-input"
                        placeholder="Enter city"
                        value={city}
                        inputRef={cityRef}
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
                        inputRef={capacityRef}
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
                        selectRef={fieldTypeRef}
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
