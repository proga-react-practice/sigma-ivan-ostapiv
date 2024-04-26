import Card, {CardProps} from "./Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CardList: React.FC<{cards: CardProps[]}> = ({cards}) => {
    return (
        <Box>
            <Typography variant="h4">Stadium list</Typography>
            <Box className="card-list">
                {cards.length > 0 ? (
                    <Grid container spacing={1} sx={{width: "80%"}}>
                        {cards.map((card, index) => (
                            <Grid key={index} item lg={10}>
                                <Card {...card} />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Typography variant="h6">No cards available</Typography>
                )}
            </Box>
        </Box>
    );
};

export default CardList;
