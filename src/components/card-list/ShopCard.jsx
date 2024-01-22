export default function ShopCard({ card, id }) {
  const { name, price, color, img } = card;
  return (
    <>
      <div className="card" id={id}>
        <div className="card-title">{name.toUpperCase()}</div>
        <div className="card-item-color">{color}</div>
        <img className="card-img" src={img} alt={name} />
        <div className="card-actions">
          <div className="card-price">&#x24;{price}</div>
          <button className="card-add">ADD TO CARD</button>
        </div>
      </div>
    </>
  );
}
