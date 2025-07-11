"use client";
import Image from "next/image";
import { daddySpecial, mommySpecial, timerSpecial } from "@/lib/familydata";
import { useState, useEffect } from "react";
import type { SpecialList } from "@/lib/familydata";
import { usePathname, useRouter } from "next/navigation";
import type { FamilySource } from "./FamilyPlayModal";

export default function SpecialListAdd() {
  const pathname = usePathname();
  const router = useRouter();

  const [source, setSource] = useState<FamilySource | undefined>(undefined);

  useEffect(() => {
    if (pathname === "/gallery/dada/special") {
      setSource("dadsp");
    } else if (pathname === "/gallery/mama/special") {
      setSource("momsp");
    } else if (pathname === "/gallery/bro/special") {
      setSource("timersp");
    } else {
      setSource(undefined);
    }
  }, [pathname]);

  let currentData: SpecialList[] = [];
  if (pathname.startsWith("/gallery/dada/special")) {
    currentData = daddySpecial;
  } else if (pathname.startsWith("/gallery/mama/special")) {
    currentData = mommySpecial;
  } else if (pathname.startsWith("/gallery/bro/special")) {
    currentData = timerSpecial;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
        {/* list Item */}
        {currentData.map((item, index) => {
          const handleRead = () => {
            router.push(
              `/spdetail?id=${item.id}&title=${encodeURIComponent(
                item.title
              )}&source=${source}`
            );
          };
          return (
            <div
            className="group cursor-pointer flex flex-col"
            onClick={handleRead}
            key={index}
          >
            <div className="relative w-full aspect-[3/2] overflow-hidden rounded-md">
              <Image
                src={item.folderRef}
                alt=""
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
          
              {/* small screen label */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center block md:hidden pb-2">
                <div className="rounded-3xl px-3 py-1 bg-warm-pink/80 backdrop-blur">
                  <h3 className="text-white text-sm font-semibold text-center">{item.title}</h3>
                </div>
              </div>
            </div>
          
            {/* medium and up label */}
            <div className="hidden md:block mt-2 text-center text-base font-semibold transition-colors duration-300 group-hover:text-warm-pink">
              {item.title}
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}
