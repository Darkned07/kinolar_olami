import React from "react";
import Kino from "./kinoLi";

export const metadata = {
  title: "kinolar ",
};
function Filt({ params }) {
  return (
    <div className="max-container">
      <Kino slug={params.slug} />
    </div>
  );
}

export default Filt;
