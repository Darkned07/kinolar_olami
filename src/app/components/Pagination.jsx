import React from "react";

function Pagination() {
  return (
    <div className="flex place-content-center mt-[20px]">
      <div className="join">
        <button className="join-item btn">«</button>
        <button className="join-item btn">Page 1</button>
        <button className="join-item btn">»</button>
      </div>
    </div>
  );
}

export default Pagination;
