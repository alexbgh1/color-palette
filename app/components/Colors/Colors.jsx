import Color from "@/app/components/Colors/Color";
import SaveColorPalette from "@/app/components/Colors/SaveColorPalette";
import { colorLinearInterpolation } from "@/app/helpers/colors-functions";

const Colors = ({ colors, setSavedColorPalettes }) => {
  const colorInterpolation = colorLinearInterpolation(colors); // ["#ff00ff", ...]

  //  <!-- Main content -->
  return (
    <>
      {/* <!-- Save Color Palette --> */}
      <aside className="w-72 md:w-96 flex items-center gap-3 mb-2 md:mb-0 pr-0 md:pr-2 py-1">
        <SaveColorPalette
          colorInterpolation={colorInterpolation}
          step={colors.step}
          setSavedColorPalettes={setSavedColorPalettes}
        />
      </aside>

      {/* <!-- Show Interpolation Colors --> */}
      <div className="w-full flex gap-2 items-center justify-center">
        {colorInterpolation.map((color, index) => {
          return <Color key={index} color={color} />;
        })}
      </div>
    </>
  );
};

export default Colors;
