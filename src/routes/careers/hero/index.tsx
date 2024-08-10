import { images } from "../../../constants";
import { Typography } from "../../../components/ui";
import { ScrollTo } from "../../../components/shared";

const index = () => {
  return (
    <section
      className="h-[60dvh] lg:h-[100dvh] relative bg-cover bg-center bg-no-repeat flex p-2.5 lg:p-5 video-overlay"
      style={{
        backgroundImage: `url(${images.CareersBackground})`,
      }}
    >
      <div className="lg:w-1/2 w-full bg-black/70 backdrop-blur-md h-full rounded-3xl flex flex-col items-center lg:items-start justify-center lg:px-20 z-[2]">
        <Typography
          as="h1"
          variant="xxl"
          color="white"
          className="text-center lg:text-start leading-tight lg:leading-none"
        >
          Careers at{" "}
          <Typography variant="xxl" color="gradient">
            Stream Engine
          </Typography>{" "}
        </Typography>

        <div className="mt-5 flex flex-col gap-2">
          <Typography
            as="p"
            variant="md"
            className="text-center lg:text-start font-regular leading-tight text-gray-300 xl:group-hover:text-white"
          >
            Welcome to the Careers page at Stream Engine, where innovation meets
            purpose.
          </Typography>
          <Typography
            as="p"
            variant="md"
            className="text-center lg:text-start font-regular leading-tight text-gray-300 xl:group-hover:text-white"
          >
            Join us in shaping the future of artificial intelligence across the
            Defense Sector and the Advertising Industry. Explore our open
            positions and become part of a team that's dedicated to making a
            difference.
          </Typography>
        </div>

        <ScrollTo
          id="jobs"
          isChakraButton={true}
          className="w-full xl:w-max mt-20 lg:mt-40"
        >
          Find my Next Job
        </ScrollTo>
      </div>
    </section>
  );
};

export default index;
