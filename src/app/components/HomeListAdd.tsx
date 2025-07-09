"use client";
import Image from "next/image";
import { familyData } from "@/lib/familydata";
import { useState } from "react";
import type { FamilyList } from "@/lib/familydata";
import FamilyPlayModal from "./FamilyPlayModal";

const categoryColors: {
  [key: string]: { borderColor: string; textColor: string };
} = {
  family: { borderColor: "border-warm-pink", textColor: "text-warm-pink" },
  daddy: { borderColor: "border-[#4ade80]", textColor: "text-[#4ade80]" },
  mommy: { borderColor: "border-[#f472b6]", textColor: "text-[#f472b6]" },
  timer: { borderColor: "border-[#fb923c]", textColor: "text-[#fb923c]" },
  best: { borderColor: "border-[#67e8f9]", textColor: "text-[#67e8f9]" },
};

export default function HomeListAdd() {
  const [selectedItem, setSelectedItem] = useState<FamilyList | null>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleOpenModal = (item: FamilyList) => {
    setSelectedItem(item);
    setOpen(true);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
        {/* list Item */}
        {familyData.map((item) => {
          const categoryStyle = categoryColors[item.for.toLowerCase()] || {
            borderColor: "border-warm-pink",
            textColor: "text-warm-pink",
          };
          return (
            <div
              key={item.id}
              className="relative h-50 group"
              onClick={() => handleOpenModal(item)}
            >
              <Image
                src={item.imageString}
                alt=""
                width={600}
                height={400}
                className="rounded-sm absolute w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-zinc-600/90 to-transparent">
                <h3 className="text-white font-bold">{item.title}</h3>
                <button
                  className={`border ${categoryStyle.borderColor} ${categoryStyle.textColor} rounded-3xl text-sm px-2`}
                >
                  {item.for}
                </button>
              </div>
              <div className="h-60 relative z-10 w-full transform transition duration-500 group-hover:scale-125 opacity-0 group-hover:opacity-100 group-active:scale-125 group-active:opacity-100">
                {/* if hover-overlay to overlap image */}
                <Image
                  src={item.imageString}
                  alt=""
                  width={800}
                  height={800}
                  className="absolute w-full h-full -z-10 rounded-lg object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-zinc-600/90 to-transparent">
                  <h3 className="text-white font-bold">{item.title}</h3>
                  <button
                    className={`border ${categoryStyle.borderColor} ${categoryStyle.textColor} rounded-3xl text-sm px-2`}
                  >
                    {item.for}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {selectedItem ? (
          <FamilyPlayModal
            id={selectedItem.id}
            title={selectedItem.title}
            for={selectedItem.for}
            date={selectedItem.date ?? undefined}
            description={selectedItem?.description}
            imageString={selectedItem?.imageString}
            imgRef={selectedItem?.imgRef ?? undefined}
            link={selectedItem?.link ?? undefined}
            source="home"
            state={isOpen}
            changeState={setOpen}
          />
        ) : null}
      </div>
    </div>
  );
}
