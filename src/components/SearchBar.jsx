import { ArrowDown, Search, ShoppingCart, X } from "lucide-react";
import React from "react";

function SearchBar() {
  return (
    <div className="flex justify-center items-center px-5 py-10 gap-4">
      <div className="w-2/3 border border-gray-400 flex justify-between px-2 py-2 rounded-md">
        <div className="flex gap-1">
          <span>Shoes</span>
          <ArrowDown className="py-1 px-1" />
        </div>
        <input type="text" placeholder="Search for shoes....." />
        <div className="flex gap-2">
          <div className="">
            <X />
          </div>
          <div>
            <Search />
          </div>
        </div>
      </div>
      <div className="flex border border-black bg-yellow-500 px-2 py-2 rounded-md gap-2">
        <ShoppingCart />
        <button className="font-semibold">View Cart</button>
      </div>
    </div>
  );
}

export default SearchBar;
