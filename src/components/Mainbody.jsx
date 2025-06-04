import React from "react";
import Filter from "./Filter";
import Shoes from "./Shoes";

function Mainbody() {
  return (
    <div className="flex gap-4">
      <Filter />
      <Shoes />
    </div>
  );
}

export default Mainbody;
