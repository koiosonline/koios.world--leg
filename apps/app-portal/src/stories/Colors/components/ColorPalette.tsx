type ColorPaletteType = {
  title: string;
  children: React.ReactNode;
};

export const ColorPalette = (props: ColorPaletteType) => {
  return (
    <section className="my-8">
      <h2 className="h4 mb-4">{props.title}</h2>

      <div className="flex mb-4 text-gray-400">
        <h3 className="subtitle1 capitalize flex-[0_0_30%] ">Name</h3>
        <h3 className="subtitle1 capitalize flex-1">Swatches</h3>
      </div>
      {props.children}
    </section>
  );
};
