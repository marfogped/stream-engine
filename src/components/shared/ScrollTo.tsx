import React from "react";
import { Button } from "@chakra-ui/react";

interface ScrollToProps {
  id: string;
  className?: string;
  size?: string;
  isChakraButton?: boolean
  children: React.ReactNode;
  onClick?: () => void
}

const ScrollTo: React.FC<ScrollToProps> = ({ id, className, size, onClick, isChakraButton = false, children }) => {
  const scrollToSection = () => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      {
        isChakraButton ? (

          <Button 
            onClick={scrollToSection} 
            className={`cursor-pointer w-full h-full ${className}`} 
            size={size ? size : "lg"}
            bg="#F8F603"
            _hover={{ bg: "#cebc00" }}
          >
            {children}
          </Button>
        ) : (
          <div 
          onClick={scrollToSection} 
          className={`cursor-pointer w-full h-full ${className}`}
          >
            {children}
          </div>
          
        )
      }
    </>
  );
}; 

export default ScrollTo;
