import HomeSection from "./components/layout/home/HomeSection";
import HomeDescription from "./components/layout/home/HomeDescription";

export default function Home() {
  return (
    <div className="bg-[var(--primary)] w-screen flex flex-col">
      <HomeSection />
      <HomeDescription />
    </div>
  );
}
