export default function ShopItem({ item, id }) {
  const { name, price, color, img } = item;
  return (
    <>
      <div className="item" id={id}>
        <img className="item-img" src={img} alt={name} />
        <div className="card-title">{name.toUpperCase()}</div>
        <div className="card-item-color">{color}</div>
        <div className="card-price">&#x24;{price}</div>
        <button className="card-add">ADD TO CARD</button>
      </div>
    </>
  );
}
