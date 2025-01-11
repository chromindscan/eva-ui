"use client";

import { Section } from "@/components/section";
import OrbitingCircles from "@/components/ui/orbiting-circles";
import { cubicBezier, motion } from "framer-motion";
import {
  AlertTriangleIcon,
  BrainCircuitIcon,
  DatabaseIcon,
  GitForkIcon,
  HeadsetIcon,
  InfoIcon,
  MessageSquareIcon,
  SearchIcon,
  SquareTerminal,
  UserSearch,
  XCircleIcon,
} from "lucide-react";
import Link from "next/link";

const containerVariants = {
  initial: {},
  whileHover: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Card1() {
  const variant1 = {
    initial: {
      scale: 0.87,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      scale: 0.8,
      boxShadow:
        "rgba(245,40,145,0.35) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    },
  };
  const variant2 = {
    initial: {
      y: -27,
      scale: 0.95,
      transition: {
        delay: 0,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      y: -55,
      scale: 0.87,
      boxShadow:
        "rgba(39,127,245,0.15) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0,
        duration: 0.2,
        ease: "linear",
      },
    },
  };
  const variant3 = {
    initial: {
      y: -25,
      opacity: 0,
      scale: 1,
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "linear",
      },
    },
    whileHover: {
      y: -45,
      opacity: 1,
      scale: 1,
      boxShadow:
        "rgba(39,245,76,0.15) 10px 20px 70px -20px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0.05,
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    initial: {},
    whileHover: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Link href="/playground/tweets" className="h-full">
      <div className="p-0 h-full overflow-hidden border-b lg:border-b-0 lg:border-r">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileHover="whileHover"
          className="flex flex-col gap-y-5 items-center justify-between h-full w-full cursor-pointer"
        >
          <div className="flex h-full w-full items-center justify-center rounded-t-xl border-b">
            <div className="relative flex flex-col items-center justify-center gap-y-2 p-10">
              <motion.div
                variants={variant1}
                className="z-[1] flex h-full w-full items-center justify-between gap-x-2 rounded-md border bg-background p-5 px-2.5 "
              >
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                  {/* <SearchIcon className="h-5 w-5 text-white" /> */}
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="h-2 w-32 rounded-full bg-neutral-800/50 dark:bg-neutral-200/80"></div>
                  <div className="h-2 w-48 rounded-full bg-slate-400/50"></div>
                  <div className="text-xs text-neutral-500">Original Tweet</div>
                </div>
              </motion.div>
              <motion.div
                variants={variant2}
                className="z-[2] flex h-full w-full items-center justify-between gap-x-2 rounded-md border bg-background p-5 px-2.5 "
              >
                <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                  {/* <DatabaseIcon className="h-5 w-5 text-white" /> */}
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="h-2 w-32 rounded-full bg-neutral-800/50 dark:bg-neutral-200/80"></div>
                  <div className="h-2 w-48 rounded-full bg-slate-400/50"></div>
                  <div className="h-2 w-20 rounded-full bg-slate-400/50"></div>
                  <div className="text-xs text-neutral-500">Response Tweet</div>
                </div>
              </motion.div>
              <motion.div
                variants={variant3}
                className="absolute bottom-0 z-[3] m-auto flex h-fit w-fit items-center justify-between gap-x-2 rounded-md border bg-background p-5 px-2.5 "
              >
                <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center">
                  {/* <MessageSquareIcon className="h-5 w-5 text-white" /> */}
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="h-2 w-32 rounded-full bg-neutral-800/50 dark:bg-neutral-200/80"></div>
                  <div className="h-2 w-48 rounded-full bg-slate-400/50"></div>
                  <div className="h-2 w-20 rounded-full bg-slate-400/50"></div>
                  <div className="h-2 w-48 rounded-full bg-slate-400/50"></div>
                  <div className="text-xs text-neutral-500">
                    Evaluation Data
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-y-1 px-5 pb-4 items-start w-full">
            <h2 className="font-semibold tracking-tight text-lg">
              Evaluate Reply Tweet
            </h2>
            <p className="text-sm text-muted-foreground">
              Evaluate the quality of tweet responses.
            </p>
          </div>
        </motion.div>
      </div>
    </Link>
  );
}

const Card2 = () => {
  const logs = [
    {
      id: 1,
      type: "info",
      timestamp: "2023-12-15 14:23:45",
      message: "Truth score: 85%",
      icon: (
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
          {/* <InfoIcon className="h-5 w-5 text-white" /> */}
        </div>
      ),
    },
    {
      id: 2,
      type: "action",
      timestamp: "2023-12-15 14:23:47",
      message: "Accuracy score: 90%",
      icon: (
        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
          {/* <DatabaseIcon className="h-5 w-5 text-white" /> */}
        </div>
      ),
    },
    {
      id: 3,
      type: "decision",
      timestamp: "2023-12-15 14:23:50",
      message: "Creativity score: 80%",
      icon: (
        <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center">
          {/* <BrainCircuitIcon className="h-5 w-5 text-white" /> */}
        </div>
      ),
    },
    {
      id: 4,
      type: "warning",
      timestamp: "2023-12-15 14:23:52",
      message: "Engagement score: 75%",
      icon: (
        <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
          {/* <AlertTriangleIcon className="h-5 w-5 text-white" /> */}
        </div>
      ),
    },
    {
      id: 5,
      type: "error",
      timestamp: "2023-12-15 14:23:55",
      message: "Failed to connect to secondary database.",
      icon: (
        <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center">
          {/* <XCircleIcon className="h-5 w-5 text-white" /> */}
        </div>
      ),
    },
  ];
  return (
    <Link href="/playground/virtuals" className="h-full">
      <div className="p-0 h-full overflow-hidden border-b lg:border-b-0 lg:border-r">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileHover="whileHover"
          className="flex flex-col gap-y-5 items-center justify-between h-full w-full cursor-pointer"
        >
          <div className="h-full border-b items-center justify-center overflow-hidden bg-transparent rounded-t-xl w-full flex ">
            <motion.div className="p-5 rounded-t-md cursor-pointer overflow-hidden h-[270px] flex flex-col gap-y-3.5 w-full">
              {logs.map((log, index) => (
                <motion.div
                  key={log.id}
                  className="p-4 bg-transparent backdrop-blur-md shadow-[0px_0px_40px_-25px_rgba(0,0,0,0.25)] border border-border origin-right w-full rounded-md flex items-center"
                  custom={index}
                  variants={{
                    initial: (index: number) => ({
                      y: 0,
                      scale: index === 4 ? 0.9 : 1,
                      opacity: 1,
                      transition: {
                        delay: 0.05,
                        duration: 0.2,
                        ease: cubicBezier(0.22, 1, 0.36, 1),
                      },
                    }),
                    whileHover: (index: number) => ({
                      y: -85,
                      opacity: index === 4 ? 1 : 0.6,
                      scale: index === 0 ? 0.85 : index === 4 ? 1.1 : 1,
                      transition: {
                        delay: 0.05,
                        duration: 0.2,
                        ease: cubicBezier(0.22, 1, 0.36, 1),
                      },
                    }),
                  }}
                  transition={{
                    type: "spring",
                    damping: 40,
                    stiffness: 600,
                  }}
                >
                  <div className="mr-3">{log.icon}</div>
                  <div className="flex-grow">
                    <p className="text-muted-foreground text-xs">
                      {log.message}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="flex flex-col gap-y-1 px-5 pb-4 items-start w-full">
            <h2 className="font-semibold tracking-tight text-lg">
              Virtuals Sandbox
            </h2>
            <p className="text-sm text-muted-foreground">
              Track progress and performance.
            </p>
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 h-[calc(100dvh-56px)] border border-b-0">
      <Card1 />
      <Card2 />
    </div>
  );
}