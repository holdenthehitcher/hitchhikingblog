import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import Link from "next/link";

export default function ArticlesFeatured() {
  const articles = [
    {
      header: "Hitchhiking",
      image: "blogmaterials/categories/hitchhiking_category.JPG",
      link: "/hitchhiking",
    },
    {
      header: "Volunteering",
      image: "blogmaterials/categories/volunteering_category.JPG",
      link: "/volunteering",
    },
    {
      header: "Culinary",
      image: "blogmaterials/categories/culinary_category.JPG",
      link: "/culinary",
    },
  ];

  return (
    <div className="row">
      
    </div>
  );
}
