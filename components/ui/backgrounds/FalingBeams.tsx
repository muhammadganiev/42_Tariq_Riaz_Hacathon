import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "../button";

export function FalingBeams() {
  return (
    <BackgroundBeamsWithCollision>
        <div className="gap-4 w-full h-full flex flex-col content-center scroll-pt items-center">
            <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-neutral-800 dark:text-white font-sans tracking-tight">
                Don't miss it{" "}
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                    <span className=""> | Order now!</span>
                </div>
                </div>
            </h2>
            <Button variant={'outline'} className="border-main_color text-main_color hover:bg-main_color hover:text-white rounded-full text-2xl font-light"> Shop now </Button>
        </div>
      
      
    </BackgroundBeamsWithCollision>
  );
}
