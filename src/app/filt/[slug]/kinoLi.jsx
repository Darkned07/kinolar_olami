"use client";

import { useEffect, useState } from "react";
import KinoSlug from "./KinoSlug";
import KinoId from "./KinoId";

function kinoLi({ slug }) {
  const [docs, setDocs] = useState(null);
  const loc = JSON.parse(localStorage.getItem("kino"));

  useEffect(() => {
    const idFilt = (id) => {
      const fil = loc.filter((f) => f.id === id);
      setDocs(fil);
    };
    const slugFilt = (s) => {
      let lv = loc;
      const fils = lv.filter((m) => {
        return m.janri.includes(s);
      });
      console.log("filter", fils);
    };
    if (slug.length > 12) {
      idFilt(slug);
    } else {
      slugFilt(slug);
    }
  }, []);

  return (
    <>{slug.length > 12 ? <KinoId doc={docs} /> : <KinoSlug doc={docs} />}</>
  );
}

export default kinoLi;
