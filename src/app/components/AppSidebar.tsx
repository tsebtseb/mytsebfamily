"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { MessageCircleHeart, FolderHeart, Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import MomAvatar from "/public/momavatar.jpg";
import DadAvatar from "/public/dadavatar.jpg";
import TimerAvatar from "/public/timeravatar.jpg";

const menuitems = [
  {
    title: "My Home",
    url: "/home",
    icon: MessageCircleHeart,
  },
  {
    title: "My Family",
    url: "/gallory",
    icon: FolderHeart,
  },
  {
    title: "Gin ARai Dee",
    url: "/ginkhao",
    icon: Utensils,
  },
];

const familyMembers = {
    "/gallory/dada": {
      name: "Dad",
    nickname: "พ่อเก่ง เก่งที่สุดในโลก",
      avatar: DadAvatar
    },
    "/gallory/mama": {
      name: "Mommy",
      nickname: "รัชชี่ คนที่เป็นห่วงหนูที่สุด",
      avatar: MomAvatar
    },
    "/gallory/bro": {
      name: "Timer",
      nickname: "เม่อร์ พี่ชายที่รักหนูมากที่สุด",
      avatar: TimerAvatar
    },
  };

export default function AppSidebar() {
  const pathname = usePathname();
  const currentFamilyMember = familyMembers[pathname as keyof typeof familyMembers];
  return (
    <div className="z-20">
    <Sidebar>
      <SidebarContent className="flex h-full flex-col justify-between">
        <SidebarGroup>
          <SidebarGroupLabel className="h-auto p-4 my-2">
          <Link href="/home">
            <Image
              src="/bestlogo.png"
              alt=""
              width={250}
              height={250}
              className="h-auto w-full max-w-[200px]"
            />
          </Link>
          </SidebarGroupLabel>
        
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-4">
              {menuitems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={
                        pathname?.startsWith(item.url)
                        ? "py-6 bg-warm-pink text-white rounded-3xl shadow-lg  mx-2 px-4 hover:bg-warm-pink/90 hover:text-white transition-all duration-300 ease-in-out active:bg-warm-pink/90 active:text-white"
                        : "py-6 mx-2 px-4"
                    }
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span className="font-popping font-semibold">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarFooter className="p-4">
            {pathname?.startsWith("/gallory/") && currentFamilyMember && (
            <div className="flex items-center gap-4 p-4 bg-warm-pink/10 rounded-2xl">
              <Avatar className="h-12 w-12 items-center">
                <AvatarImage src={currentFamilyMember.avatar.src} className="object-cover w-full h-full" />
                <AvatarFallback>{currentFamilyMember.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-y-1">
                <p className="font-medium">{currentFamilyMember.name}</p>
                <p className="text-sm text-muted-foreground">{currentFamilyMember.nickname}</p>
            </div>
            </div>
          )}
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
    </div>
  );
}
