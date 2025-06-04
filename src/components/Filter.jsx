import { ArrowUpToLine, FunnelX, X } from "lucide-react";
import React from "react";

function Filter() {
  return (
    <div className="border w-1/4 ml-5">
      <div className="flex gap-2  border border-b-gray-500">
        <FunnelX />
        <span className="text-xl">FILTERS</span>
      </div>
      <div className="border border-b-gray-500">
        <div className="flex justify-between">
          <span className="font-medium">Applied Filter</span>
          <p className="text-xs border border-b-black">clear all</p>
        </div>
        <div className=" flex gap-2 text-xs py-3">
          <span className="bg-gray-500 border rounded-md">All</span>
          <span className="bg-gray-500 border rounded-md">Running shoes</span>
          <span className="bg-gray-500 border rounded-md">Red</span>
        </div>
      </div>
      <div className="flex justify-between">
        <span>Category</span>
        <ArrowUpToLine className="px-1 py-1" />
      </div>
      <div className="flex flex-col">
        <label className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="text-gray-700">All</span>
        </label>
        <label className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="text-gray-700">Running Shoes</span>
        </label>
        <label className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="text-gray-700">Category 3</span>
        </label>
        <label className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="text-gray-700">Category 4</span>
        </label>
      </div>
      <div className="flex justify-between mt-5">
        <span>Color</span>
        <ArrowUpToLine className="px-1 py-1" />
      </div>
      <div className="flex flex-wrap gap-2 mt-5">
        <div className="w-6 h-6 rounded-full bg-black border border-gray-300"></div>
        <div className="w-6 h-6 rounded-full bg-white border border-gray-300"></div>
        <div className="w-6 h-6 rounded-full bg-red-500 border border-gray-300"></div>
        <div className="w-6 h-6 rounded-full bg-green-500 border border-gray-300"></div>
        <div className="w-6 h-6 rounded-full bg-blue-500 border border-gray-300"></div>
        <div className="w-6 h-6 rounded-full bg-yellow-500 border border-gray-300"></div>
        <div className="w-6 h-6 rounded-full bg-cyan-500 border border-gray-300"></div>
        <div className="w-6 h-6 rounded-full bg-pink-500 border border-gray-300"></div>
        <div className="w-6 h-6 rounded-full bg-gray-500 border border-gray-300"></div>
        <div className="w-6 h-6 rounded-full bg-neutral-800 border border-gray-300"></div>
      </div>
    </div>
  );
}

export default Filter;
