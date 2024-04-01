"use client";
import Link from "next/link";
import React from "react";
import { useCollection } from "../hooks/useCollection";

const newKino = [
  {
    id: 1,
    img: "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
  },
  {
    id: 2,
    img: "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
  },
  {
    id: 3,
    img: "https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
  },
  {
    id: 4,
    img: "https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg",
  },
];

function CarKino() {
  const { document } = useCollection();
  return (
    <div className="my-[20px]">
      <div className="carousel  rounded-box w-full">
        {document &&
          document.map((i) => {
            return (
              <div key={i.id} className="carousel-item w-full ">
                <Link className="w-full " href={`/filt/${i.id}`}>
                  <img
                    src={i.image}
                    className="w-full h-[300px]  md:h-[400px]  rounded-lg"
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CarKino;
