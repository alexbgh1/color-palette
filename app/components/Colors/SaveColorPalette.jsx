import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { MAX_NAME_LENGTH } from "@/app/constants/selectColor";
import { SaveFileIcon } from "@/app/icons/icons";

/* Struct savedColorPalette = {
  id: uuidv4(),
  name: "My Color Palette",
  colors: ["#ff00ff", ...],
  step: 5,
  timestamp: 1620000000000,
}
*/

const SaveColors = ({ colorInterpolation, step, setSavedColorPalettes }) => {
  const [name, setName] = useState("");

  const handleSaveColorPalette = () => {
    const confirmSave = confirm(
      "Are you sure you want to save this color palette?"
    );
    if (!confirmSave) return;

    const savedColorPalette = {
      id: uuidv4(),
      name,
      colors: colorInterpolation,
      step: step,
      timestamp: Date.now(),
    };

    setSavedColorPalettes((prev) => [...prev, savedColorPalette]);
    setName("");
    alert("Color Palette Saved!");
  };

  const handleChange = (e) => {
    const name = e.target.value;

    if (name.length > MAX_NAME_LENGTH) {
      alert(
        `Name must be less than ${MAX_NAME_LENGTH} characters. You entered ${name.length} characters.`
      );
      return;
    }
    setName(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveColorPalette();
        }}
        className="flex-1 flex flex-row items-center"
      >
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          className="w-full border bg-gray-100 dark:bg-gray-700 border-gray-300 rounded-sm p-1 text-xs"
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="Colors!!!!!!"
          onChange={handleChange}
        />
      </form>

      <button className="w-6" onClick={handleSaveColorPalette}>
        <SaveFileIcon title="Save Color Palette" />
      </button>
    </>
  );
};

export default SaveColors;
