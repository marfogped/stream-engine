import { Typography } from "../ui";
import { useNavigate } from "react-router-dom";
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen mx-auto bg-white px-4 flex flex-col items-center justify-center">
      <Typography as="h1" variant="md" className="uppercase tracking-widest text-gray-700">
        404 | Not Found
      </Typography>


      <div className="flex justify-center w-full gap-2 pt-5">
        <Button
          onClick={() => navigate(-1)}
          size={"lg"}
          className="flex items-center gap-2"
          bg="#F8F603"
          _hover={{ bg: "#cebc00" }}
        >
          <ArrowUturnLeftIcon className="h-7 w-7" />
          Go Back
        </Button>

        <Button
          onClick={() => navigate('/')}
          size={"lg"}
          className="flex items-center gap-2"
          bg="transparent"
          _hover={{ bg: "#e5e5e5" }}
        >
          <HomeIcon className="h-7 w-7" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
