import React from "react";
import { CardProduct } from "../Component/Fragments/CardProduct";
import { Button } from "../Component/Element/Button/Button";

const listProducts = [
  {
    id: 1,
    title: "Sepatu Baru",
    image: "public/shoes.jpeg",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  },
  {
    id: 2,
    title: "Baju Baru",
    image: "public/g5.jpg",
    body: "Højlund kom til FCK som ungdomsspiller, hvor han spillede på bl.a. klubbens U/19-hold. Han debuterede som ungdomsspiller som 17-årig for FCK's førstehold den 25. oktober 2020 i en kamp mod AGF, hvor han blev skiftet ind i overtiden.[2] I december 2020 forlængede han kontrakten med FCK til 31. december 2023.[3] Efter sommerpausen 2021 blev han rykket op i førsteholdstruppen.",
  },
  {
    id: 3,
    title: "TV Baru",
    image: "public/g5.jpg",
    body: "Den 28. januar 2022 blev det offentliggjort, at Højlund havde indgået kontrakt med Sturm Graz til 2026. Højlund debuterede for Sturm Graz den 12. februar 2022 og scorede to mål i debuten",
  },
];

export const Products = () => {
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="bg-blue-700 ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center items-start flex-row mt-10">
        {listProducts.map((list) => (
          <CardProduct key={list.id}>
            <CardProduct.Header image={list.image}></CardProduct.Header>
            <CardProduct.Body title={list.title}>{list.body}</CardProduct.Body>
            <CardProduct.Footer></CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
    </>
  );
};
