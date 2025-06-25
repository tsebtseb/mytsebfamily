import Image from "next/image";
import { glData } from "@/lib/gldata";

export default function FamilyListAdd(){
    return (
        <div>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
        {glData.map((item) => {
        //   const categoryStyle = categoryColors[item.category.toLowerCase()] || {
        //     borderColor: "border-[#00cbc3]",
        //     textColor: "text-[#00cbc3]",
        //   };
          return (
            <div
              key={item.id}
              className="relative h-50 group"
            //   onClick={() => handleOpenModal(item)}
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
                //   className={`border ${categoryStyle.borderColor} ${categoryStyle.textColor} rounded-3xl text-sm px-2`}
                >
                  {item.category}
                </button>
              </div>
              <div className="h-60 relative z-10 w-full transform transition duration-500 group-hover:scale-125 opacity-0 group-hover:opacity-100">
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
                    // className={`border ${categoryStyle.borderColor} ${categoryStyle.textColor} rounded-3xl text-sm px-2`}
                  >
                    {item.category}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        </div>
        </div>
    );
}