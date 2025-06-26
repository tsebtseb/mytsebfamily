"use client";
import { Folder, EllipsisVertical, LayoutDashboard, GalleryVertical, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface galleryMenuProps {
  name: string;
  href: string;
  imageref: string;
  description: string;
  folderref: string;
}

const galleryMenu: galleryMenuProps[] = [
  {
    name: "Daddy",
    href: "/gallery/dada",
    imageref: "/dadavatar.jpg",
    description: "c;ksdkv;kf",
    folderref: "/dadfolder.png",
  },
  {
    name: "Mommy",
    href: "/gallery/mama",
    imageref: "/momavatar.jpg",
    description: "c;ksdkv;kf",
    folderref: "/momfolder.png",
  },
  {
    name: "Timer",
    href: "/gallery/bro",
    imageref: "/timeravatar.jpg",
    description: "c;ksdkv;kf",
    folderref: "/timerfolder.png",
  },
  {
    name: "Bestเอง",
    href: "/gallery/tseb",
    imageref: "/bestavatar.jpg",
    description: "c;ksdkv;kf",
    folderref: "/bestfolder.png",
  },
];

export default function Gallery() {
  const [isGridView, setIsGridView] = useState<boolean>(false);
  return (
    <div className="w-full h-full flex flex-col p-5">
      <div className="flex items-center gap-x-2 mb-6 px-4">
        <Folder />
        <h1>My Family</h1>
      </div>
      <div className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex-1 w-full bg-white rounded-lg shadow-lg p-5">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <div className="w-14 h-14 overflow-hidden">
                <Image src="/picture.png" alt="" width={400} height={400} />
              </div>
              <h1 className="text-4xl font-bold">Gallery</h1>
            </div>
            <Button variant="ghost"  onClick={() => setIsGridView(!isGridView)}>
              {isGridView? <LayoutDashboard />: <GalleryVertical />}
            </Button>
          </div>
          <div className="p-6 h-full w-full">
            <div className={`${
              isGridView? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2" : "flex flex-col gap-4"}`}>
              {galleryMenu.map((item, index) => (
                <Link href={galleryMenu[index].href} key={index}>
                  {isGridView? (<div className="bg-white border border-zinc-100 rounded-lg shadow-lg p-4 flex flex-col hover:bg-zinc-50 active:bg-zinc-50 transition-colors">
                    <div className="flex flex-row justify-between">
                      <div className="w-20 h-20 overflow-hidden rounded-full border border-zinc-200/50">
                        <Image
                          src={galleryMenu[index].imageref}
                          alt=""
                          width={400}
                          height={400}
                        />
                      </div>
                      <EllipsisVertical className="text-muted-foreground" />
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                      <h2 className="text-lg font-semibold">{galleryMenu[index].name}</h2>
                      <p className="text-muted-foreground">{galleryMenu[index].description}</p>
                    </div>
                  </div>) :(<div className="flex flex-row items-center justify-between py-4 px-2 hover:bg-zinc-50  active:bg-zinc-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10">
                          <Image
                            src={item.folderref}
                            alt={item.name}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <h2 className="text-lg font-medium">{item.name}</h2>
                      </div>
                      <ChevronRight className="text-muted-foreground" />
                    </div>)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
