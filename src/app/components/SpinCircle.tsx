"use client";
import { useState, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register necessary components with ChartJS
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

//https://medium.com/@dissanayakewishwajith/creating-an-interactive-spin-wheel-with-next-js-tailwind-css-chart-js-and-typescript-34989268893a
// Dataset for the spin wheel
const datasetValues = [
  { value: 50, color: "#8f7f8f", label: "🍣 ai" },
  { value: 30, color: "#f97066", label: "be" },
  { value: 70, color: "#2e90fa", label: "ci" },
  { value: 40, color: "#fdb022", label: "de" },
  { value: 60, color: "#ee46bc", label: "ei" },
  { value: 20, color: "#854CFF", label: "fe" },
];

export default function SpinCircle() {
  const [spinning, setSpinning] = useState<boolean>(false);
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);
  const [randomRotation, setRandomRotation] = useState<number>(0);
  const chartRef = useRef<ChartJS<
    "doughnut",
    (number | [number, number] | any | any | any)[],
    unknown
  > | null>(null);

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
        cutout: "67%", // Adjusted for a larger gap
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
      }, 3000);
    }
  };

  const circleSize = 200; // Size of the countdown circle
  const circleRadius = circleSize / 2;

  return (
    <div className="relative w-[340px] h-[340px] md:w-[410px] md:h-[410px] flex items-center justify-center p-4">
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 space-y-2">
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
  );
}
