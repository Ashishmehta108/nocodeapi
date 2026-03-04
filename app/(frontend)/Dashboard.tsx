"use client";
import "../globals.css";
import React from "react";
import { Calculator, Calendar, CloudPlus, EmojiHappy, Lock, RefreshCircle } from "iconsax-reactjs";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import get from "../../public/images/Get.svg";
import post from "../../public/images/Post.svg";
import query from "../../public/images/Querydata.svg";
import change from "../../public/images/Changedata.svg";
import authIconSvg from "../../public/images/Auth.svg"; // Renamed to avoid shadowing
import Hold from "../../public/images/Hold.svg";
import ApiBlock from "./ApiBlock";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AuthContextType } from "../context/Authcontext";
import {
  MinusSquare,
  Setting2,
  MessageQuestion,
  HamburgerMenu,
  Export,
  Import,
  Share,
  FolderOpen,
  Clock,
  SaveAdd,
  InfoCircle,
  ArrowRight3,
  ArrowLeft3,
  Add,
  TickCircle,
  ArrowSwapVertical,
  CloseCircle,
  AddCircle,
  SearchNormal1,
  Refresh2,
  Data,
} from "iconsax-reactjs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import { ModeToggle } from "./toggle";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Cloud,
  Cards,
  Link,
  Keyboard,
  LogoutCurve,
  Sms,
  MessageText,
  Profile,
  UserAdd,
  People,
} from "iconsax-reactjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Database } from "lucide-react";

