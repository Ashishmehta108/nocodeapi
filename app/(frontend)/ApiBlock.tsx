"use client";
import "../globals.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Add, More, AddCircle, CloseCircle } from "iconsax-reactjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export function ContextMenuDemo({ type }: { type: string }) {
  const setItem = (e: React.MouseEventHandler<HTMLDivElement>) => { };
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-full w-full  items-center justify-center rounded-md border  opacity-0  text-sm w-[200px] h-[100px] absolute"></ContextMenuTrigger>
      <ContextMenuContent className="w-[320px] p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-md translate-x-[25%] -translate-y-[30%]">
        <div className="space-y-5">
          <div>
            <Label
              htmlFor="api-type"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              API Type
            </Label>
            <Select>
              <SelectTrigger className="mt-1 w-full border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 focus:outline-none">
                <SelectValue
                  placeholder="Select API Type"
                  defaultValue={"get"}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="get">get</SelectItem>
                <SelectItem value="post">post</SelectItem>
                <SelectItem value="query">db query</SelectItem>
                <SelectItem value="change">put</SelectItem>
                <SelectItem value="auth">authentication</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label
              htmlFor="block-text"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Block Text
            </Label>
            <Input
              id="block-text"
              value="Your Text"
              readOnly
              className="mt-1 w-full border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Change block text"
            />
          </div>
          <div>
            <Label
              htmlFor="block-color"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Block Color
            </Label>
            <Input
              id="block-color"
              type="color"
              className="mt-1 w-full h-10 border-none rounded-md bg-white dark:bg-neutral-800 cursor-pointer focus:outline-none"
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Third-Party Integrations
            </Label>
            <Select>
              <SelectTrigger className="mt-1 w-full border border-neutral-300 dark:border-neutral-900 focus-visible:border-neutral-500 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 ">
                <SelectValue defaultValue={"prisma"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="prisma">Prisma</SelectItem>
                <SelectItem value="auth">Authentication</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Save Button */}
          <Button
            variant="outline"
            className="w-full py-2 text-sm font-medium border border-neutral-400 text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:ring-2 focus:ring-indigo-500 rounded-md"
          >
            Save Changes
          </Button>
        </div>
      </ContextMenuContent>
    </ContextMenu>
  );
}
import get from "../../public/images/Get.svg";
import post from "../../public/images/Post.svg";
import query from "../../public/images/Querydata.svg";
import change from "../../public/images/Changedata.svg";
import auth from "../../public/images/Auth.svg";
import Hold from "../../public/images/Hold.svg";
import { Label } from "@/components/ui/label";
type ApiBlockProps = {
  type: string;
  text: string;
  more: boolean;
  handleDelete: () => void;
  handleDuplicate: () => void;
};
export default function ApiBlock({ id }: { id: string }) {
  const [data, setdata] = useState<ApiBlockProps | null>({
    type: "",
    text: "",
    more: false,
    handleDelete: () => { },
    handleDuplicate: () => { },
  });
  useEffect(() => {
    const exits = async () => {
      const res = await fetch(`/api/getBlockData/exists?id=${id}`);
      const data = await res.json();
      console.log(data);
    };
    const getdata = async () => {
      const data = await fetch("/api/getBlockData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await data.json();
      setdata(res);
    };
    getdata();
  }, [data]);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState("Your Text");
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [top, setTop] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [left, setleft] = useState(false);
  const [bottom, setbottom] = useState(false);
  const [right, setright] = useState(false);

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const x = e.clientX;
    const y = e.clientY;
    const dx = e.clientX - startPosition.x;
    const dy = e.clientY - startPosition.y;
    setPosition((prev) => ({
      x: prev.x + dx,
      y: prev.y + dy,
    }));
    setStartPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseup = () => {
    setIsDragging(false);
  };
  useEffect(() => {
    if (isResizing) {
      setIsDragging(false);
    }
    if (isDragging) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseup);
    }
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseup);
    };
  }, [isDragging, startPosition, isResizing]);
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    const x = e.clientX;
    const y = e.clientY;
    setStartPosition({ x: e.clientX, y: e.clientY });
  };
  // return <div className="okayhm w-20 h-20 bg-neutral-200"></div>;
  return (
    <motion.div

      className={`rounded-md okayhm border-[2px] border-neutral-600/70 dark:border-neutral-400 z-10 p-4   w-[200px] h-[100px] flex flex-col items-center justify-center gap-2  focus:scale-[1.2] bg-neutral-50/20 dark:bg-neutral-900/60 shadow-lg ${isDragging
          ? "border border-neutral-700 dark:border-neutral-100"
          : " border border-neutral-300 dark:border-neutral-400"
        } `}
      onMouseDown={onMouseDown}
      ref={itemRef}
      onDoubleClick={() => setIsPopoverOpen(!isPopoverOpen)}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transitionBehavior: "smooth",
        transitionTimingFunction: "linear",
      }}
    >
      {" "}
      <div
        className=" h-10 top-0 -translate-y-12 absolute w-[180px] bg-neutral-900 opacity-0"
        onMouseEnter={() => setTop(true)}
        onMouseLeave={() => {
          setTop(false);
        }}
      ></div>
      <div
        className=" h-10 bottom-0 translate-y-12 absolute w-[180px] bg-neutral-900 opacity-0 "
        onMouseEnter={() => setbottom(true)}
        onMouseLeave={() => setbottom(false)}
      ></div>
      <div
        className=" w-10 left-0 -translate-x-12 absolute h-[90px] bg-neutral-900 opacity-0"
        onMouseEnter={() => setleft(true)}
        onMouseLeave={() => setleft(false)}
      ></div>
      <div
        className=" w-10 right-0 translate-x-12 absolute h-[90px] bg-neutral-900 opacity-0"
        onMouseEnter={() => setright(true)}
        onMouseLeave={() => setright(false)}
      ></div>
      {top && (
        <div
          style={{
            pointerEvents: "none",
          }}
        >
          <div className="w-[3px] h-12 flex justify-center    -translate-y-[69.5px] bg-neutral-900">
            <div className="-translate-y-[10px] z-20">
              <AddCircle variant="Bold" className="text-neutral-600" />
            </div>
          </div>
        </div>
      )}
      {bottom && (
        <div
          style={{
            pointerEvents: "none",
          }}
        >
          <div className="w-[3px] h-12 z-10 flex justify-center    translate-y-[78.5px] bg-neutral-900">
            <div className="translate-y-[45px] z-20 ">
              <AddCircle variant="Bold" className="text-neutral-600" />
            </div>
          </div>
        </div>
      )}
      {right && (
        <div
          style={{
            pointerEvents: "none",
          }}
        >
          <div className="w-[48px] h-[3px] z-10 flex items-center  translate-x-[123px] bg-neutral-900">
            <div className="  translate-x-[45px] z-20 ">
              <AddCircle variant="Bold" className="text-neutral-600" />
            </div>
          </div>
        </div>
      )}
      {left && (
        <div
          className="flex items-center"
          style={{
            pointerEvents: "none",
          }}
        >
          <div className="w-16 h-[3px] z-10  -translate-x-[132px] bg-neutral-900 z-10">
            <div className="-translate-y-[10px] z-10 -translate-x-[11px]">
              <AddCircle variant="Bold" className="text-neutral-600" />
            </div>
          </div>
        </div>
      )}
      <div className="">{data?.text}</div>
      <div className="absolute bottom-1 right-1 text-xs flex items-center gap-1">
        <Image src={get} className="w-5 h-5 dark:invert" alt="get" />
        <span className="flex items-center translate-y-[1px]">get</span>
      </div>
      <ContextMenuDemo type={data?.type as string} />
    </motion.div>
  );
}

