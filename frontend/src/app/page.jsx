"use client";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {

  const handleClick = () => {
    
  }

  return <>
      <Navbar/>
      <div className="flex justify-center items-center p-[40px]">
          <Button
           className="text-black font-normal text-l bg-gray-200 py-2 px-4 rounded-l" 
           onClick={() => handleClick()} 
          >
            Apply
          </Button>
      </div>
  </>;
}
