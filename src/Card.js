import React from "react";
import easy from "./assets/easy.png";
import fast from "./assets/fast.png";
import money from "./assets/money.png";

const cards = [
  {
    img: easy,
    head: "More than faster",
    body: " It is easy to use this app as nothing more than registering your restaurant and making your menu. The rest is our duty",
  },
  {
    img: fast,
    head: "Fastest",
    body: "It is faster ito get clients online as that’s what they prefer",
  },
  {
    img: money,
    head: "Earn more money",
    body: "You can earn money sitting at your work place only by using your phone or whatever",
  },
];

const Renderer = () => {
  cards.map((card) => {
    return { img: card.img, head: card.head, body: card.body };
  });
};
