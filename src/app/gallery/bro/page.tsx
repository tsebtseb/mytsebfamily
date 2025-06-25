import { Folder, ChevronRight } from "lucide-react";
import Link from "next/link";
import FamilyListAdd from "@/app/components/FamilyListAdd";
// import Image from "next/image";

export default function Gallery() {
  return (
    <div className="w-full h-full flex flex-col p-5">
      <div className="flex items-center gap-x-2 mb-6 px-4">
        <Folder className="text-muted-foreground" />
        <Link href="/gallery">
          <h1 className="text-muted-foreground">My Family</h1>
        </Link>
        <ChevronRight />
        <h1>Timer</h1>
      </div>
      <div className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="p-5 lg:p-0">
          <h1 className="text-4xl font-bold">Timer</h1>
          {/* <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <div className="w-14 h-14 overflow-hidden">
                <Image src="/picture.png" alt="" width={400} height={400} />
              </div>
              <h1 className="text-4xl font-bold">Gallery</h1>
            </div>
            <Button variant="ghost"  onClick={() => setIsGridView(!isGridView)}>
              {isGridView? <LayoutDashboard />: <GalleryVertical />}
            </Button>
          </div> */}
          <FamilyListAdd />
          <div className="p-6 h-full w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
