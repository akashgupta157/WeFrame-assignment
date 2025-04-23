import Filter from "@/components/Filter";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StoryGridSection from "@/components/StoryGridSection";

export default function Home() {
  return (
    <div className="flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <div className="bg-[#fafbfb] px-0 py-5 md:px-5">
          <Filter />
          <StoryGridSection />
        </div>
      </div>
    </div>
  );
}
