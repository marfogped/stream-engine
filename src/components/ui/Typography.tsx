import React from "react";

type VariantType = "h1" | "h2" | "h3" | "large" | "medium" | "small" | "xsmall";
type ColorType = "white" | "black" | "lightGray" | "darkGray";

const variantClasses: Record<VariantType, string> = {
  h1: "lg:text-6xl font-bold xs:text-2xl sm:text-2xl",
  h2: "font-semibold xs:text-xl sm:text-xl md:text-4xl",
  h3: "xs:text-lg sm:text-lg md:text-xl font-medium",
  large: "xs:text-lg sm:text-lg lg:text-xl",
  medium: "xs:text-md sm:text-md lg:text-lg",
  small: "xs:text-sm sm:text-sm lg:text-md",
  xsmall: "xs:text-xs sm:text-xs lg:text-sm",
};

const colorClasses: Record<ColorType, string> = {
  white: "text-white",
  black: "text-[#242526]",
  lightGray: "text-[#CACACA]",
  darkGray: "text-[#363738]",
};

interface TypographyProps {
  as?: keyof JSX.IntrinsicElements;
  variant: VariantType;
  color: ColorType;
  className?: string;
  children?: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  as: Tag = "span",
  variant,
  color,
  className = "",
  ...props
}) => {
  const variantClass = variantClasses[variant] || "";
  const colorClass = colorClasses[color] || "";
  const classes = `${variantClass} ${colorClass} ${className}`.trim();

  const content =
    typeof props.children === "string"
      ? props.children.split("\n").map((line, index, array) => (
          <React.Fragment key={index}>
            {React.createElement(Tag, { className: classes, ...props }, line)}
            {index < array.length - 1 && <br />}
          </React.Fragment>
        ))
      : React.createElement(
          Tag,
          { className: classes, ...props },
          props.children
        );

  return <>{content}</>;
};

export default Typography;
