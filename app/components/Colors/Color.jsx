import { useState } from "react";
import styles from "./tooltip-color.module.css";
import { contrastColor } from "@/app/helpers/colors-functions";

const TooltipText = ({ tooltipMessage, color }) => {
  const constrastColorBg = contrastColor(color);
  return (
    <p className={`w-full text-xs break-words ${styles.tooltiptext}`}>
      {tooltipMessage}{" "}
      <span
        className="rounded-full text-xs px-1 py-1 font-bold"
        style={{ backgroundColor: `${constrastColorBg}`, color: `${color}` }}
      >
        {color}
      </span>
    </p>
  );
};

const Color = ({ color }) => {
  const [tooltipMessage, setTooltipMessage] = useState("Copy");

  const handleCopy = () => {
    // Copy color to clipboard
    navigator.clipboard.writeText(color);
    setTooltipMessage("Copied!");
  };

  const handleOnMouseOut = () => {
    // Reset tooltip
    setTooltipMessage("Copy");
  };

  return (
    <div className={`w-full h-10 ${styles.tooltip}`}>
      <button
        className={`h-full w-full shadow-md rounded-sm`}
        style={{ backgroundColor: `${color}` }}
        onClick={handleCopy}
        onMouseOut={handleOnMouseOut}
      >
        {/* <!-- sr-only: Screen Reader Only --> */}
        <span className="sr-only">{color}</span>
        {/* <!-- Tooltip --> */}
        <TooltipText tooltipMessage={tooltipMessage} color={color} />
      </button>
    </div>
  );
};

export default Color;