export function DropdownMenuDemo({ auth }: { auth?: AuthContextType }) {
  const handleLogout = async () => {
    console.log("Logged out locally (auth bypassed)");
    // if (auth?.logout) await auth.logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-8 w-8 border-2 border-primary/10 hover:border-primary/20 transition-colors cursor-pointer">
          <AvatarImage
            src={
              (auth?.user?.photoURL as string) ||
              "https://github.com/shadcn.png"
            }
          />
          <AvatarFallback>
            <AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="right"
        className="w-56 translate-x-4 -translate-y-2"
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Profile variant="Bold" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Cards variant="Bold" />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Setting2 variant="Bold" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard variant="Bold" />
            <span>Keyboard shortcuts</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <People variant="Bold" />
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserAdd variant="Bold" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Sms variant="Bold" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageText variant="Bold" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <AddCircle variant="Bold" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Add variant="Bold" />
            <span>New Team</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link variant="Bold" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <InfoCircle variant="Bold" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud variant="Bold" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogoutCurve variant="Bold" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const apiTypes = [
  {
    value: "get",
    label: "GET",
    icon: AddCircle,
    description: "Retrieve data from a specified resource",
  },
  {
    value: "post",
    label: "POST",
    icon: CloudPlus,
    description: "Submit data to be processed to a specified resource",
  },
  {
    value: "auth",
    label: "Auth",
    icon: Lock,
    description: "Handle authentication and authorization",
  },
  {
    value: "query",
    label: "Query",
    icon: SearchNormal1,
    description: "Search or filter data from a resource",
  },
  {
    value: "update",
    label: "Update",
    icon: RefreshCircle,
    description: "Update existing data in a resource",
  },
  {
    value: "db",
    label: "Database",
    icon: Database,
    description: "Interact with database operations",
  },
];

export function ApiCommand({
  setaddmenu,
}: {
  setaddmenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleAddNode = (type: string) => {
    console.log(`Adding new ${type} API node`);
  };

  const handleGenerateCode = () => {
    console.log("Generating API code");
  };

  const handleExportProject = () => {
    console.log("Exporting project");
  };

  return (
    <Command className="rounded-lg border shadow-md transition-all w-[800px] h-[300px] absolute top-[200px] left-[300px]">
      <div className="flex items-center justify-between  border-b px-3">
        <CommandInput
          placeholder={"Type a command or search..."}
          className="flex-1"
        />

        <div className="gap-[1px] flex items-center  ">
          <button
            onClick={() => setaddmenu(false)}
            className="ml-1 flex h-8 w-12 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-2 "
          >
            <span className="text-sm">ESC</span>
          </button>
        </div>
      </div>

      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Add API Node">
          {apiTypes.map((type) => (
            <CommandItem
              key={type.value}
              onSelect={() => handleAddNode(type.value)}
            >
              {type.icon === Lock ? (
                <Image src={authIconSvg} className="dark:invert h-4 w-4 " alt="auth" />
              ) : (
                <type.icon className="mr-2 h-4 w-4" />
              )}

              <div>
                <span className="font-medium">{type.label}</span>
                <span className="ml-2 text-sm text-muted-foreground">
                  {type.description}
                </span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem onSelect={handleGenerateCode}>
            <TickCircle variant="Bold" className="mr-2 h-4 w-4" />
            <span>Generate API Code</span>
          </CommandItem>
          <CommandItem onSelect={handleExportProject}>
            <ArrowSwapVertical variant="Bold" className="mr-2 h-4 w-4" />
            <span>Export Project</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export default function Dashboard({ auth }: { auth?: AuthContextType }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [lockedsidebar, setLockedsidebar] = useState(false);
  const [addmenu, setaddmenu] = useState(false);

  const locksidebar = () => {
    setLockedsidebar(!lockedsidebar);
  };
  const handleMouseEnter = () => {
    if (!isSidebarOpen) {
      setIsSidebarOpen(true);
    }
  };
  const handleMouseLeave = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  React.useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "/") {
        setaddmenu(true);
      }
      if (e.keyCode === 27) {
        setaddmenu(false);
      }
    };

    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const error = auth?.error;
  React.useEffect(() => {
    if (error) {
      console.log("Auth error bypassed:", error);
      toast.error(`Auth error: ${error?.message}`);
    }
  }, [error]);

  return (
    <TooltipProvider>
      <div className="flex h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] dashboard overflow-hidden">
        <div
          className="fixed top-0 left-0 h-full z-40"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {!lockedsidebar && (
            <div
              className={`fixed top-4 left-0 h-8 w-8 rounded-r-lg hover:bg-neutral-200/50 flex items-center justify-center rounded-lg font-[500] text-neutral-700 dark:hover:bg-neutral-800/80 bg-transparent z-50 translate-x-4 transition-all duration-300`}
            >
              {isSidebarOpen ? (
                <div
                  className="h-8 flex items-center justify-center w-8 "
                  onClick={locksidebar}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <ArrowRight3 variant="Bold" className="h-6 w-6" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">Lock Sidebar</TooltipContent>
                  </Tooltip>
                </div>
              ) : (
                <HamburgerMenu
                  variant="Bold"
                  className="h-6 w-6 "
                />
              )}
            </div>
          )}
          <div
            className={`fixed  left-0 h-full bg-background/95 backdrop-blur-sm flex flex-col items-center py-2  gap-2 shadow-lg transition-all duration-300
              overflow-y-auto 
            ${isSidebarOpen || lockedsidebar
                ? "translate-x-0 w-16"
                : "-translate-x-[20px] w-0"
              } ${lockedsidebar ? "top-0" : "top-10"} `}
          >
            {lockedsidebar && (
              <div className="flex flex-col gap-1 mt-4" onClick={locksidebar}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-8 w-8 rounded-lg bg-neutral-300/20 hover:bg-neutral-300/40 shadow-none "
                    >
                      <ArrowLeft3 variant="Bold" className="h-6 scale-[1.2] w-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">Unlock Sidebar</TooltipContent>
                </Tooltip>
              </div>
            )}
            <div className="flex flex-col gap-1 mt-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-8 w-8 rounded-lg bg-primary/10 hover:bg-primary/20"
                  >
                    <Add variant="Bold" className="h-4 w-4 scale-[1.2]  " />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Add Node</TooltipContent>
              </Tooltip>
              <Separator />
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-lg hover:bg-primary/10"
                  >
                    <FolderOpen variant="Bold" className="h-4 w-4 scale-[1.2]" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Open Project</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-lg hover:bg-primary/10"
                  >
                    <SaveAdd variant="Bold" className="h-4 w-4 scale-[1.2]  " />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Save Flow</TooltipContent>
              </Tooltip>
              <Separator />
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-lg hover:bg-primary/10"
                  >
                    <Export variant="Bold" className="h-4 w-4 scale-[1.2]  " />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Export</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-lg hover:bg-primary/10"
                  >
                    <Import variant="Bold" className="h-4 w-4 scale-[1.2]  " />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Import</TooltipContent>
              </Tooltip>
            </div>
            <div className="mt-28 flex flex-col gap-1 justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <ModeToggle className="w-8 h-8 scale-[1.2] rounded-lg hover:bg-primary/10" />
                </TooltipTrigger>
                <TooltipContent side="right">Toggle theme </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-lg hover:bg-primary/10"
                  >
                    <Clock variant="Bold" className="h-4 w-4 scale-[1.2] " />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">History</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-lg hover:bg-primary/10"
                  >
                    <Share variant="Bold" className="h-4 w-4 scale-[1.2]  " />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Share</TooltipContent>
              </Tooltip>
              <Separator />
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-lg hover:bg-primary/10"
                  >
                    <MessageQuestion variant="Bold" className="h-4 w-4 scale-[1.2]  " />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Help</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-lg hover:bg-primary/10"
                  >
                    <Setting2 variant="Bold" className="h-4 w-4 scale-[1.2]  " />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
              <div className="h-px w-6 bg-border my-1" />
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuDemo auth={auth} />
                </TooltipTrigger>
                <TooltipContent side="right">Profile</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-grid-primary/[0.02] [mask-image:linear-gradient(0deg,transparent,black)]" />
          <div>
            <ToastContainer />
          </div>

          <div className="absolute inset-0 flex  items-center justify-center">
            {addmenu && (
              <div className=" h-screen w-screen z-20 absolute ">
                <ApiCommand setaddmenu={setaddmenu} />
              </div>
            )}
            <ApiBlock id="1" />
          </div>
          <Card
            className={`absolute top-4 right-4 w-64 p-4 bg-background/95 backdrop-blur-sm shadow-lg transition-all duration-300 ${showInfo ? "translate-x-0" : "translate-x-[calc(100%+16px)]"
              }`}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold">Flow Information</h3>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 rounded-lg hover:bg-primary/10"
                onClick={() => setShowInfo(!showInfo)}
              >
                <InfoCircle variant="Bold" className="h-4 w-4 scale-[1.2]  " />
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Total Nodes</span>
                <span>3</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Connections</span>
                <span>2</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Status</span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Active
                </span>
              </div>
            </div>
          </Card>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full bg-background/95 backdrop-blur-sm border shadow-lg">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="relative flex h-3 w-3 group">
                <span className=" absolute  group:hover:animate-ping inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Connected
            </div>
          </div>
          <div className="absolute bottom-4 right-4 flex flex-col gap-1 bg-background/95 backdrop-blur-sm rounded-lg border shadow-lg p-1">
            <Button variant="ghost" size="icon">
              <Add variant="Bold" className="h-3 w-3" />
            </Button>
            <Separator />
            <Button variant="ghost" size="icon">
              <MinusSquare variant="Bold" className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
// "use client";
// import { useEffect, useRef, useState } from "react";
// import React from "react";
// import { motion } from "framer-motion";
// import ApiBlock from "./ApiBlock";
// import { Button } from "@/components/ui/button";
// import MobileSidebar from "./MobileSidebar";

// import Image from "next/image";
// const generateUniqueId = () => Math.random().toString(36);

// export default function Dashboard() {
//   const itemRef = useRef<HTMLDivElement | null>(null);
//   const index = 0;
//   const [shownode, setShownode] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startPos, setStartPos] = useState({ x: 0, y: 0 });
//   const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
//   const [scale, setScale] = useState(1);
//   const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     setIsDragging(true);
//     setStartPos({ x: e.clientX - currentPos.x, y: e.clientY - currentPos.y });
//   };

//   const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     // console.log("tracking", e.clientX);
//     if (!itemRef.current) return;
//     React;
//     const element = React.createElement("div", {
//       style: { width: "100px", height: "100px", background: "red" },
//     });
//     if (e.clientX - currentPos.x < 600 && e.clientY - currentPos.y >350) {
//       setShownode(true);
//     }
//     console.log(shownode);

//     if (!isDragging) return;

//     const newPos = {
//       x: e.clientX - startPos.x,
//       y: e.clientY - startPos.y,
//     };
//     setCurrentPos(newPos);
//     if (itemRef.current) {
//       itemRef.current.style.cursor = "grab";
//       itemRef.current.style.transform = `translate(${newPos.x}px, ${newPos.y}px) scale(${scale})`;
//     }
//   };
//   const onMouseUp = () => {
//     setIsDragging(false);
//   };
//   const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     let newScale = scale;
//     if (newScale > 2) {
//       newScale = 2;
//     }
//     if (newScale < 0.8) {
//       newScale = 0.8;
//     }
//     if (e.deltaY < 0) {
//       newScale += 0.1;
//     } else {
//       newScale = Math.max(0.1, newScale - 0.1);
//     }

//     setScale(newScale);
//     if (itemRef.current) {
//       itemRef.current.style.transform = `translate(${currentPos.x}px, ${currentPos.y}px) scale(${newScale})`;
//     }
//   };

//   return (
//     <div
//       className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] bg-opacity-30 relative flex items-center justify-center"
//       onMouseMove={onMouseMove}
//       onMouseUp={onMouseUp}
//       onMouseLeave={onMouseUp}
//       onWheel={onWheel}
//       style={{ cursor: isDragging ? "grabbing" : "default" }}
//     >
//       <div
//         className="md:left-1/2
//          transform md:-translate-x-1/2 translate-x-[50%] mx-auto p-4  flex flex-col items-center fixed bottom-0"
//       >
//         <div className="w-full flex justify-center mb-4 gap-2 bg-white px-4  dark:bg-neutral-950 h-10 items-center">
//           <Button
//             onClick={() => addBlock("default")}
//             className="focus-visible:outline-none shadow-none "
//             variant="default"
//           >
//             <span>
//               <Image
//                 className="filter invert-[20%] dark:invert-[80%] font-thin"
//                 src={Hold}
//                 alt="Hold"
//               />
//             </span>
//           </Button>
//           <Button
//             onClick={() => addBlock("get")}
//             className="focus-visible:outline-none shadow-none"
//             variant="outline"
//           >
//             <span>
//               <Image
//                 className="filter dark:invert-[80%] font-thin"
//                 src={get}
//                 alt="Get"
//               />
//             </span>
//           </Button>
//           <Button
//             onClick={() => addBlock("post")}
//             className="focus-visible:outline-none shadow-none"
//             variant="outline"
//           >
//             <span>
//               <Image
//                 className="filter dark:invert-[80%] font-thin"
//                 src={post}
//                 alt="Post"
//               />
//             </span>
//           </Button>
//           <Button
//             onClick={() => addBlock("query")}
//             className="focus-visible:outline-none shadow-none"
//             variant="outline"
//           >
//             <span>
//               <Image
//                 className="filter dark:invert-[80%] font-thin"
//                 src={query}
//                 alt="Query"
//               />
//             </span>
//           </Button>
//           <Button
//             onClick={() => addBlock("change")}
//             className="focus-visible:outline-none shadow-none"
//             variant="outline"
//           >
//             <span>
//               <Image
//                 className="filter dark:invert-[80%] font-thin"
//                 src={change}
//                 alt="Change"
//               />
//             </span>
//           </Button>
//           <Button
//             onClick={() => addBlock("auth")}
//             className="focus-visible:outline-none shadow-none"
//             variant="outline"
//           >
//             <span>
//               <Image
//                 className="filter dark:invert-[80%] font-thin"
//                 src={auth}
//                 alt="Auth"
//               />
//             </span>
//           </Button>
//         </div>
//       </div>
//       <div className="fixed left-0 top-0 z-10 ">
//         <MobileSidebar />
//       </div>
//       <ApiBlock
//         id="1"
//         type="default"
//         ref={itemRef}
//         shownode={shownode}
//         onmousedown={onMouseDown}
//         style={{
//           position: "absolute",
//           cursor: "grab",
//           transform: `translate(${currentPos.x}px, ${currentPos.y}px) scale(${scale})`,
//           transition: "transform 0.1s ease",
//         }}
//       />
//     </div>
//   );
// }
