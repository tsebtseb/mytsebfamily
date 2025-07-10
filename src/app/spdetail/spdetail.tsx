"use client";

import { useSearchParams, useRouter } from "next/navigation";
import HomeNavbar from "../components/HomeNavbar";
import { mommySpecial, daddySpecial, timerSpecial } from "@/lib/familydata";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { FamilyList } from "@/lib/familydata";

export default function SpDetails() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));
  const title = searchParams.get("title");
  const source = searchParams.get("source");
  const router = useRouter();

  let selectedData: FamilyList[] = [];
  if (source === "dadsp") {
    selectedData = daddySpecial;
  } else if (source === "momsp") {
    selectedData = mommySpecial;
  } else if (source === "timersp") {
    selectedData = timerSpecial;
  }

  const item =
    selectedData.find((e) => e.id === id) ||
    selectedData.find((e) => e.title === title);
  if (!item)
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <h1 className="text-6xl">No matching item found.</h1>
      </div>
    );

  return (
    <div>
        <div className="flex items-center p-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-lg font-medium text-zinc-700 hover:text-zinc-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 14.707a1 1 0 01-1.414 0L7 10.414a1 1 0 010-1.414l4.293-4.293a1 1 0 111.414 1.414L9.414 10l3.293 3.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </button>
        </div>
      <div className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-y-auto">
        <div className="flex-col p-5 lg:p-0 mt-2">
          <h1 className="text-3xl font-bold">{item.title}</h1>

          <div className="flex w-full flex-row justify-between">
            <div className="flex gap-x-2 items-center my-2">
              {/* <p className="border py-0.5 px-1 border-gray-200 rounded text-white">{item.status}</p>
              <p className="text-gray-400">episodes: {item.noOfEpisode}</p> */}
              {item.date && (
                <span className="text-muted-foreground my-2">
                  {item.date ?? ""}
                </span>
              )}
            </div>
          </div>

          <div className="flex w-full  items-center justify-center">
            {Array.isArray(item.imgRef) && item.imgRef.length > 0 ? (
              <div className="relative w-full flex justify-center">
                <Carousel className="max-w-[600px] my-2 overflow-visible">
                  <CarouselContent>
                    {item.imgRef.map((item, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card className="bg-transparent shadow-none border-none">
                            <CardContent className="flex aspect-square  items-center justify-center p-1 overflow-hidden">
                              <Image
                                src={item}
                                alt=""
                                width={600}
                                height={350}
                                className="object-cover object-center rounded-lg"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* <CarouselPrevious  />
                  <CarouselNext /> */}
                  <div className="hidden md:block">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                  <div className="block md:hidden">
                    <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 z-20" />
                    <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 z-20" />
                  </div>
                </Carousel>
              </div>
            ) : (
              <div className="relative max-w-[600px] max-h-[500px] overflow-hidden">
                <Image
                  src={item.imageString}
                  alt=""
                  width={600}
                  height={350}
                  className="object-cover object-center"
                />
              </div>
            )}
          </div>
          <div className="whitespace-pre-line my-4">
            <h2 className="my-4 font-bold text-2xl">For you</h2>
            {item.description.split("\n").map((line, index) => {
              if (line.includes("{{video:")) {
                const videoUrl = line.match(/{{video:(.*?)}}/)?.[1]; // Extract URL
                return videoUrl ? (
                  <div key={index} className="flex justify-center w-full">
                    <div className="w-full max-w-3xl">
                      <iframe
                        className="w-full aspect-video rounded-lg shadow-md my-1"
                        key={index}
                        width="700"
                        height="450"
                        src={videoUrl}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ) : null;
              }
              return (
                <p key={index} className="whitespace-pre-line">
                  {line.split("\t").map((part, i) => (
                    <span key={i}>
                      {i > 0 && <span className="inline-block w-8"></span>}
                      {part}
                    </span>
                  ))}
                </p>
              );
            })}
            {Array.isArray(item.link) && item.link.length > 0 ? (
              <div className="flex flex-col my-4">
                <ul className="list-disc pl-5">
                  {item.link.map((item, index) => (
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
          </div>
        </div>
      </div>
    </div>
  );
}
