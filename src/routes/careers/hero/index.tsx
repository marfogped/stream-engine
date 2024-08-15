import { images } from "../../../constants";
import { Typography } from "../../../components/ui";
import { ScrollTo } from "../../../components/shared";

const index = () => {
  return (
    <section
      className="min-h-[65vh] lg:min-h-[90vh] relative bg-cover bg-center bg-no-repeat flex video-overlay"
      style={{
        backgroundImage: `url(${images.CareersBackground})`,
      }}
    >
      <div className="lg:w-1/2 w-full bg-black/70 backdrop-blur-md flex flex-col items-start justify-between pt-20 px-5 pb-5 lg:p-20 lg: z-[2]">
        <div className="flex flex-col gap-5">
          <Typography
            as="h1"
            variant="xxl"
            color="white"
            className="text-start leading-tight lg:leading-none"
          >
            Careers at <span className="block" />
            <Typography variant="xxl" color="gradient">
              Stream Engine
            </Typography>
          </Typography>

          <div className="mt-5 flex flex-col gap-2">
            <Typography
              as="p"
              variant="md"
              className="text-start font-regular leading-tight text-gray-300 xl:group-hover:text-white"
            >
              Welcome to the Careers page at Stream Engine, where innovation
              meets purpose.
            </Typography>
            <Typography
              as="p"
              variant="md"
              className="text-start font-regular leading-tight text-gray-300 xl:group-hover:text-white"
            >
              Join us in shaping the future of artificial intelligence across
              the Defense Sector and the Advertising Industry. Explore our open
              positions and become part of a team that's dedicated to making a
              difference.
            </Typography>
          </div>
        </div>

        <ScrollTo id="jobs" isChakraButton={true} className="w-full xl:w-max">
          View Open Positions
        </ScrollTo>
      </div>
    </section>
  );
};

export default index;
