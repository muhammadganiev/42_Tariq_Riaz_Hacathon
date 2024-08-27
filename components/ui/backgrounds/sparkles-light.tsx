"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundBeams } from "../background-beams";
import { TextHoverEffect } from "../text-hover-effect";

export function SparklesLight() {
  return (
    <div className="h-full w-full  bg-black flex flex-col items-center justify-center">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Eclipse Spiral
      </h1>
      <div className="w-[100rem] h-40 relative ">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-3/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-3/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.1}
          maxSize={0.5}
          particleDensity={2000}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(800px_300px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
