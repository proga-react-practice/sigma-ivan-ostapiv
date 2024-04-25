import React from "react";
import Button from "./Button";
import DeleteIcon from "@mui/icons-material/Delete";
import MiuCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import {CardProps as MuiCardProps} from "@mui/material/Card";

export interface CardProps {
    stadiumName: string;
    city: string;
    capacity: string;
    fieldType: string;
    id: string;
    onClick: (id: string) => void;
}

const Card: React.FC<CardProps & Omit<MuiCardProps, "onClick">> = ({
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
        <MiuCard className="card-container" id={id}>
            <CardContent>
                <Typography variant="body1" className="card-item">
                    Stadium - {stadiumName}
                </Typography>
                <Typography variant="body1" className="card-item">
                    City - {city}
                </Typography>
                <Typography variant="body1" className="card-item">
                    Capacity - {capacity}
                </Typography>
                <Typography variant="body1" className="card-item">
                    Field - {fieldType}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    type="button"
                    onClick={handleRemove}
                    endIcon={<DeleteIcon />}
                >
                    Remove
                </Button>
            </CardActions>
        </MiuCard>
    );
};

export default Card;
