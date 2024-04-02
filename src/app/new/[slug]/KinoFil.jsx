"use client";

import { useEffect, useState } from "react";
import KinoMult from "./KinoMult";
import KinoNew from "./KinoNew";

function KinoFil({ slug }) {
  const [doc, setDoc] = useState(null);
  const [size, setSize] = useState();

  useEffect(() => {
    const loc = JSON.parse(localStorage.getItem("kino"));
    const time = new Date().toDateString();
    const newMult = (m) => {
      const filt = loc;
      const filtMult = filt.filter((v) => {
        return v.janri.includes(m);
      });
      setDoc(filtMult);
      setSize(filtMult.length);
    };
    const newPrem = (n) => {
      const filt = loc;
      const filtNewPrem = filt.filter((g) => {
        return g.vaqt == n;
      });
      setDoc(filtNewPrem);
      setSize(filtNewPrem.length);
    };

    if (slug == "multfilmlar") {
      newMult(slug);
    } else {
      newPrem(time);
    }
  }, [slug]);
  return slug == "multfilmlar" ? (
    <KinoMult doc={doc} size={size} />
  ) : (
    <KinoNew doc={doc} size={size} />
  );
}

export default KinoFil;
