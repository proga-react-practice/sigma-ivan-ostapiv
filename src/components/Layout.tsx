import {useState} from "react";
import Form from "./Form";
import CardList from "./CardList";
import {CardProps} from "./Card";

const Layout: React.FC = () => {
    const [cards, setCards] = useState<CardProps[]>([]);

    return (
        <div className="layout-container">
            <Form setCardInfo={setCards} />
            <CardList cards={cards} />
        </div>
    );
};

export default Layout;
