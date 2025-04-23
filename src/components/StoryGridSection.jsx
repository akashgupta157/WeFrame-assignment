import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Ellipsis } from "lucide-react";
import eye from "../app/assets/eye.svg";
import status from "../app/assets/status-up.svg";
const stories = [
  {
    id: 1,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    statusColor: "bg-[#e3fff7] text-[#0dad81]",
    image: "https://c.animaapp.com/m9sds6cihNxC4D/img/rectangle-685.png",
    views: 428,
  },
  {
    id: 2,
    title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Created",
    statusColor: "bg-[#daf1fb] text-[#58A4FF]",
    image: "https://c.animaapp.com/m9sds6cihNxC4D/img/rectangle-685-1.png",
    views: 428,
  },
  {
    id: 3,
    title: "Teknion wins Gold at 2022 International Design Awards",
    category: "Politics",
    date: "20 Sep 2022",
    status: "Draft",
    statusColor: "bg-[#f4f4f4] text-[#A0A3BD]",
    image: "https://c.animaapp.com/m9sds6cihNxC4D/img/rectangle-685-2.png",
    views: 428,
  },
  {
    id: 4,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    statusColor: "bg-[#e3fff7] text-[#0dad81]",
    image: "https://c.animaapp.com/m9sds6cihNxC4D/img/rectangle-685-3.png",
    views: 428,
  },
  {
    id: 5,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    statusColor: "bg-[#e3fff7] text-[#0dad81]",
    image: "https://c.animaapp.com/m9sds6cihNxC4D/img/rectangle-685.png",
    views: 428,
  },
  {
    id: 6,
    title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Created",
    statusColor: "bg-[#daf1fb] text-app-secondary",
    image: "https://c.animaapp.com/m9sds6cihNxC4D/img/rectangle-685-1.png",
    views: 428,
  },
  {
    id: 7,
    title: "Teknion wins Gold at 2022 International Design Awards",
    category: "Politics",
    date: "20 Sep 2022",
    status: "Draft",
    statusColor: "bg-[#f4f4f4] text-grey",
    image: "https://c.animaapp.com/m9sds6cihNxC4D/img/rectangle-685-2.png",
    views: 428,
  },
  {
    id: 8,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    statusColor: "bg-[#e3fff7] text-[#0dad81]",
    image: "https://c.animaapp.com/m9sds6cihNxC4D/img/rectangle-685-3.png",
    views: 428,
  },
];

export default function StoryGridSection() {
  return (
    <div className="p-2 md:px-0 max-h-[65svh] overflow-y-scroll grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {stories.map((story) => (
        <div
          className="w-full p-3 h-[350px] rounded-lg flex flex-col justify-between bg-[#ffffff] shadow-[0px_4px_10px_#b5b5b51a]  bg-opacity-100"
          key={story.id}
          style={{
            backgroundImage: `linear-gradient(rgba(12, 12, 12, 0.292), rgba(12, 12, 12, 0.869)), url(${story.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex gap-1 justify-end">
            <div className="flex gap-1 px-2.5 py-1 bg-[#ffffffcc] items-center justify-center rounded">
              <Image src={eye} alt="eye" className="w-4 h-4" />
              <span className="font-semibold text-[#1c1442] text-xs">
                {story.views}
              </span>
            </div>
            <div className="w-fit px-2.5 py-1 bg-[#ffffffcc] items-center justify-center rounded">
              <Image src={status} alt="eye" className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-[#FFFFFF] text-xl md:text-[17px]">
              {story.title}
            </h1>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <p className="text-xs font-black text-[#FFFFFF]">
                  {story.category}
                </p>
                <p className="text-white text-3xl">•</p>
                <p className="text-xs font-semibold text-[#A0A3BD]">
                  {story.date}
                </p>
              </div>
              <p
                className={`text-xs font-semibold ${story.statusColor} rounded px-3.5 py-2 w-fit`}
              >
                {story.status}
              </p>
            </div>
            <div className="flex w-full gap-2 mt-2">
              <Button className="flex-1 bg-[#E8E9FF] text-[#1C1442] hover:bg-[#E8E9FF]/90 font-semibold">
                View
              </Button>
              <Button className="bg-[#fafafa] hover:bg-[#e9e9e9]">
                <Ellipsis className="text-[#1C1442]" strokeWidth={4} />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
