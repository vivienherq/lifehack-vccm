import React from "react";
import "./requests.scss";
import ToggleGroup from "../components/togglegroup";

function Requests() {
  console.log(product_card);
  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div className="btn">See more...</div>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <ToggleGroup />
      <div className="main_content">{listItems}</div>
    </div>
  );
}

export default Requests;

const product_card = [
  {
    id: 1,
    product_name: "Bicycle",
    description: "Looking for",
    thumb: "./requests/bicycle.jpeg",
  },
  {
    id: 2,
    product_name: "Wheel",
    description: "Looking for",
    thumb: "./requests/bicycle_wheel.jpeg",
  },
  {
    id: 3,
    product_name: "Water Bottle",
    description: "Giving away",
    thumb: "./requests/water_bottle.webp",
  },
  {
    id: 4,
    product_name: "Phone Case",
    description: "Giving away",
    thumb: "./requests/phone_case.jpg",
  },
  {
    id: 5,
    product_name: "Toilet Paper Rolls x 20",
    description: "Looking for",
    thumb: "./requests/tp_rolls.jpeg",
  },
  {
    id: 6,
    product_name: "Plastic Bottles",
    description: "Looking for",
    thumb: "./requests/plastic_bottles.webp",
  },
  {
    id: 7,
    product_name: "Clothes",
    description: "Giving away",
    thumb: "./requests/clothes.jpeg",
  },
  {
    id: 8,
    product_name: "School Uniform",
    description: "Giving away",
    thumb: "./requests/sch_uni.jpeg",
  },
  {
    id: 9,
    product_name: "Teddy Bear",
    description: "Looking for",
    thumb: "./requests/teddy.webp",
  },
  {
    id: 10,
    product_name: "Children's Clothes",
    description: "Giving away",
    thumb: "./requests/children_clothes.jpeg",
  },
  {
    id: 11,
    product_name: "Toy Cars",
    description: "Giving away",
    thumb: "./requests/toy_cars.jpeg",
  },
  {
    id: 12,
    product_name: "Shelf",
    description: "Looking for",
    thumb: "./requests/shelf.jpeg",
  },
  {
    id: 13,
    product_name: "Stroller",
    description: "Giving away",
    thumb: "./requests/stroller.jpeg",
  },
  {
    id: 14,
    product_name: "School Bag",
    description: "Giving away",
    thumb: "./requests/sch_bag.webp",
  },
  {
    id: 15,
    product_name: "Mugs",
    description: "Giving away",
    thumb: "./requests/mugs.webp",
  },
];
