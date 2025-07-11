"use client";
import { useState, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Register necessary components with ChartJS
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

//https://medium.com/@dissanayakewishwajith/creating-an-interactive-spin-wheel-with-next-js-tailwind-css-chart-js-and-typescript-34989268893a
// Dataset for the spin wheel
const foodTypeData = [
  { value: 100, color: "#fa7275", label: "🍱Japanese" },
  { value: 80, color: "#60BA97", label: "🍝Italian" },
  { value: 50, color: "#3b82f6", label: "🦀Seafood" },
  { value: 40, color: "#f9ab72", label: "🥟Chinese" },
  { value: 60, color: "#ee46bc", label: "🥘Thai" },
  { value: 50, color: "black", label: "🥩Steak" },
  { value: 50, color: "#dc2626", label: "🔥Grill/BBQ" },
  { value: 20, color: "#854CFF", label: "🫓Vietnamese" },
  { value: 20, color: "#facc15", label: "🌮Mexican" },
  { value: 20, color: "#34d399", label: "🥖French" },
];

const restaurantData = [
  { value: 30, color: "#333333", label: "🥩Neil Steak" },
  { value: 90, color: "#D7263D", label: "🐮Rengaya" },
  { value: 70, color: "#EF476F", label: "🍣Sho japanese" },
  { value: 70, color: "#90BE6D", label: "🍕Sala Rossa" },
  { value: 50, color: "#4DCCBD", label: "🍝Antonio" },
  { value: 60, color: "#264653", label: "🌆Bull & Bear" },
  { value: 80, color: "#43AA8B", label: "🍣123 ICHI NI SAN" },
  { value: 60, color: "#FF6F59", label: "🍖Sookdal" },
];

const mamaOrderData = [
  { value: 100, color: "#FF6F59", label: "🍜ก๋วยเตี๋ยวเรือ" },
  { value: 80, color: "#654321", label: "🐔ข้าวมันไก่" },
  { value: 60, color: "#abcdef", label: "🍲ข้าวต้ม" },
  { value: 20, color: "#FFC300", label: "🍲ข้าวต้มแห้ง" },
  { value: 90, color: "#264653", label: "🍳ครัวมหาชัย" },
  { value: 70, color: "#F77F00", label: "🍛เขียง" },
  { value: 20, color: "#FFA552", label: "🍛ตุ้งแช่" },
  { value: 60, color: "#4DCCBD", label: "🐷ข้าวหมูกรอบ" },
  { value: 70, color: "#FFD166", label: "🍜ลิ้มเหล่าโหงว" },
  { value: 80, color: "#720026", label: "🍜ก๋วยเตี๋ยวต้มยำ" },
  { value: 60, color: "#6CC551", label: "🐓นิตยาไก่ย่าง" },
  { value: 60, color: "#56CCF2", label: "🐟แหลมเจริญ" },
  { value: 80, color: "#43AA8B", label: "🍲ข้าวผัด" },
  { value: 70, color: "#123456", label: "🍲โจ๊กสามย่าน" },
  { value: 60, color: "#118AB2", label: "🥘ถูกและดี" },
  { value: 80, color: "black", label: "🍗บอนชอน" },
];

const dadPickData=[
  { value: 50, color: "#333333", label: "🍛EASY! buddy" },
  { value: 50, color: "#D7263D", label: "🐮Rengaya" },
  { value: 50, color: "#EF476F", label: "🍜Khao-Sō-i" },
  { value: 50, color: "#90BE6D", label: "🍜ThongSmith" },
  { value: 50, color: "#264653", label: "🍜ก๋วยเตี๋ยวเนื้อ" },
  { value: 50, color: "#720026", label: "🥩พาข้าวเหนียว" },
  { value: 50, color: "#43AA8B", label: "🍜รสดีเด็ด" },
  { value: 50, color: "#FF6F59", label: "🍜ก๋วยเตี๋ยวต้มยำ" },
];

export default function SpinCircle({
  dataName,
}: {
  dataName: "foodTypeData" | "restaurantData" | "mamaOrderData" | "dadPickData";
}) {
  const [spinning, setSpinning] = useState<boolean>(false);
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);
  const [randomRotation, setRandomRotation] = useState<number>(0);
  const chartRef = useRef<ChartJS<"doughnut", number[], unknown> | null>(null);

  const allDatasets = {
    foodTypeData,
    restaurantData,
    mamaOrderData,
    dadPickData,
  };

  const datasetValues = allDatasets[dataName] ?? foodTypeData;
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const [activeSegments, setActiveSegments] = useState<number[]>(
    Array.from({ length: datasetValues.length }, (_, i) => i)
  );

  // Data for the Doughnut chart
  const data = {
    datasets: [
      {
        data: activeSegments.map((item) => datasetValues[item].value),
        backgroundColor: activeSegments.map(
          (item) => datasetValues[item].color
        ),
        borderColor: activeSegments.map((item) => datasetValues[item].color),
        cutout: "50%", // Adjusted for a larger gap
        rotation: randomRotation,
      },
    ],
    labels: activeSegments.map((item) => datasetValues[item].label),
    hoverOffset: 3,
  };

  const handleSegmentClick = (index: number) => {
    if (activeSegments.length > 2) {
      // Ensure at least 2 segments remain
      setActiveSegments((prev) => prev.filter((i) => i !== index));
      if (chartRef.current) {
        chartRef.current.update();
      }
    }
  };

  const handleSpin = () => {
    if (!spinning) {
      setSpinning(true);
      setWinnerIndex(null);

      // Spin animation
      const newRotation = randomRotation + Math.random() * 3600 + 3600;
      setRandomRotation(newRotation);

      if (chartRef.current) {
        chartRef.current.update();
      }

      // Show winner after spin
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * activeSegments.length);
        const actualSegmentIndex = activeSegments[randomIndex];
        setWinnerIndex(actualSegmentIndex);
        setSpinning(false);
        setIsDialogOpen(true);
      }, 3000);
    }
  };

  const circleSize = 200; // Size of the countdown circle
  const circleRadius = circleSize / 2;

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="my-2">🎉 Chosen for You!</DialogTitle>
            <DialogDescription className="flex flex-row justify-center">
              {winnerIndex !== null && (
                <span
                  className="font-popping font-semibold text-lg"
                  style={{ color: datasetValues[winnerIndex].color }}
                >
                  {datasetValues[winnerIndex].label}
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <div className="grid max-h-[70vh] overflow-y-scroll flex-1 gap-2">
              <p>
                Enjoy our lovely meal ⸜(｡˃ ᵕ ˂ )⸝♡🍚
                ขอให้กินข้าวให้อิ่มอร่อยๆค่ะ มีความสุขกับการทานอาหารนะคะ
              </p>
              <p className="text-muted-foreground">
                (อะไรก็ได้ที่แปลว่าอะไรก็ได้จริงๆค่ะ)
              </p>
            </div>
          </div>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <button className="rounded-full bg-warm-pink px-6 py-2 font-semibold text-white transition-all hover:bg-white hover:text-black active:bg-white active:text-black">
                Close
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex flex-col">
        <div className="relative w-[340px] h-[340px] md:w-[410px] md:h-[410px] flex items-center justify-center p-4">
          <div className="absolute -right-40 top-1/2 -translate-y-1/2 space-y-2 hidden md:block">
            {activeSegments.map((segmentIndex) => (
              <button
                key={segmentIndex}
                onClick={() => handleSegmentClick(segmentIndex)}
                className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-gray-100"
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: datasetValues[segmentIndex].color }}
                />
                <span className="text-sm font-medium">
                  {datasetValues[segmentIndex].label}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={handleSpin}
            disabled={spinning}
            style={{
              backgroundColor:
                winnerIndex !== null
                  ? datasetValues[winnerIndex].color
                  : "var(--warm-pink)",
            }}
            className={`absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white rounded-full p-4 shadow-lg
                transition-all duration-200 ${
                  spinning
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:scale-105"
                }`}
          >
            {spinning ? (
              <span className="animate-pulse">Spinning...</span>
            ) : winnerIndex !== null ? (
              <span className="font-semibold">
                {datasetValues[winnerIndex].label}
              </span>
            ) : (
              <span className="font-semibold">Spin!</span>
            )}
          </button>

          <div className="relative w-[300px] h-[300px] md:w-[368px] md:h-[368px] p-4">
            <Doughnut
              data={data}
              options={{
                plugins: {
                  legend: { display: false },
                  datalabels: {
                    color: "white",
                    font: {
                      size: 14,
                      weight: "normal",
                    },
                    formatter: function (_, context) {
                      return data.labels[context.dataIndex];
                    },
                  },
                },
                rotation: -90,
              }}
              ref={chartRef}
            />
            <svg
              className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[368px] md:h-[368px] pointer-events-none -rotate-90"
              viewBox={`0 0 ${circleSize + 11} ${circleSize + 11}`}
            >
              <circle
                className="fill-none stroke-white"
                cx="50%"
                cy="50%"
                r={circleRadius}
                strokeWidth="2"
              />
            </svg>
            <div
              id="arrow-icon"
              className="absolute top-1.5 md:top-[7px] left-1/2 transform -translate-x-1/2 text-white rotate-180"
            >
              <svg
                className="h-7 w-7 text-white z-20"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 22 22 2 22"></polygon>
              </svg>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
            {activeSegments.map((segmentIndex) => (
              <button
                key={segmentIndex}
                onClick={() => handleSegmentClick(segmentIndex)}
                className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-gray-100"
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: datasetValues[segmentIndex].color }}
                />
                <span className="text-sm font-medium">
                  {datasetValues[segmentIndex].label}
                </span>
              </button>
            ))}
          </div>
      </div>
    </>
  );
}
