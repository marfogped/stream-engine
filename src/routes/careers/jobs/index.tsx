import { Button } from "@chakra-ui/react";
import { Typography } from "../../../components/ui";
import { constants } from "../../../constants";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../../components/ui/drawer";
import { images } from "../../../constants";

const index = () => {
  return (
    <section id="jobs" className="min-h-[80dvh] w-full page-width mt-20">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-5">
        <div className="relative col-span-full lg:col-span-4">
          <div className="flex flex-col gap-5 leading-none lg:sticky lg:top-5 z-10">
            <Typography as="h2" variant="xl" color="black">
              Open Positions
            </Typography>
            <Typography as="p" variant="md" className="text-neutral-700">
              Discover the positions we're currently hiring for and find the
              role that aligns with your skills and career goals.
            </Typography>
          </div>
        </div>

        <div className="flex flex-col gap-5 col-span-full lg:col-span-8 mt-10 lg:mt-0">
          {constants.careers.map((career, careerIdx) => (
            <article
              key={`career-${careerIdx}`}
              className="w-full flex items-center justify-between xs:flex-col xs:px-0 xs:py-4 bg-white-100 xs:h-max xs:gap-5 sm:h-28 lg:h-44 px-10 rounded-3xl"
            >
              <div>
                <Typography
                  as="h3"
                  variant="lg"
                  color="black"
                  className="xs:text-center"
                >
                  {career.jobDescription}
                </Typography>
                <Typography
                  as="p"
                  variant="md"
                  className="text-gray-700 xs:text-center"
                >
                  Miami, Florida, United States.
                </Typography>
              </div>

              <Drawer>
                <DrawerTrigger asChild>
                  <Button
                    size={"lg"}
                    className="flex items-center gap-2"
                    bg="#F8F603"
                    _hover={{ bg: "#cebc00" }}
                  >
                    <Typography
                      color="black"
                      variant="md"
                      className="font-medium"
                    >
                      Read More
                    </Typography>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="w-full relative px-5 lg:px-[100px] h-[70dvh] overflow-y-scroll grid grid-cols-4 lg:grid-cols-12 gap-5">
                    <div className="col-span-full lg:col-span-9 flex flex-col gap-10 lg:gap-20">
                      <DrawerHeader>
                        <DrawerTitle>
                          <Typography as="span" variant="xl" color="black">
                            {career.jobDescription}
                          </Typography>
                        </DrawerTitle>
                        <DrawerDescription>
                          <Typography
                            as="span"
                            variant="md"
                            className="text-gray-700"
                          >
                            Miami, Florida, United States.
                          </Typography>
                        </DrawerDescription>
                      </DrawerHeader>

                      <div className="flex flex-col">
                        <Typography as="h4" variant="lg" color="black">
                          The Company
                        </Typography>
                        <Typography
                          as="p"
                          variant="md"
                          className="text-gray-700"
                        >
                          {career.company}
                        </Typography>
                      </div>

                      <div className="flex flex-col">
                        <Typography as="h4" variant="lg" color="black">
                          The Role
                        </Typography>
                        <Typography
                          as="p"
                          variant="md"
                          className="text-gray-700"
                        >
                          {career.role}
                        </Typography>
                      </div>

                      <div className="flex flex-col">
                        <Typography as="h4" variant="lg" color="black">
                          Responsibilities
                        </Typography>

                        <ul role="list">
                          {career.responsibilities.map(
                            (responsibility, responsibilityIdx) => (
                              <li
                                className="list-disc text-black"
                                key={`r-${responsibilityIdx}`}
                              >
                                <Typography
                                  as="p"
                                  variant="md"
                                  className="text-gray-700"
                                >
                                  {responsibility}
                                </Typography>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <DrawerFooter>
                        <DrawerClose asChild></DrawerClose>
                      </DrawerFooter>
                    </div>

                    <aside className="relative lg:sticky lg:top-5 col-span-full lg:col-span-3 flex flex-col gap-5 w-full h-max bg-white-100 p-5 rounded-3xl">
                      <img
                        src={images.StreamEngineLogo}
                        alt="Stream Engine Logo"
                        className="w-1/2 lg:w-3/4 h-auto mix-blend-difference"
                      />

                      <div>
                        <Typography as="h4" variant="md" color="black">
                          {career.jobDescription}
                        </Typography>
                        <Typography
                          as="p"
                          variant="sm"
                          className="text-gray-700"
                        >
                          Miami, Florida, United States.
                        </Typography>
                      </div>

                      <div>
                        <Typography as="h4" variant="md" color="black">
                          Apply
                        </Typography>
                        <Typography
                          as="p"
                          variant="sm"
                          className="text-gray-700"
                        >
                          Apply now or send your resume and a brief cover letter
                          to{" "}
                          <a
                            className="underline"
                            href="mailto:careers@stream-engine.io"
                          >
                            careers@stream-engine.io
                          </a>
                        </Typography>
                      </div>

                      <div>
                        <Button
                          size={"md"}
                          className="flex items-center gap-2 w-full"
                          bg="#F8F603"
                          _hover={{ bg: "#cebc00" }}
                        >
                          <Typography
                            color="black"
                            variant="md"
                            className="font-medium"
                          >
                            Apply Now
                          </Typography>
                        </Button>
                      </div>
                    </aside>
                  </div>
                </DrawerContent>
              </Drawer>
            </article>
          ))}

          <footer className="border-t border-gray-700 w-full mt-20 py-2">
            <Typography as="span" variant="sm" className="text-gray-700">
              Showing 3 of 3 positions.
            </Typography>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default index;
