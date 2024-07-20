import React from "react";

interface ComponentProps {
  title: string;
  handlePress: () => void;
  containerStyles: string;
  textStyles: string;
  isLoading: boolean;
}

const CustomButton: React.FC<ComponentProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <button
      onClick={handlePress}
      disabled={isLoading}
      className={`rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <span className={`text-lg ${textStyles}`}>{title}</span>
    </button>
  );
};

export default CustomButton;
