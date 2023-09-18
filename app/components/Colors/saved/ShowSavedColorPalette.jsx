import Color from "@/app/components/Colors/Color";
import { DownloadFileIcon, ThrashIcon } from "@/app/icons/icons";

const ShowSavedColorPalette = ({ savedColorPalette, savedColorPalettes, setSavedColorPalettes }) => {
  const handleDeleteColorPalette = (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this Color Palette?");
    if (!confirmDelete) return;

    // Filter and return all savedColorPalettes that don't match the id
    const newSavedColorPalettes = savedColorPalettes.filter((savedColorPalette) => savedColorPalette.id !== id);

    setSavedColorPalettes(newSavedColorPalettes);
  };

  const handleDownloadColorPalette = (savedColorPalette) => {
    const colors = savedColorPalette.colors;
    let name = savedColorPalette.name;

    // Regex to check valid name for file
    const regex = /^[a-zA-Z0-9-_]+$/;
    if (!regex.test(name)) {
      // Replace invalid characters with underscore
      name = name.replace(/[^a-zA-Z0-9-_]/g, "_");
    }

    // file object
    const data = new Blob([colors.join("\n")], { type: "text/plain" });

    // Create url
    const elementAnchor = document.createElement("a");
    elementAnchor.href = URL.createObjectURL(data);
    elementAnchor.download = `${name}.txt`;
    elementAnchor.click();
  };

  return (
    // <!-- Each Saved Color Palette -->
    <article className="w-full flex flex-wrap md:flex-nowrap gap-2 items-center justify-center mb-8">
      {/* <!-- Name Color Palette --> */}
      <section className="w-72 md:w-96 flex flex-row items-center justify-between gap-2 bg-gray-100 border-4 border-double border-gray-300 dark:border-gray-400 dark:bg-gray-700 px-2 py-1 shadow-sm">
        <p className="text-sm rounded-s">{savedColorPalette.name}</p>
        <div className="flex flex-row gap-2">
          <button className="w-3" onClick={() => handleDeleteColorPalette(savedColorPalette.id)}>
            <ThrashIcon fill="accent" title="Delete Color Palette" />
          </button>
          <button className="w-3" value="download" onClick={() => handleDownloadColorPalette(savedColorPalette)}>
            <DownloadFileIcon title="Download as txt" />
          </button>
        </div>
      </section>
      {/* <!-- Color Palette --> */}
      <div className="w-full flex gap-2 items-center justify-center">
        {savedColorPalette.colors.map((color, index) => {
          return <Color key={index} color={color} />;
        })}
      </div>
    </article>
  );
};

export default ShowSavedColorPalette;
