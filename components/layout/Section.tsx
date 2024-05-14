import React from "react";

const Section = ({ name }: { name: string }) => {
  return (
    <button className="inline-flex h-16 cursor-none w-[160px] text-lg animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#49b1e1,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {name}
    </button>
  );
};

export default Section;
