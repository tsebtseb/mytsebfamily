"use client";
import EatGin from "/public/eatgin.gif";
import Image from "next/image";
import SpinCircle from "../components/SpinCircle";
export default function GinKhao() {
  return (
    <div className="w-full h-full flex flex-col p-5">
        <div className="flex flex-row gap-x-2 items-center">
          <div className="w-20 h-20 overflow-hidden">
          <Image src={EatGin} alt="" width={350} height={350} />
          </div>
          <h1 className="text-4xl font-bold">Dinner Time 🥘</h1>
        </div>
        <p className="text-muted-foreground my-2">กินอะไรดี?</p>
        <div className="flex flex-col">
          <div className="flex flex-row justify-center">
            <h1 className="text-xl font-semibold">Dinner Time 🥘</h1>
          </div>
          <SpinCircle/>
          
          <div className="flex flex-row justify-center">
            <h1 className="text-xl font-semibold">Dinner Time 🥘</h1>
          </div>
          <SpinCircle/>
        </div>
    </div>
  );
}
