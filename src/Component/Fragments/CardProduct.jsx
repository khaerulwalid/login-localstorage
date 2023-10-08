import React from "react";
import { Span } from "../Element/Card/Span";

export const CardProduct = (props) => {
  const { children } = props;
  return <div className="max-w-sm rounded overflow-hidden shadow-lg mr-5 bg-slate-100">{children}</div>;
};

const Header = ({ image }) => {
  return (
    <div className=" p-5">
      <a href="">
        <img className="w-full rounded-lg" src={image} alt="Sunset in the mountains" />
      </a>
    </div>
  );
};

const Body = ({ title, children }) => {
  return (
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{children}</p>
    </div>
  );
};

const spans = [
  {
    id: 1,
    text: "#photography",
  },
  {
    id: 2,
    text: "#Travel",
  },
  {
    id: 3,
    text: "#Winter",
  },
  {
    id: 4,
    text: "#Sport",
  },
];

const Footer = () => {
  return (
    <div className="px-6 pt-4 pb-2">
      {spans.map((span) => (
        <Span key={span.id} text={span.text} />
      ))}
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
