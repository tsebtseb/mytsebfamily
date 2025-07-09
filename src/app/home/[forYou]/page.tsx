"use client"
import ForYouListAdd from "@/app/components/ForyouListAdd";

export default function ForYouHomePage() {
  
  return (
    <div className="w-full h-full bg-zinc-200">
      <div className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="p-5 lg:p-0">
          <ForYouListAdd />
        </div>
      </div>
    </div>
  );
}
