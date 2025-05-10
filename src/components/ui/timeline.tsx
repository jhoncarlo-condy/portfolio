"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from 'next/image';
interface TimelineEntry {
  title: string;
  date: string;
  content: React.ReactNode;
  image: string; // Add image path
  imageAlt?: string; // Add alt text for accessibility
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const fadeIn = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="w-full bg-white dark:bg-neutral-950 py-20 px-4" ref={containerRef}>
      <div className="max-w-6xl mx-auto"> {/* Increased max-width for images */}
        <div className="relative">
          {/* Vertical timeline line - centered */}
          <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-neutral-200 dark:bg-neutral-800">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 to-purple-600"
              style={{ scaleY: lineHeight }}
            />
          </div>

          {data.map((item, index) => {
            const isEven = index % 2 === 0;
            const hasImage = item.image;
            
            return (
              <motion.div
                key={index}
                className="relative mb-16 pl-16 md:pl-0 flex flex-col md:flex-row"
                style={{ opacity: fadeIn }}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 -ml-3.5 top-1 w-7 h-7 rounded-full bg-white dark:bg-neutral-900 border-4 border-blue-500 z-10" />

                {/* Content Card - now takes half width when image exists */}
                <div className={`${hasImage ? "md:w-5/12" : "md:w-full"} ${isEven ? "md:mr-auto md:pr-8 order-1" : "md:ml-auto md:pl-8 order-2"}`}>
                  <div className="flex flex-col space-y-1 mb-3">
                    <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                      {item.title}
                    </h3>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {item.date}
                    </span>
                  </div>
                  
                  <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    {item.content}
                  </div>
                </div>

                {/* Image Container - appears on opposite side */}
                {hasImage && (
                  <div className={`mt-4 md:mt-0 ${isEven ? "md:ml-auto md:pl-8 order-2" : "md:mr-auto md:pr-8 order-1"}`}>
                    <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden  border-neutral-200 dark:border-neutral-800">
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        height={200}
                        width={200}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};