"use client";
import React, { useEffect, useRef } from "react";

export const Quote = () => {
  const containerRef = useRef(null);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const textParts = [
    '"Any fool can write code that a computer can understand. ',
    "Good programmers write code ",
    'that humans can understand." — Martin Fowler',
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionRect = sectionRef.current?.getBoundingClientRect();
      if (!sectionRect) return;

      const sectionHeight = sectionRef.current?.offsetHeight || 0;
      const viewportHeight = window.innerHeight;
      const scrollProgress =
        -sectionRect.top / (sectionHeight - viewportHeight);

      const progress = Math.max(0, Math.min(1, scrollProgress));

      const thresholds = [0.2, 0.4, 0.6];

      textRefs.current.forEach((ref, index) => {
        if (ref) {
          if (progress >= thresholds[index]) {
            ref.style.opacity = "1";
            ref.style.color = "rgba(255, 97, 29)";
          } else {
            ref.style.opacity = "0.3";
            ref.style.color = "rgba(255, 255, 255, 0.1)";
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="h-[180vh]">
      <div
        ref={containerRef}
        className="h-screen flex items-center justify-center bg-[#1a1a1a] font-medium text-3xl md:text-4xl xl:text-5xl p-4 md:pl-16 sticky top-0"
      >
        <div className="max-w-4xl">
          {textParts.map((part, index) => (
            <span
              key={index}
              ref={(el) => {
                textRefs.current[index] = el;
              }}
              className="transition-all duration-700"
              style={{ opacity: 0.3, color: "rgba(214, 210, 189, 0.3)" }}
            >
              {part}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
