import FamilyVideo from "../components/FamilyVideo";
import FamilyListAdd from "../components/FamilyListAdd";
export default function HomePage() {
  return (
    <div className="w-full h-full bg-zinc-200">
      <div className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="p-5 lg:p-0">
          <FamilyVideo />
          <h1 className="text-4xl font-bold">Home</h1>
          <FamilyListAdd />
        </div>
      </div>
    </div>
  );
}
