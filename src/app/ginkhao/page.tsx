"use client";
import EatGin from "/public/eatgin.gif";
import Image from "next/image";
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
    </div>
  );
}
