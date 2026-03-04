"use client";

import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
// import styles from "../globals.css";
export default function FeatureSection() {
  const features = [
    {
      icon: "speed",
      title: "Lightning Fast",
      description:
        "Optimized for speed, ensuring quick load times and smooth interactions.",
    },
    {
      icon: "palette",
      title: "Beautiful Design",
      description:
        "Sleek, modern interfaces that captivate and engage your users.",
    },
    {
      icon: "security",
      title: "Secure & Reliable",
      description:
        "Built with top-notch security practices to keep your data safe.",
    },
    {
      icon: "devices",
      title: "Fully Responsive",
      description: "Seamless experience across all devices and screen sizes.",
    },
    {
      icon: "code",
      title: "Clean Code",
      description:
        "Well-structured, maintainable code for easy updates and scaling.",
    },
    {
      icon: "support_agent",
      title: "24/7 Support",
      description:
        "Round-the-clock assistance to address any concerns or issues.",
    },
    {
      icon: "cloud",
      title: "Cloud-Ready",
      description: "Easily deploy and scale your application in the cloud.",
    },
    {
      icon: "analytics",
      title: "Advanced Analytics",
      description: "Gain insights with powerful built-in analytics tools.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="">
        <div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-12">
              <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Why choose NoCode API?
                </h2>
                <p className="text-xl text-gray-500">
                  Empowering developers to build APIs without code.
                </p>
              </div>
              <div className="text-center font-bold text-4xl text-gray-900">
                Features
              </div>
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
              >
                {features.map((feature) => (
                  <li key={feature.title}>
                    <div className="space-y-4 border border-gray-50 p-4 shadow-md drop-shadow rounded-lg bg-indigo-800 animateit ">
                      <div className="flex items-center space-x-4 ">
                        <div className="flex items-center">
                          <span className="material-symbols-outlined text-indigo-200">{feature.icon } </span>
                        </div>
                        <h3 className="text-lg font-medium leading-6 text-neutral-300">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-base text-gray-300/80">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
