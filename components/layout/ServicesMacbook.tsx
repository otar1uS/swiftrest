import React from "react";
import { MacbookScroll } from "../ui/macbook-scroll";
import Link from "next/link";

export function ServicesMacbook() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={<span className="text-[40px]">SERVICES</span>}
        gridElements={
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md">
              Item 1
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md">
              Item 2
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md">
              Item 3
            </div>
            {/* Add more grid items as needed */}
          </div>
        }
        showGradient={false}
      />
    </div>
  );
}
