import React from "react";
import "../App.css";

function Herosection() {
  return (
    <>
      <div
        style={{
          background: "radial-gradient(circle , #101C5C, transparent)",
          width: "900px",
          height: "250px",
          borderRadius: "50%",
         position:"fixed",
          overflow: "hidden",
          zIndex: "0",
          top:"-120px",
          right:"190px"
        }}
      ></div>
      <div className='h-full bg-[url("757355040aa84c8180bf8a118508ec5d.png")] bg-cover flex flex-col gap-10 justify-center items-center'>
        <div className="w-[39%] flex flex-col gap-4">
          <div className="text-white text-4xl">
            Empowering Lives Through Innovative{" "}
            <span className="font-bold border-b-[#6881FF] border-b-4 pt-4 ">
              AI
            </span>{" "}
            Technologies
          </div>
          <div className="text-[#C0C2CC]">
            Finding new horizons for visionaries to accelerate their innovation
            and progress
          </div>
          <div className="flex gap-4">
            <div>
              <button className="pt-2 pb-2 pl-6 pr-6 bg-[#6A35FF] text-white font-bold  text-sm rounded-lg">
                Explore Our Services
              </button>
            </div>
            <div>
              <button className="pt-1 pb-1 pl-5 pr-5 rounded-lg text-white border-[1px] border-[#6881FF]">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="text-transparent ">
        <span class="text-gradient from-[#1C1C1C] from-100%">From Ideas to</span> 
        <span class=" text-white">  Software Solutions 💡✨ From Ideas to Software Solutions 🌟✨ </span>
        <span className="text-gradient to-[#1C1C1C] to-100%">From Ideas to</span>
        </div>
      </div>
    </>
  );
}

export default Herosection;
