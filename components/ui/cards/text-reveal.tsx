"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function TextReveal() {
  return (
    <div className="flex items-center justify-center  h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Yor great chooice starts here"
        revealText="Eclipse Spiral - Change the world"
      >
      </TextRevealCard>
    </div>
  );
}
