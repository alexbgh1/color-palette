import { MIN_STEP, MAX_STEP } from "@/app/constants/selectColor";

const SelectColors = ({ colors, setColors }) => {
  const handleNumberChange = (e) => {
    // Check if the value is a number
    if (Number(e.target.value) < MIN_STEP || e.target.value > MAX_STEP) return;
    setColors({ ...colors, step: e.target.value });
  };

  return (
    <section className="container mx-auto mb-3 flex flex-col px-2 py-8 rounded-sm shadow-md bg-white dark:bg-gray-800">
      {/* <!--Title Colors Select --> */}
      <h2 className="text-xl  text-gray-800 dark:text-white mb-4 text-center">
        Select your config
      </h2>

      {/* <!--Form Colors Select --> */}
      <form>
        <fieldset className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-evenly">
          {/* <!-- 1. First Input: Step --> */}
          <div className="w-full h-full flex flex-col items-center">
            <label className="text-sm mb-1" htmlFor="step">
              Step
            </label>
            <input
              className="w-full h-8 rounded-sm bg-gray-100 dark:bg-gray-700"
              type="number"
              id="step"
              value={colors.step}
              min={MIN_STEP}
              max={MAX_STEP}
              onChange={handleNumberChange}
            />
          </div>

          {/* <!-- [...]. Other Input: Colors --> */}
          {colors.colors.map((color, index) => {
            return (
              <div key={index} className="w-full flex flex-col items-center">
                <label className="text-sm mb-1" htmlFor={`color-${index}`}>
                  Color {index + 1}
                </label>
                <input
                  className="rounded-md"
                  style={{ boxShadow: `0 0 0 1px ${color}` }}
                  type="color"
                  id={`color-${index}`}
                  name={`color-${index}`}
                  value={color}
                  title={`${color}`}
                  onChange={(e) => {
                    const newColors = [...colors.colors];
                    newColors[index] = e.target.value;
                    setColors({ ...colors, colors: newColors });
                  }}
                />
              </div>
            );
          })}
        </fieldset>
      </form>
    </section>
  );
};

export default SelectColors;
