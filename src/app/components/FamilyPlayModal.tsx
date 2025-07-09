"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { X, BookOpenText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import type { FamilyList } from "@/lib/familydata";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type FamilySource = "home" | "dada" | "mama" | "bro" | "tseb";

type familycardprops = FamilyList & {
  source: FamilySource;
  state: boolean;
  changeState: (newState: boolean) => void;
};

const categoryColors: {
  [key: string]: { borderColor: string; textColor: string };
} = {
  family: { borderColor: "border-warm-pink", textColor: "text-warm-pink" },
  daddy: { borderColor: "border-[#22c55e]", textColor: "text-[#22c55e]" },
  mommy: { borderColor: "border-[#f472b6]", textColor: "text-[#f472b6]" },
  timer: { borderColor: "border-[#fb923c]", textColor: "text-[#fb923c]" },
  best: { borderColor: "border-[#0ea5e9]", textColor: "text-[#0ea5e9]" },
};

export default function FamilyPlayModal({
  id,
  title,
  for: category,
  date,
  description,
  imageString,
  imgRef,
  link,
  source,
  state,
  changeState,
}: familycardprops) {
  const router = useRouter();

  const categoryStyle = categoryColors[category.toLowerCase()] || {
    borderColor: "border-warm-pink",
    textColor: "text-warm-pink",
  };

  const handleReadMore = () => {
    router.push(
      `/details?id=${id}&title=${encodeURIComponent(title)}&source=${source}`
    );
  };

  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="border border-gray-300 max-w-screen bg-zinc-200 w-full max-h-[100dvh] flex flex-col">
        <DialogClose className="absolute top-3 right-3 p-2 rounded-full bg-warm-pink hover:bg-rose-200 z-50">
          <X className="w-4 h-4 text-white" />
        </DialogClose>
        <div className="flex-1 overflow-y-auto overflow-x-auto">
          <DialogHeader>
            <DialogTitle className="mt-4">{title}</DialogTitle>
            <DialogDescription className="flex flex-row gap-x-2 items-center h-full">
              <button
                className={`border ${categoryStyle.borderColor} ${categoryStyle.textColor} rounded-3xl text-sm px-2`}
              >
                {category}
              </button>
              {date && (
                <span className="text-muted-foreground my-2">{date ?? ""}</span>
              )}
            </DialogDescription>

            <div className="text-black" style={{ scrollbarWidth: "none" }}>
              {Array.isArray(imgRef) && imgRef.length > 0 ? (
                <div className="relative w-full flex justify-center">
                  <Carousel className="max-w-xs my-2 overflow-visible">
                    <CarouselContent>
                      {imgRef.map((item, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <Card className="bg-transparent shadow-none border-none">
                              <CardContent className="flex aspect-square  items-center justify-center p-1 overflow-hidden">
                                <Image
                                  src={item}
                                  alt=""
                                  width={400}
                                  height={300}
                                  className="object-cover rounded-lg"
                                />
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 z-20" />
                    <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 z-20" />
                  </Carousel>
                </div>
              ) : (
                <div className="relative w-full flex justify-center">
                  <div className="max-w-[400px] max-h-[300px] overflow-hidden my-2 ">
                    <Image
                      src={imageString}
                      alt=""
                      width={600}
                      height={350}
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              )}

{Array.isArray(link) && link.length > 0 ? (
              <div className="flex flex-col my-4">
                <ul className="list-disc pl-5">
                  {link.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.reflink}
                        className="font-semibold underline text-zinc-700 hover:text-zinc-400"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

              {description.split("\n").map((line, index) => {
                if (line.includes("{{video:")) {
                  const videoUrl = line.match(/{{video:(.*?)}}/)?.[1]; // Extract URL
                  return videoUrl ? (
                    <iframe
                      className="w-full aspect-video rounded-lg shadow-md my-1"
                      key={index}
                      height="245"
                      src={videoUrl}
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : null;
                }
                return (
                  <p key={index} className="whitespace-pre-line">
                    {line.split("\t").map((part, i) => (
                      <span key={i}>
                        {i > 0 && <span className="inline-block w-4"></span>}
                        {part}
                      </span>
                    ))}
                  </p>
                );
              })}
            </div>
 
          </DialogHeader>
        </div>
        <div className="flex w-full justify-center items-center">
          <DialogFooter className="justify-center">
            <Button
              type="button"
              className="bg-warm-pink hover:bg-rose-300 active:bg-rose-300"
              onClick={handleReadMore}
            >
              Read More
              <BookOpenText />
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
