import React from "react";
import Button from "./Button";
import DeleteIcon from "@mui/icons-material/Delete";
import MiuCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import {CardProps as MuiCardProps} from "@mui/material/Card";
import {theme} from "../utils/theme";

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
        <MiuCard id={id} className="card-container" sx={{padding: "5px"}}>
            <CardContent sx={{padding: "4px"}}>
                <Typography variant="body1">Stadium - {stadiumName}</Typography>
                <Typography variant="body1">City - {city}</Typography>
                <Typography variant="body1">Capacity - {capacity}</Typography>
                <Typography variant="body1">Field - {fieldType}</Typography>
            </CardContent>
            <CardActions sx={{paddingTop: 0}}>
                <Button
                    sx={{
                        backgroundColor: theme.palette.error.dark,
                        "&:hover": {
                            backgroundColor: theme.palette.error.main,
                        },
                    }}
                    variant="contained"
                    type="button"
                    size="small"
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