// <ContextMenu>
// <ContextMenuTrigger>Right click</ContextMenuTrigger>
// <ContextMenuContent>
// <Popover open={isPopoverOpen}>
{
  /* <PopoverTrigger>
      <div className="text-center cursor-pointer font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hidden">
        <MoreVertical />
      </div>
    </PopoverTrigger>
    <PopoverContent
      className="w-[320px] p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-md translate-x-[35%]"
      side="right"
    >
      <div className="flex justify-end ">
        <div className="hover:bg-neutral-100 rounded-md p-1 hover:dark:bg-neutral-800">
          <X
            className="cursor-pointer"
            onClick={() => setIsPopoverOpen(false)}
          />
        </div>
      </div>
      <div className="space-y-5">
        <div>
          <Label
            htmlFor="api-type"
            className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            API Type
          </Label>
          <Select value="post">
            <SelectTrigger className="mt-1 w-full border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 focus:outline-none ">
              <div>post</div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="get">get</SelectItem>
              <SelectItem value="post">post</SelectItem>
              <SelectItem value="query">db query</SelectItem>
              <SelectItem value="change">put</SelectItem>
              <SelectItem value="auth">authentication</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Block Text Input */
}
// <div>
//   <Label
//     htmlFor="block-text"
//     className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
//   >
//     Block Text
//   </Label>
//   <Input
//     id="block-text"
//     value={text}
//     readOnly
//     className="mt-1 w-full border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//     placeholder="Change block text"
//   />
// </div>

