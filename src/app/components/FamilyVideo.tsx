"use client";
export default function FamilyVideo() {
  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
      <video
        poster="/bestbg.jpg"
        autoPlay
        muted
        loop
        src="/video/frombest.mp4"
        preload="auto"
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-0 brightness-[60%]"
      >
      </video>
      <div className="absolute w-[90%] lg:w-[40%] mx-auto mb-6">
        <h1 className="text-white text-2xl md:test-5xl lg:text-6xl font-bold">My Family</h1>
        <p className="text-white text-lg mt-4 line-clamp-3">Lorem porem.</p>
        {/* <div className="flex gap-x-3 mt-3">
                    <Button className="bg-white text-black px-6 py-5 hover:text-white" onClick={()=>setOpen(true)}>
                        <CirclePlay />
                         See more
                    </Button>
                </div> */}
        {/* <GLPlayModal
                          id={MockData.id}
                          title={MockData.title}
                          type={MockData.type}
                          creator={MockData.creator}
                          category={MockData.category}
                          status={MockData.status}
                          noOfEpisode={MockData.noOfEpisode}
                          overview={MockData.overview}
                          state={isOpen}
                          changeState={setOpen}
                        /> */}
      </div>
    </div>
  );
}
