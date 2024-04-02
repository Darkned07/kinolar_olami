"use client";

import { useEffect, useState } from "react";
import KinoSlug from "./KinoSlug";
import KinoId from "./KinoId";

function kinoLi({ slug }) {
  const [docs, setDocs] = useState(null);
  const [size, setSize] = useState();
  const loc = JSON.parse(localStorage.getItem("kino"));

  useEffect(() => {
    const idFilt = (id) => {
      const fil = loc.filter((f) => f.id === id);
      setDocs(fil);
      setSize(fil.length);
    };
    const slugFilt = (s) => {
      let lv = loc;
      const fils = lv.filter((m) => {
        return m.janri.includes(s);
      });
      setSize(fils.length);
      setDocs(fils);
    };
    if (slug.length > 12) {
      idFilt(slug);
    } else {
      slugFilt(slug);
    }
  }, []);

  return (
    <>
      {slug.length > 12 ? (
        <KinoId doc={docs} size={size} />
      ) : (
        <KinoSlug doc={docs} size={size} />
      )}
    </>
  );
}

export default kinoLi;
