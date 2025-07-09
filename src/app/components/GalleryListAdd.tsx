"use client";
import Image from "next/image";
import { daddyData, mommyData, timerData, tsebData } from "@/lib/familydata";
import { useState, useEffect } from "react";
import type { FamilyList } from "@/lib/familydata";
import FamilyPlayModal from "./FamilyPlayModal";
import { usePathname, useRouter } from "next/navigation";
import type { FamilySource } from "./FamilyPlayModal";

interface speFolderProps {
  currentPath: string;
  imageref: string;
}

const specialFolder: speFolderProps[] = [
  { 
    currentPath: "/gallery/dada", 
    imageref: "/dadfolder.png" 
 },
  {
    currentPath: "/gallery/mama",
    imageref: "/momfolder.png",
  },
  {
    currentPath: "/gallery/bro",
    imageref: "/timerfolder.png",
  },
];

const categoryColors: {
  [key: string]: { borderColor: string; textColor: string };
} = {
  family: { borderColor: "border-warm-pink", textColor: "text-warm-pink" },
  daddy: { borderColor: "border-[#4ade80]", textColor: "text-[#4ade80]" },
  mommy: { borderColor: "border-[#f472b6]", textColor: "text-[#f472b6]" },
  timer: { borderColor: "border-[#fb923c]", textColor: "text-[#fb923c]" },
  best: { borderColor: "border-[#67e8f9]", textColor: "text-[#67e8f9]" },
};

export default function GalleryListAdd() {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<FamilyList | null>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleOpenModal = (item: FamilyList) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const [source, setSource] = useState<FamilySource | undefined>(undefined);

  useEffect(() => {
    if (pathname ==="/gallery/dada") {
      setSource("dada");
    } else if (pathname ==="/gallery/mama") {
      setSource("mama");
    } else if (pathname ==="/gallery/bro") {
      setSource("bro");
    } else if (pathname==="/gallery/tseb") {
      setSource("tseb");
    } else {
      setSource(undefined);
    }
  }, [pathname]);

  let currentData: FamilyList[] = [];
  if (pathname.startsWith("/gallery/dada")) {
    currentData = daddyData;
  } else if (pathname.startsWith("/gallery/mama")) {
    currentData = mommyData;
  } else if (pathname.startsWith("/gallery/bro")) {
    currentData = timerData;
  } else if (pathname.startsWith("/gallery/tseb")) {
    currentData = tsebData;
  }

  const matchingSpecialFolder = specialFolder.find(folder => folder.currentPath === pathname);


  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
        {/* special folder */}
      {matchingSpecialFolder&&( 
        <div
          className="relative h-50 group"
          onClick={() => router.push(`${matchingSpecialFolder.currentPath}/special`)}
        >
          <Image
            src={matchingSpecialFolder.imageref}
            alt=""
            width={600}
            height={400}
            className="rounded-sm absolute w-full h-full object-contain"
          />
          <div className="h-60 relative z-10 w-full transform transition duration-500 group-hover:scale-125 opacity-0 group-hover:opacity-100 group-active:scale-125 group-active:opacity-100">
            {/* if hover-overlay to overlap image */}
            <Image
              src={matchingSpecialFolder.imageref}
              alt=""
              fill
              className="absolute w-full h-full -z-10 rounded-lg object-contain"
            />
            <div className="absolute left-0 right-0 flex items-center justify-center">
              <div className="rounded-3xl p-2  bg-warm-pink/80">
                <h3 className="text-white font-bold">Special!</h3>
              </div>
            </div>
          </div>
        </div>)}

        {/* list Item */}
        {currentData.map((item) => {
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
        {selectedItem&& source ? (
          <FamilyPlayModal
            id={selectedItem.id}
            title={selectedItem.title}
            for={selectedItem.for}
            date={selectedItem.date ?? undefined}
            description={selectedItem?.description}
            imageString={selectedItem?.imageString}
            imgRef={selectedItem?.imgRef ?? undefined}
            link={selectedItem?.link ?? undefined}
            source={source}
            state={isOpen}
            changeState={setOpen}
          />
        ) : null}
      </div>
    </div>
  );
}
