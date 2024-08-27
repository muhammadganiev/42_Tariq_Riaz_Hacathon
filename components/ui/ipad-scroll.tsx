"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import Poster from "@/public/poster.jpg"
import myVideo from "@/videos/main_video.mp4"
import Video from 'next-video';
import BackgroundVideo from 'next-video/background-video';

export function IpadScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
            titleComponent={
            <>
                <h1 className="text-4xl font-bold md:text-[6rem] mt-1 leading-none text-main_color dark:text-white">
                THE DAY <br />
                HAS COME
                </h1>
            </>
            }
        >
        <Video className="w-full h-auto" src={myVideo} poster={Poster}></Video>
      </ContainerScroll>
    </div>
  );
}
