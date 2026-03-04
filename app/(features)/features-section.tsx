"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { Diagram, Code1, Box1, Flash, Global, Element3 } from "iconsax-reactjs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  badge: string;
  color: string;
}
const features = [
  {
    title: "Drag-and-Drop Interface",
    description:
      "Easily create APIs by dragging and dropping pre-built blocks, no coding required.",
    icon: Element3,
    color: "text-blue-500",
    badge: "User-Friendly",
  },
  {
    title: "Node-Based Structure",
    description:
      "Connect API blocks in a visual node structure for intuitive API design.",
    icon: Diagram,
    color: "text-green-500",
    badge: "Intuitive",
  },
  {
    title: "Instant Code Generation",
    description:
      "Generate Node.js API code automatically based on your visual design.",
    icon: Code1,
    color: "text-purple-500",
    badge: "Time-Saving",
  },
  {
    title: "Pre-built API Blocks",
    description:
      "Choose from a variety of API blocks for different functionalities and endpoints.",
    icon: Box1,
    color: "text-yellow-500",
    badge: "Versatile",
  },
  {
    title: "Real-time Preview",
    description: "See your API structure and flow in real-time as you build.",
    icon: Flash,
    color: "text-pink-500",
    badge: "Interactive",
  },
  {
    title: "One-Click Deployment",
    description:
      "Deploy your API directly to popular hosting platforms with a single click.",
    icon: Global,
    color: "text-indigo-500",
    badge: "Efficient",
  },
];

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-light-gradient dark:bg-dark-gradient border-t-[1px] dark:border-neutral-800 border-neutral-200 border-b-[1px] ">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Build Powerful APIs Without Code
        </motion.h2>
        <motion.p
          className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Create, connect, and deploy Node.js APIs with our intuitive visual
          builder
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative"
              >
                <Card className="bg-background/60 backdrop-blur-sm border-primary/10 transition-all duration-300 overflow-hidden group h-full">
                  <CardHeader className="relative">
                    <motion.div
                      className={`absolute inset-0 ${feature.color} opacity-10 rounded-full`}
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <feature.icon
                      variant="Bold"
                      className={`w-10 h-10 ${feature.color} mb-4 relative z-10`}
                    />
                    <Badge
                      variant="secondary"
                      className="mb-2 text-xs font-normal absolute right-4 top-2"
                    >
                      {feature.badge}
                    </Badge>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                <motion.div
                  className="absolute inset-0 border-2 rounded-lg pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    borderColor: feature.color,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
