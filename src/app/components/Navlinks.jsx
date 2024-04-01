import Link from "next/link";
import React from "react";

const navone = [
  {
    id: 1,
    url: "jangari",
    text: "Jangari",
  },
  {
    id: 2,
    url: "drama",
    text: "Drama",
  },
  {
    id: 3,
    url: "komediya",
    text: "Komediya",
  },
  {
    id: 4,
    url: "melodrama",
    text: "Melodrama",
  },
  {
    id: 5,
    url: "sarguzasht",
    text: "Sarguzasht",
  },
];
const navtwo = [
  {
    id: 6,
    url: "qorqinchli",
    text: "Qo'rqinchli",
  },
  {
    id: 7,
    url: "tarixiy",
    text: "Tarixiy",
  },
  {
    id: 8,
    url: "klassika",
    text: "Klassika",
  },
  {
    id: 9,
    url: "fantastika",
    text: "Fantastika",
  },
  {
    id: 10,
    url: "hayotiy",
    text: "Hayotiy",
  },
];

function Navlinks() {
  return (
    <>
      <div className="flex md:flex-row gap-[10px] flex-col">
        {navone.map((n) => {
          return (
            <li key={n.id}>
              <Link
                href={`/filt/${n.url}`}
                className=" text-white btn btn-sm btn-secondary"
              >
                {n.text}
              </Link>
            </li>
          );
        })}
      </div>
      <div className="flex md:flex-row gap-[10px] flex-col mt-[10px] md:mt-0">
        {navtwo.map((n) => {
          return (
            <li key={n.id}>
              <Link
                href={`/filt/${n.url}`}
                className=" text-white btn-sm  btn btn-secondary "
              >
                {n.text}
              </Link>
            </li>
          );
        })}
      </div>
    </>
  );
}

export default Navlinks;
