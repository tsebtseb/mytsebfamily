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
              className="relative h-50 group"
              onClick={handleRead}
              key={index}
            >
              <Image
                src={item.folderRef}
                alt=""
                width={600}
                height={400}
                className="rounded-sm absolute w-full h-full object-contain"
              />

              <div className="h-60 relative z-10 w-full transform transition duration-500 group-hover:scale-125 opacity-0 group-hover:opacity-100 group-active:scale-125 group-active:opacity-100">
                {/* if hover-overlay to overlap image */}
                <Image
                  src={item.folderRef}
                  alt=""
                  fill
                  className="absolute w-full h-full -z-10 rounded-lg object-contain"
                />
              </div>

              <div className="mt-2 text-center text-base font-semibold transition-colors duration-300 group-hover:text-warm-pink">
                {item.title}
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
