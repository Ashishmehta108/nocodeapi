"use client";

import { useEffect, useRef, useState } from "react";
import { ModeToggle } from "./toggle";
export default function MobileSidebar() {
  const [isMounted, setIsMounted] = useState(false);
  const MakeServer = async () => {};
  const GetCode = async () => {};
  const sidebarref = useRef(null);
  useEffect(() => {
    setIsMounted(true);
  });
  return (
    <div className="md:w-[70px]   sticky  h-[500px] items-center justify-center bg-white border-r border:neutral-100 border-[1px] flex flex-col justify-between  items-start space-y-5  p-2  transition-all ease-in-out duration-500 dark:bg-neutral-900 dark:text-neutral-300  text-neutral-600  mx-4 mt-8  rounded-md z-10 ">
      <div className="flex  flex-col space-y-1 items-center justify-center">
        <div className="h-12 flex items-center  justify-center ">
          <div className=" w-12 h-12 text-neutral-500 dark:text-neutral-300/90 dark:hover:bg-neutral-800/90 transition-all duration-300 hover:bg-neutral-100 flex items-center rounded-xl justify-center relative  ">
            <span
              className="material-symbols-outlined  cursor-pointer"
              onClick={MakeServer}
            >
              dns
            </span>
          </div>
        </div>
        <div className="h-12 flex items-center  justify-center ">
          <div
            className=" w-12 h-12 text-neutral-500 dark:text-neutral-300/90  dark:hover:bg-neutral-800/90 transitio
          n-all duration-300 hover:bg-neutral-100 flex items-center rounded-xl justify-center relative"
          >
            <span
              className="material-symbols-outlined  cursor-pointer"
              onClick={GetCode}
            >
              Code
            </span>
          </div>
        </div>
        <div className="flex items-center  justify-center ">
          <div className=" w-12 h-12  transition-all duration-300 flex items-center rounded-xl justify-center relative  text-neutral-500 dark:hover:bg-neutral-800/90 hover:bg-neutral-100 dark:text-neutral-300/90   flex items-center rounded-xl justify-center">
            <ModeToggle className="bg-transparent w-full h-full " />
          </div>
        </div>
      </div>
    </div>
  );
}
