import React from "react";
import Navbar from "./component/Navbar";
import Caoursel from "./component/Caoursel";
import bg from './Assets/bg.jpg'
import Image from "next/image";


export default function page() {
  return (
    <>
      <div className="h-screen w-screen relative overflow-hidden">
        <Navbar />

        <div className="h-[70%] w-[75%] bg-gray-950 rounded-[21px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] [box-shadow:15px_15px_10px_10px_rgba(0,0,0,1)]">
          <div className="grid [grid-template-columns:30%_70%] h-full w-full rounded-[21px]">
            <div className="h-full text-white relative z-[1] before:absolute before:z-[-1] before:left-0 before:[border-radius:21px_0px_0px_21px] before:top-0 before:h-[100%] before:w-0 before:bg-red-900 before:transition-all before:duration-500 before:ease-in-out before:hover:w-[100%]">
              <div className="flex justify-center items-center h-full w-full">
                <div>
              <h1 className="text-2xl text-center">Welcome To</h1>
              <h1 className="text-xl font-bold text-center">CareSync</h1>
              <h1 className="text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                eveniet natus tempore eius numquam?4\
              </h1>
              </div>
              </div>
            </div>
            <div className="caoursel">
              <Caoursel/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
