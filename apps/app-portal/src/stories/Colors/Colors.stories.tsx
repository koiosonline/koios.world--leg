import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../../tailwind.config';
import { ColorItem } from './components/ColorItem';
import { ColorPalette } from './components/ColorPalette';
import { mapTailwindColorsToColorItem } from './mappers/mapTailwindColorsToColorItem';

const twFullConfig = resolveConfig(tailwindConfig);
const themeColors = twFullConfig.theme.colors;

const Meta = {
  title: 'Colors'
};

export const Default = () => {
  const mappedColors = mapTailwindColorsToColorItem(themeColors);

  return (
    <>
      <ColorPalette title="Theme Colors">
        <ColorItem title="theme.color.primary" subtitle="Blue Cerulean" colors={mappedColors['primary']} />
        <ColorItem title="theme.color.secondary" subtitle="Green Emerald" colors={mappedColors['secondary']} />
      </ColorPalette>

      <ColorPalette title="Status Colors">
        <ColorItem title="theme.color.error" subtitle="Pomegranate" colors={mappedColors['error']} />
        <ColorItem title="theme.color.warning" subtitle="Sunshade" colors={mappedColors['warning']} />
        <ColorItem title="theme.color.info" subtitle="Dodger Blue" colors={mappedColors['info']} />
        <ColorItem title="theme.color.success" subtitle="Fern" colors={mappedColors['success']} />
      </ColorPalette>

      <ColorPalette title="Tailwind Default Colors">
        <ColorItem title="theme.color.slate" subtitle="Slate" colors={mappedColors['slate']} />
        <ColorItem title="theme.color.gray" subtitle="Gray" colors={mappedColors['gray']} />
        <ColorItem title="theme.color.zinc" subtitle="Zinc" colors={mappedColors['zinc']} />
        <ColorItem title="theme.color.neutral" subtitle="Neutral" colors={mappedColors['neutral']} />
        <ColorItem title="theme.color.stone" subtitle="Stone" colors={mappedColors['stone']} />
        <ColorItem title="theme.color.red" subtitle="Red" colors={mappedColors['red']} />
        <ColorItem title="theme.color.orange" subtitle="Orange" colors={mappedColors['orange']} />
        <ColorItem title="theme.color.amber" subtitle="Amber" colors={mappedColors['amber']} />
        <ColorItem title="theme.color.yellow" subtitle="Yellow" colors={mappedColors['yellow']} />
        <ColorItem title="theme.color.lime" subtitle="Lime" colors={mappedColors['lime']} />
        <ColorItem title="theme.color.green" subtitle="Green" colors={mappedColors['green']} />
        <ColorItem title="theme.color.emerald" subtitle="Emerald" colors={mappedColors['emerald']} />
        <ColorItem title="theme.color.teal" subtitle="Teal" colors={mappedColors['teal']} />
        <ColorItem title="theme.color.cyan" subtitle="Cyan" colors={mappedColors['cyan']} />
        <ColorItem title="theme.color.sky" subtitle="Sky" colors={mappedColors['sky']} />
        <ColorItem title="theme.color.blue" subtitle="Blue" colors={mappedColors['blue']} />
        <ColorItem title="theme.color.indigo" subtitle="Indigo" colors={mappedColors['indigo']} />
        <ColorItem title="theme.color.violet" subtitle="Violet" colors={mappedColors['violet']} />
        <ColorItem title="theme.color.purple" subtitle="Purple" colors={mappedColors['purple']} />
        <ColorItem title="theme.color.fuchsia" subtitle="Fuchsia" colors={mappedColors['fuchsia']} />
        <ColorItem title="theme.color.pink" subtitle="Pink" colors={mappedColors['pink']} />
        <ColorItem title="theme.color.rose" subtitle="Rose" colors={mappedColors['rose']} />
      </ColorPalette>
    </>
  );
};

export default Meta;
