/* eslint-disable react/prop-types */
import React from "react";

function SideContainer({ children }) {
  return (
    <div className="print:hidden">
      <style>
        {`
				.custom-scrollbar {
            scrollbar-color: #888 #f1f1f1;
			}`}
      </style>
      <div
        className="custom-scrollbar h-[29.7cm] w-full min-w-72 max-w-lg overflow-auto py-10 pl-4"
        style={{ direction: "rtl" }}
      >
        <div
          className="flex w-full max-w-lg flex-col items-center gap-8 "
          style={{ direction: "ltr" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export { SideContainer };
