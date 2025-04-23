import React from "react";
import Image from "next/image";
import { Headphones } from "lucide-react";
import dashboard from "../app/assets/home-2.svg";
import user from "../app/assets/user-square.svg";
import settings from "../app/assets/Setting.svg";
import media from "../app/assets/video-square.svg";
import task from "../app/assets/profile-2user.svg";
import app from "../app/assets/monitor-mobbile.svg";
import analytics from "../app/assets/status-up.svg";
import content from "../app/assets/document-text.svg";
import notification from "../app/assets/notification.svg";
import customize from "../app/assets/material-symbols_drag-pan.svg";
import subscription from "../app/assets/8656173_subscription_youtube_menu_subs_social media_icon 1.svg";
export default function Sidebar() {
  const navigationItems = [
    {
      label: "Dashboard",
      image: dashboard,
      active: false,
    },
    {
      label: "Content",
      image: content,
      active: true,
    },
    {
      label: "Users",
      image: user,
      active: false,
    },
    {
      label: "Tasks",
      image: task,
      active: false,
    },
    {
      label: "Apps",
      image: app,
      active: false,
    },
    {
      label: "Analytics",
      image: analytics,
      active: false,
    },
    {
      label: "Media",
      image: media,
      active: false,
    },
    {
      label: "Customize",
      image: customize,
      active: false,
    },
    {
      label: "Notifications",
      image: notification,
      active: false,
    },
    {
      label: "Subscriptions",
      image: subscription,
      active: false,
    },
    {
      label: "Settings",
      image: settings,
      active: false,
    },
  ];
  return (
    <nav className="px-3 md:py-10 max-h-screen overflow-y-scroll no-scrollbar">
      <div className="space-y-3 px-3">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 px-3 md:px-5 py-2 md:py-3 rounded-md w-auto cursor-pointer ${
              item.active
                ? "bg-[#1c1442] hover:bg-[#1c1442] text-white"
                : "text-[#53545C] hover:bg-[#1c1442]/10 "
            }`}
          >
            <Image src={item.image} alt={item.label} width={20} height={20} />
            <span className="text-xs font-semibold">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center bg-[#E8E9FF] justify-start gap-2 md:gap-4 px-3 md:px-5 py-2 md:py-3 mt-5 md:my-8 rounded-md w-auto mx-2 cursor-pointer text-xs">
        <Headphones className="size-5" />
        Contact Support
      </div>
    </nav>
  );
}
