import '.././Cards.css';
import Card from "./Card";
import Header from "./Header";

function Cards(){
    return(
        <>
            <Header />
            <div className="cards">
                <Card />
                <Card />
                <Card />
            </div>
        </>
               
    )
}

export default Cards;