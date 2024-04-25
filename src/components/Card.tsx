import React from "react";
import Button from "./Button";
import DeleteIcon from "@mui/icons-material/Delete";

export interface CardProps {
    stadiumName: string;
    city: string;
    capacity: string;
    fieldType: string;
    id: string;
    onClick: (id: string) => void;
}

const Card: React.FC<CardProps> = ({
    stadiumName,
    city,
    capacity,
    fieldType,
    id,
    onClick,
}) => {
    const handleRemove = () => {
        onClick(id);
    };

    return (
        <div className="card-container" id={id}>
            <div className="card-item">Stadium - {stadiumName}</div>
            <div className="card-item">City - {city}</div>
            <div className="card-item">Capacity - {capacity}</div>
            <div className="card-item">Field - {fieldType}</div>
            <div className="form-buttons card-button">
                <Button
                    type="button"
                    onClick={handleRemove}
                    endIcon={<DeleteIcon />}
                >
                    Remove
                </Button>
            </div>
        </div>
    );
};

export default Card;
