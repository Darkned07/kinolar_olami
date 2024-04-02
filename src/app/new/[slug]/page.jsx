import React from "react";
import KinoFil from "./KinoFil";

function page({ params }) {
  return (
    <main className="max-container">
      <KinoFil slug={params.slug} />
    </main>
  );
}

export default page;
