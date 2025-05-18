import {
  Book,
  ChevronDown,
  ChevronUp,
  Contact,
  File,
  Home,
  Plus,
  Projector,
  User2,
} from "lucide-react";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./ui/sidebar";
import { DropdownMenu, DropdownMenuItem } from "./ui/dropdown-menu";
import { DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "/about",
    icon: Home,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Contact,
  },
  {
    title: "Blog",
    url: "/blog",
    icon: Book,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Projector,
  },
  {
    title: "Resume",
    url: "/resume",
    icon: File,
  },
];
const AppSidebar = () => {
  return (
    <div>
      <Sidebar collapsible="icon">
        <SidebarHeader className="py-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/" className="flex items-center">
                  <Image src="/avatar.png" alt="logo" width={32} height={32} />
                  <span className="ml-2">MyApp</span>
                </Link>

                {/* </Link> */}
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Collapsible</SidebarGroupLabel>
            
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="/projects/1">
                      <span>Project 1</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="/projects/2">
                      <span>Project 2</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
              </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 />
                    <span>Ahmad Sharafat</span> <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    Accounts
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
