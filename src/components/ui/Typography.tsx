import React from "react";

type VariantType = "xxl" | "xl" | "lg" | "md" | "sm";
type ColorType = "white" | "black" | "gradient";

const variantClasses: Record<VariantType, string> = {
  xxl: "text-[33.83px] lg:text-[62.83px] xxl:text-[101.66px] font-bold",
  xl: "text-[33.83px] xl:text-[62.83px] font-medium ",
  lg: "text-[24px] md:text-[33.83px] font-medium",
  md: "text-[16px] lg:text-[20px]",
  sm: "text-[14.83px]",
};

const colorClasses: Record<ColorType, string> = {
  white: "text-white-50",
  black: "text-black",
  gradient: "text-gradient",
};

interface TypographyProps {
  as?: keyof JSX.IntrinsicElements;
  variant: VariantType;
  color?: ColorType;
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
  const colorClass = color ? colorClasses[color] : "";
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
