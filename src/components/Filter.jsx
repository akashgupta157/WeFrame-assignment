import React from "react";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import calendar from "@/app/assets/calendar.png";
import { ListFilter, SearchIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const contentStatuses = [
  { id: "all", label: "All", count: 4500, isActive: true },
  { id: "draft", label: "Draft", count: 1203, isActive: false },
  { id: "pending", label: "Pending", count: 890, isActive: false },
  { id: "published", label: "Published", count: 2432, isActive: false },
  { id: "archived", label: "Archived", count: 320, isActive: false },
];

export default function Filter() {
  return (
    <>
      <section className="flex flex-col sm:flex-row sm:justify-end gap-4 sm:gap-12 bg-white rounded-[10px] p-4 w-full">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Input
              className="w-full md:w-[300px] bg-[#f8fafb] rounded-[10px] pl-10 border border-[#a0a3bd]"
              placeholder="Search"
              type="text"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-grey w-[18px] h-[18px]" />
          </div>

          <div className="flex gap-2">
            <Button className="bg-[#E7E8EF] hover:bg-[#E7E8EF]/50 p-2 sm:px-2">
              <Image src={calendar} alt="calendar" width={22} height={22} />
            </Button>
            <Button className="bg-[#E7E8EF] hover:bg-[#E7E8EF]/50 p-2 sm:px-2">
              <ListFilter className="text-[#1C1442]" strokeWidth={4} />
            </Button>
          </div>
        </div>

        <Button className="bg-[#1c1442] hover:bg-[#1c1442]/90 rounded-[10px] font-semibold text-lg w-full sm:w-auto">
          Add New Story
        </Button>
      </section>
      <div className="max-w-screen flex justify-center pt-4 pb-2 px-5 md:px-0 overflow-x-auto">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex gap-2 md:gap-[15px] bg-transparent h-auto p-0">
            {contentStatuses.map((status) => (
              <TabsTrigger
                key={status.id}
                value={status.id}
                className={`flex items-center rounded-md font-semibold py-2
            ${
              status.isActive
                ? "bg-[#1c1442] text-white data-[state=active]:bg-[#1c1442] data-[state=active]:text-white"
                : "bg-[#e7e8ef] text-[#212121] data-[state=active]:bg-[#1c1442] data-[state=active]:text-white"
            }`}
              >
                <span className="tracking-[-0.08px]">{status.label} </span>
                <span
                  className={`tracking-[-0.08px] ${
                    status.isActive ? "text-[#e8e8e8]" : "text-[#a0a3bd]"
                  }`}
                >
                  ({status.count.toLocaleString()})
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </>
  );
}
