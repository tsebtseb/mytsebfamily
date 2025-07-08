"use client";
import EatGin from "/public/eatgin.gif";
import Image from "next/image";
import SpinCircle from "../components/SpinCircle";
export default function GinKhao() {
  return (
    <div className="w-full h-full flex flex-col p-5 overflow-y-scroll">
      <div className="flex flex-row gap-x-2 items-center">
        <div className="w-20 h-20 overflow-hidden">
          <Image src={EatGin} alt="" width={350} height={350} />
        </div>
        <h1 className="text-4xl font-bold">Dinner Time 🍽️</h1>
      </div>
      <p className="text-muted-foreground my-2">
        กินอะไรดี? ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧
      </p>
      <div className="flex flex-col gap-y-2 items-center">
        <h1 className="text-xl font-semibold">🥘 Dinner Time (๑ᵔ⤙ᵔ๑)</h1>
        <p className="text-muted-foreground">หมวดหมู่อาหาร</p>
        <SpinCircle dataName="foodTypeData" />

        <h1 className="text-xl font-semibold">👨‍🍳 Restaurants</h1>
        <p className="text-muted-foreground">ลิสต์ร้านอาหาร</p>

        <SpinCircle dataName="restaurantData" />

        <h1 className="text-xl font-semibold">💖 Mommy's Pick!</h1>
        <div className="lg:my-20 md:my-15 sm:my-4">
          <SpinCircle dataName="mamaOrderData" />
        </div>
      </div>
    </div>
  );
}
