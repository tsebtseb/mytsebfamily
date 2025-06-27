"use client";
import { Folder, ChevronRight,LogOut, ChevronLeft } from "lucide-react";
import Link from "next/link";
import FamilyListAdd from "@/app/components/FamilyListAdd";
import { useAuth } from "@/context/userContext";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
// import Image from "next/image";

export default function Gallery() {
  const {logout}=useAuth()
  const pathname = usePathname();
  const router=useRouter();
  
  return (
    <div className="w-full h-full flex flex-col p-5">
      <div className="flex items-center gap-x-2 mb-6 px-4">
        <Folder className="text-muted-foreground" />
        <Link href="/gallery">
          <h1 className="text-muted-foreground">My Family</h1>
        </Link>
        <ChevronRight />
        <h1>Dad</h1>
      </div>
      <div className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="p-5 lg:p-0">
          <h1 className="text-4xl font-bold">Dad</h1>
          <FamilyListAdd />
          <div className="p-6 h-full w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2"></div>
          </div>
          <div className="flex flex-row items-center justify-end mt-8 gap-x-4">
            <Button
              variant="outline"
             className="flex flex-row items-center gap-2 shadow-md hover:shadow-lg transition-all px-6 py-5 text-md"
             onClick={()=>logout(pathname)}
            >
              <LogOut size={22} />
              <h1 className="font-popping ">Log Out</h1>
            </Button>

            <Button
             className="flex flex-row items-center gap-2 shadow-md hover:shadow-lg transition-all px-6 py-5 text-md"
             onClick={()=>router.back()}
            >
              <ChevronLeft size={22} />
              <h1 className="font-popping">Back</h1>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
