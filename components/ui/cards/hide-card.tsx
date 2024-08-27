import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { StaticImageData } from "next/image";
import { Button } from "../button";

interface LogoProps {
    Logo_src: string | StaticImageData;
    title: string;
    description: string;
  }

export function HideCard({ Logo_src,title,description }: LogoProps) {
  return (
    <div className="border  border-main_color/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-main_color" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-main_color" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-main_color" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-main_color" />

      <EvervaultCard text="hover" logoSrc={Logo_src}/>
      <h2 className="dark:text-white text-main_color mt-4 text-lg font-bold">
        {title}
      </h2>

      <h2 className="dark:text-white text-black my-2 text-sm font-light">
        {description}
      </h2>
      <Button variant={'outline'} className="border-main_color text-main_color hover:bg-main_color hover:text-white rounded-full"> Buy </Button>
    </div>
  );
}
