import HomeSection from "./components/layout/home/HomeSection";
import HomeDescription from "./components/layout/home/HomeDescription";

export default function Home() {
  return (
    <div className="bg-[var(--primary)] w-full flex flex-col overflow-x-hidden">
      <HomeSection />
      <HomeDescription />
    </div>
  );
}
