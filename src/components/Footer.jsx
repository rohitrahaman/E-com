import React from "react";

function Footer() {
  return (
    <div className="px-10 py-10">
      <div className="flex justify-between items-center ">
        <p className="text-sm text-gray-600">Page 1 of 3</p>
        <div className="flex gap-2">
          <button variant="outline">&lt;</button>
          <button className="bg-black text-white">1</button>
          <button variant="outline">2</button>
          <button variant="outline">3</button>
          <button variant="outline">&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
