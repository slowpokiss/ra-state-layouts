import IconSwitch from "./IconSwitch.jsx";
import ListView from "./item-list/ListView.jsx";
import CardsView from "./card-list/CardsView.jsx";
import { useState } from "react";
import "./App.css";

export default function Store() {
  const [active, setActive] = useState("view_module");

  const products = [
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
    },
    {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
    },
    {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
    },
  ];

  return (
    <>
      <div className="icon-area">
        <IconSwitch
          icon={active}
          onSwitch={() =>
            setActive(active === "view_list" ? "view_module" : "view_list")
          }
        />
      </div>
      {active === "view_module" ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </>
  );
}