// {/* Color Picker */}
// <div>
//   <Label
//     htmlFor="block-color"
//     className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
//   >
//     Block Color
//   </Label>
//   <Input
//     id="block-color"
//     type="color"
//     className="mt-1 w-full h-10 border-none rounded-md bg-white dark:bg-neutral-800 cursor-pointer focus:outline-none"
//   />
// </div>

// {/* Third-Party Integrations */}
// <div>
//   <Label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
//     Third-Party Integrations
//   </Label>
//   <Select>
//     <SelectTrigger className="mt-1 w-full border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none">
//       <div>Add Integration</div>
//     </SelectTrigger>
//     <SelectContent>
//       <SelectItem value="prisma">Prisma</SelectItem>
//       <SelectItem value="auth">Authentication</SelectItem>
//     </SelectContent>
//   </Select>
// </div>

{
  /* Save Button */
}

// </div> */}

//       {/* <div
//         style={{
//           position: "absolute",
//           right: 0,
//           bottom: 0,
//           width: "10px",
//           height: "10px",
//           opacity: 0,
//           backgroundColor: "gray",
//           cursor: "se-resize", */}
//       {/* }}
//       /> */}

// "use client";

// type ApiBlockProps = {
//   id: string;
//   type: string;
//   ref: React.MutableRefObject<HTMLDivElement | null>;
//   onmousedown: (e: React.MouseEvent<HTMLDivElement>) => void;
//   style: style;
//   shownode: boolean;
// };
// type style = React.CSSProperties | undefined;
// export default function ApiBlock({
//   id,
//   type,
//   ref,
//   onmousedown,
//   style,
//   shownode,
// }: ApiBlockProps) {
//   const [color, setColor] = useState<string>("transparent");
//   const [text, setText] = useState<string>(type);
//   const [apiType, setApiType] = useState<string>(type);
//   const [isPopoverOpen, setPopoverOpen] = useState<boolean>(false);
//   const [width, setWidth] = useState<number>(200); // Default width
//   const [height, setHeight] = useState<number>(100); // Default height

//   const blockRef = useRef<HTMLDivElement | null>(null);
//   const isResizing = useRef<boolean>(false);
//   const lastMousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

//   const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setColor(event.target.value);
//   };

//   const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setText(event.target.value);
//   };

//   const handleRightClick = (event: React.MouseEvent) => {
//     event.preventDefault();
//     setPopoverOpen(true);
//   };

//   const handleResizeMouseDown = (event: MouseEvent) => {
//     isResizing.current = true;
//     lastMousePosition.current = { x: event.clientX, y: event.clientY };
//     event.preventDefault();
//   };

//   return (
//     <div
//       id={id}
//       ref={ref}
//       style={style}
//       className="rounded-md border-[2px] border-neutral-500/70 dark:border-neutral-400 p-4 cursor-pointer cursor-grab w-[200px] h-[100px] flex flex-col items-center justify-center gap-2"
//       onMouseDown={onmousedown}
//       draggable
//       onContextMenu={handleRightClick}
//     >
//       {shownode && (
//         <div className="flex justify-start items-center">
//           <div className=" translate-x-[150px] w-20 h-[3px] rounded-r-md  bg-neutral-300"></div>
//           <div className="translate-x-[150px]">
//             <PlusCircle className="text-neutral-600" />
//           </div>
//         </div>
//       )}
//
//     </div>
//   );
// }
