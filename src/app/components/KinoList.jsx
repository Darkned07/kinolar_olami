"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useCollection } from "../hooks/useCollection";

function KinoList() {
  const { document } = useCollection();
  useEffect(() => {
    localStorage.setItem("kino", JSON.stringify(document));
  }, [document]);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="md:text-4xl text-2xl text-start">Kinolar</h2>
      <hr className="w-full" />
      <ul className="flex  gap-[20px] flex-wrap gap-x-9 gap-y-5 place-content-center ">
        {document &&
          document.map((doc) => {
            return (
              <li
                key={doc.id}
                className="rounded-xl bg-base-100 shadow-2xl max-w-[350px] flex flex-col px-[15px] py-[10px] items-center"
              >
                <Link href={`/filt/${doc.id}`}>
                  <img
                    className="rounded-md mt-[20px]"
                    src={doc.image}
                    alt={doc.name}
                  />
                  <div className="py-[20px]">
                    <h2 className="text-secondary text-center text-xl">
                      {doc.name}
                    </h2>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default KinoList;
