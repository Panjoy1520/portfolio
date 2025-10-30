"use client";

import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const scroller = containerRef.current.querySelector(".scroller-content");

      // Duplicate content *once* for smooth loop
      scroller.innerHTML += scroller.innerHTML;

      // Setup animation variables
      const scrollSpeed =
        speed === "fast" ? 20 : speed === "normal" ? 40 : 80;

      containerRef.current.style.setProperty(
        "--animation-duration",
        `${scrollSpeed}s`
      );
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "normal" : "reverse"
      );

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "scroller-content flex flex-nowrap gap-4 py-6 will-change-transform",
          start && "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center w-[100px] h-[120px] shrink-0 rounded-2xl bg-neutral-100/60 dark:bg-neutral-800/50 p-3 shadow-md border border-neutral-200 dark:border-neutral-700 backdrop-blur-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 object-contain mb-2"
            />
            <span className="text-sm text-center font-medium text-neutral-700 dark:text-gray-200 bg-transparent">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
