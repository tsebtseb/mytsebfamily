"use client";
import { Button } from "@/components/ui/button";
import { CirclePlay } from "lucide-react";
export default function FamilyVideo() {
  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
      <video
        poster="/bestbg.jpg"
        autoPlay
        muted
        loop
        src="/video/frombest.mp4"
        preload="auto"
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-0 brightness-[60%]"
      ></video>
      <div className="absolute w-[90%] lg:w-[40%] mx-auto mb-6">
        <h1 className="text-white text-2xl md:test-5xl lg:text-6xl font-bold">
          My Family
        </h1>
        <p className="text-white text-lg mt-4 line-clamp-3">ครอบครัวของหนู ขอบคุณที่เลี้ยงหนูมาอย่างดีค่ะ</p>
        <div className="flex gap-x-3 mt-3">
          <a href="https://youtu.be/Ecz4aCA36tk">
            <Button className="bg-white text-black px-6 py-5 hover:text-white hover:bg-warm-pink active:bg-warm-pink active:text-white">
              <CirclePlay />
              See more
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
