"use client";

import { Category } from "@prisma/client";

interface CategoriesProps {
  data: Category[];
}

export const Categories = ({ data }: CategoriesProps) => {
  return (
    <div className="w-full mt-[3.5rem] ml-3 overflow-x-auto flex gap-x-2 p-1">
      <button className="flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md hover:opacity-75 transition bg-second-color">Newest</button>
      {data.map((item) => (
        <button key={item.id} className="flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md hover:opacity-75 transition bg-second-color">
          {item.name}
        </button>
      ))}
    </div>
  );
};
