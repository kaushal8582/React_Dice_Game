import React from "react";

export const Home = ({toggle}) => {
  return (
    <div className="bg-white w-full h-screen flex items-center justify-center gap-9">
      <div className="w-[650px] h-[522px]">
        <img src="../../public/dicebg.png" className="w-full h-full" alt="" />
      </div>
      <div className="flex flex-col items-end justify-end">
        <h1 className="text-6xl font-bold">DICE GAME</h1>
        <button className="py-3 px-7 border-2 mt-2 text-white rounded-full bg-black  hover:bg-transparent hover:border-2 hover:border-orange-400 hover:text-black hover:transition-all "
          onClick={toggle}
        >
          Play Now
        </button>
      </div>
    </div>
  );
};
