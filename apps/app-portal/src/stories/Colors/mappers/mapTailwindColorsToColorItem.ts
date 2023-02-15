import { RecursiveKeyValuePair } from "tailwindcss/types/config";
import { ColorType } from "../components/ColorItem";

export const mapTailwindColorsToColorItem = (colors: RecursiveKeyValuePair<string, string>) => {
    return Object.entries(colors).reduce<ColorType | object>((acc, [name, values]) => {
        acc[name] = Object.entries(values).map(([name, value]) => ({
          name,
          value
        }));
        return acc;
      }, {});
}