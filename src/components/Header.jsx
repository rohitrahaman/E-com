import React from "react";

function Header() {
  return (
    <header className="bg-black">
      <div className="container max-w-7xl mx-auto px-5 py-2">
        <div className="flex justify-between">
          <div className="">
            <img className="w-16 h-10" src="./img/sport.jpg" alt="" />
          </div>
          <div>
            <nav className="text-white font-semibold list-none gap-10 flex">
              <li className="relative">
                <a href="#">Products</a>
                <span className="absolute bottom-0 left-0 w-1/3 h-1 border-b-2 border-yellow-500 border-solid"></span>
              </li>
              <li>
                <a href="#">Track Order</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About US</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
