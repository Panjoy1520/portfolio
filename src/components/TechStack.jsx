"use client";

import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards.jsx";

export function TechStack() {
  return (
    <div
      className="h-[10rem] rounded-md flex flex-col antialiased bg-special-color dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
      style={{animationDuration : 3}}
    >
      <InfiniteMovingCards items={techStack} direction="right" speed="fast" />
    </div>
  );
}

const techStack = [
  {
    image: "/assets/logos/react.svg",
    name: "React",
  },

  {
    image: "/assets/logos/tailwindcss.svg",
    name: "Tailwind CSS",
  },
  {
    image: "/assets/logos/github.svg",
    name: "GitHub",
  },

  {
    image: "/assets/logos/java.png",
    name: "Java",
  },
  {
    image: "/assets/logos/html.png",
    name: "HTML",
  },
  {
    image: "/assets/logos/css3.svg",
    name: "CSS",
  },
  {
    image: "/assets/logos/js.png",
    name: "Javascript",
  },
  {
    image: "/assets/logos/spring-boot.png",
    name: "Spring Boot",
  },

  {
    image: "/assets/logos/git.svg",
    name: "Git",
  },
];
