import ShopCard from "./ShopCard";

export default function CardsView({ cards }) {
  return (
    <>
      <div className="card-list">
        {cards.map((card, id) => {
          return <ShopCard card={card} id={id} />;
        })}
      </div>
    </>
  );
}
