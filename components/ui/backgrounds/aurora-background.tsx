"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../aurora-background";
import TR_logo from "@/public/TR_black_text.png";
import Logo from "@/components/icons/Logo";

interface AuroraBackgroundDemoProps {
  showContent?: boolean;
}

export function AuroraBackgroundDemo({ showContent = true }: AuroraBackgroundDemoProps) {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-2 items-center justify-center px-4"
      >
        {showContent && (
          <>
            <Logo Logo_src={TR_logo} width={300} height={300} />
            <div className="text-3xl md:text-7xl font-bold text-main_color dark:text-white text-center">
              Expand your imagination.
            </div>
            <div className="font-extralight text-base md:text-4xl text-main_color dark:text-neutral-200 py-4">
              Time to impress the world
            </div>
            <button className="border border-main_color bg-transparent dark:bg-white rounded-full w-fit text-main_color hover:text-white hover:bg-main_color dark:text-black px-4 py-2 transition-colors duration-200 ease-in-out">
              Shop now
            </button>
          </>
        )}
      </motion.div>
    </AuroraBackground>
  );
}
