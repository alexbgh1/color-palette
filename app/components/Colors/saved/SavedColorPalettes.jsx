import { useState, useEffect } from "react";
import ShowSavedColorPalette from "./ShowSavedColorPalette";
import { Spinner } from "@/app/icons/icons";

const SavedColorPalettes = ({ savedColorPalettes, setSavedColorPalettes }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <>
        <h2 className="text-xl mb-4 underline underline-offset-2 text-center md:text-left">
          Saved Color Palettes
        </h2>
        <Spinner />
      </>
    );

  return (
    <>
      {/* <!-- Saved Color Palettes section -->*/}
      {/* <!-- Saved Color Palettes Title -->*/}
      <h2 className="text-xl mb-4 underline underline-offset-2 text-center md:text-left">
        Saved Color Palettes
      </h2>
      {/* <!-- Saved Color Palettes -->*/}
      <section className="flex flex-col items-center justify-center">
        {savedColorPalettes.map((savedColorPalette, index) => {
          return (
            <ShowSavedColorPalette
              key={index}
              savedColorPalette={savedColorPalette}
              savedColorPalettes={savedColorPalettes}
              setSavedColorPalettes={setSavedColorPalettes}
            />
          );
        })}
      </section>
    </>
  );
};

export default SavedColorPalettes;
