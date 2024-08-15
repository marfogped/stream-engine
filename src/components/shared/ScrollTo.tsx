import React from "react";
import { Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

interface ScrollToProps {
  id: string;
  className?: string;
  size?: string;
  isChakraButton?: boolean;
  isNavbarOpt?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const ScrollTo: React.FC<ScrollToProps> = ({
  id,
  className,
  size,
  onClick,
  isNavbarOpt = false,
  isChakraButton = false,
  children,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = () => {
    if (location.pathname !== "/" && isNavbarOpt) navigate("/");
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      {isChakraButton ? (
        <Button
          onClick={scrollToSection}
          className={`cursor-pointer w-max h-max${className ? className : ""}`}
          size={size ? size : "lg"}
          bg="#F8F603"
          _hover={{ bg: "#cebc00" }}
        >
          {children}
        </Button>
      ) : (
        <div
          onClick={scrollToSection}
          className={`cursor-pointer w-max h-max${className ? className : ""}`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default ScrollTo;
