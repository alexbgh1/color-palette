"use client";
import { useState } from "react";

import SelectColors from "@/app/components/Colors/SelectColors";
import Colors from "@/app/components/Colors/Colors";
import SavedColorPalettes from "@/app/components/Colors/saved/SavedColorPalettes";
import { useLocalStorage } from "./hooks/useLocalStorage";

import { SAVED_COLORS } from "@/app/constants/_localStorage";

export default function Home() {
  const [colors, setColors] = useState({
    colors: ["#b4d1f3", "#6d9ee3", "#153b93"],
    step: 5,
  });

  const [savedColorPalettes, setSavedColorPalettes] = useLocalStorage(
    SAVED_COLORS,
    []
  );

  return (
    <>
      <div className="flex-1 w-full mb-4 p-4">
        <SelectColors colors={colors} setColors={setColors} />
        <main className="container m-auto flex flex-col items-center md:flex-row gap-2 rounded-md py-3 mb-8">
          <Colors
            colors={colors}
            setSavedColorPalettes={setSavedColorPalettes}
          />
        </main>
        <section className="container m-auto mb-8 py-3 flex flex-col">
          <SavedColorPalettes
            savedColorPalettes={savedColorPalettes}
            setSavedColorPalettes={setSavedColorPalettes}
          />
        </section>
      </div>
    </>
  );
}
