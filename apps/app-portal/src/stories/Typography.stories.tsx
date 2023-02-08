import React, { useEffect, useRef, useState } from 'react';
import { TypographyEnum, useSize } from '@koios-world/shared-ui';

type TypographyExampleProps = {
  element: React.ElementType;
  component?: TypographyEnum;
  sampleText: string;
};

const Meta = {
  title: 'Typography',
};

const HeaderSampleText =
  'A lively and playful place bordering learning institutions';
const BodySampleText =
  'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.';

const fontProperties = (
  variant: string,
  family: string,
  size: string,
  lineHeight: string,
  ratio: number,
  fontWeight: string
) =>
  `${variant} - ${family} // Size: ${size}, Line-Height: ${lineHeight}, Ratio: ${ratio}, Weight: ${fontWeight}`;

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const roundValue = (value: number) => {
  // 2 decimals
  return Math.round(value * 1e2) / 1e2;
};

export const Default = () => {
  return (
    <>
      <h2 className="h1">Typography</h2>
      <ul className="flex flex-col gap-10">
        <TypographyExample element="h1" sampleText={HeaderSampleText} />
        <TypographyExample element="h2" sampleText={HeaderSampleText} />
        <TypographyExample element="h3" sampleText={HeaderSampleText} />
        <TypographyExample element="h4" sampleText={HeaderSampleText} />
        <TypographyExample element="h5" sampleText={HeaderSampleText} />
        <TypographyExample element="h6" sampleText={HeaderSampleText} />
        <TypographyExample
          element="p"
          component={TypographyEnum.subtitle1}
          sampleText={HeaderSampleText}
        />
        <TypographyExample
          element="p"
          component={TypographyEnum.body1}
          sampleText={BodySampleText}
        />
        <TypographyExample
          element="p"
          component={TypographyEnum.footnote}
          sampleText={BodySampleText}
        />
      </ul>
    </>
  );
};

const TypographyExample = (props: TypographyExampleProps) => {
  const { element, component, sampleText } = props;
  const textRef = useRef<HTMLSpanElement>(null);
  const { width } = useSize();
  const [fontLine, setFontLine] = useState('');
  const Element = element;
  const customTag = component ? component : Element;

  const getFontProperties = (style: CSSStyleDeclaration) => {
    setFontLine(
      fontProperties(
        capitalizeFirstLetter(`${customTag}` || ''),
        style.fontFamily.replace(/"/g, '').split(',')[0] || '',
        style.fontSize,
        style.lineHeight,
        roundValue(parseFloat(style.lineHeight) / parseFloat(style.fontSize)),
        style.fontWeight
      )
    );
  };

  useEffect(() => {
    if (textRef.current) {
      const style = getComputedStyle(textRef.current);
      getFontProperties(style);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textRef.current, width]);

  return (
    <li>
      <Element className={customTag} ref={textRef}>
        {sampleText}
      </Element>
      <p className="footnote italic">{fontLine}</p>
    </li>
  );
};

export default Meta;
