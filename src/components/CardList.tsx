import Card, {CardProps} from "./Card";

const CardList: React.FC<{cards: CardProps[]}> = ({cards}) => {
    return (
        <div className="card-list">
            <h2>Stadium list</h2>
            {cards.length > 0 ? (
                <>
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </>
            ) : (
                <p>No cards available</p>
            )}
        </div>
    );
};

export default CardList;
