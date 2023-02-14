import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config';
const twFullConfig = resolveConfig(tailwindConfig);
const themeColors = twFullConfig.theme.colors;

type ColorPaletteType = {
  title: string;
  children: React.ReactNode;
};

type ColorItemType = {
  title: string;
  subtitle: string;
  colors: ColorType[];
};

type ColorType = {
  name: string;
  value: string;
};

const Meta = {
  title: 'Colors'
};

export const Default = () => {
  const mappedColors = Object.entries(themeColors).reduce<ColorType | object>((acc, [name, values]) => {
    acc[name] = Object.entries(values).map(([name, value]) => ({
      name,
      value
    }));
    return acc;
  }, {});

  console.log('mapped colors', mappedColors);

  return (
    <>
      <ColorPalette title="Theme Colors">
        <ColorItem title="theme.color.primary" subtitle="Blue Cerulean" colors={mappedColors['primary']} />
        <ColorItem title="theme.color.secondary" subtitle="Green Emerald" colors={mappedColors['error']} />
      </ColorPalette>

      <ColorPalette title="Status Colors">
        <ColorItem title="theme.color.primary" subtitle="Blue Cerulean" colors={mappedColors['primary']} />
        <ColorItem title="theme.color.secondary" subtitle="Green Emerald" colors={mappedColors['error']} />
      </ColorPalette>

      <ColorPalette title="Tailwind Default Colors">
        <ColorItem title="theme.color.primary" subtitle="Blue Cerulean" colors={mappedColors['primary']} />
        <ColorItem title="theme.color.secondary" subtitle="Green Emerald" colors={mappedColors['error']} />
      </ColorPalette>
    </>
  );
};

export default Meta;

const ColorPalette = (props: ColorPaletteType) => {
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

const ColorItem = (props: ColorItemType) => {
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
