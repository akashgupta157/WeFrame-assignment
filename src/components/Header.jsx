import React from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";
import profile from "../app/assets/profile.svg";
import { ArrowLeft, ChevronDownIcon, Menu } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Header() {
  return (
    <header className="sticky top-0 z-1 flex items-center justify-between bg-white shadow-[0px_4px_10px_#b5b5b51a] px-4 py-2 md:py-3 md:px-12">
      <Drawer direction="left">
        <DrawerTrigger className="md:hidden" asChild>
          <Menu className="w-6 h-6" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader />
          <Sidebar />
        </DrawerContent>
      </Drawer>

      <div className="flex items-center gap-4">
        <ArrowLeft className="hidden md:block" />
        <h1 className="font-bold text-xl md:text-2xl">Stories</h1>
      </div>
      <Image
        src={profile}
        alt="Profile"
        className="rounded-md md:hidden"
        width={30}
        height={30}
      />
      <div className="hidden md:block border rounded-lg">
        <div className="flex items-center justify-between gap-20 px-2 py-1">
          <div className="flex items-center gap-2">
            <Image
              src={profile}
              alt="Profile"
              className="rounded-md"
              width={33}
              height={33}
            />
            <div>
              <p className="font-medium text-xs">Welcome back,</p>
              <h1 className="font-medium">Akshita Patel</h1>
            </div>
          </div>
          <ChevronDownIcon className="text-muted-foreground" />
        </div>
      </div>
    </header>
  );
}
