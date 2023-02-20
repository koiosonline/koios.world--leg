type ColorItemType = {
  title: string;
  subtitle: string;
  colors: ColorType[];
};

export type ColorType = {
  name: string;
  value: string;
};

export const ColorItem = (props: ColorItemType) => {
  const { title, subtitle, colors } = props;

  return (
    <div className="flex mb-4">
      <div className="flex-[0_0_30%]">
        <h2 className="subtitle1 lowercase">{title}</h2>
        <h3 className="subtitle1 capitalize font-normal text-gray-400">{subtitle}</h3>
      </div>

      <section className="flex flex-col w-full">
        <ul className="flex flex-1' w-full mb-0.5">
          {colors.map((color: ColorType) => (
            <li
              key={color.name}
              className="w-full h-12 first:rounded-l-md last:rounded-r-md"
              style={{
                backgroundColor: color.value
              }}
            />
          ))}
        </ul>

        <ul className="flex flex-1' w-full">
          {colors.map((color: ColorType) => (
            <li key={color.name} className="w-full text-center subtitle1 normal-case font-normal text-gray-400">
              <p>{color.name}</p>
              <p>{color.value}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
