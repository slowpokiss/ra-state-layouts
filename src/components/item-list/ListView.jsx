import ShopItem from "./ShopItem";

export default function ListView({ items }) {
  return (
    <>
      <div className="item-list">
        {items.map((item, id) => {
          return <ShopItem item={item} id={id} />;
        })}
      </div>
    </>
  );
}