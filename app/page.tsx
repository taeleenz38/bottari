import HomeVideos from "./components/ui/HomeVideos";
import BottariInfo from "./components/layout/home/BottariInfo";
import HomeDescription from "./components/layout/home/HomeDescription";

export default function Home() {
  return (
    <div className="bg-[var(--primary)] w-screen h-dvh relative">
      <HomeVideos />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <BottariInfo />
        <HomeDescription />
      </div>
    </div>
  );
}
