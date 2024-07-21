import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Typography } from "../../../components/ui";
import { images } from "../../../constants";

const HomeServices: React.FC = () => {
  return (
    <section className="px-[20px] xl:pl-[100px] h-max py-5 bg-black">
      <Tabs position="relative" variant="unstyled" className="h-full">
        <TabList className="w-max">
          <Tab className="text-gray-300">Defense Community</Tab>
          <Tab className="text-gray-300">Advertising Industry</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="3px"
          bg="#F8F603"
          borderRadius="1px"
        />
        <TabPanels className="h-full">
          <TabPanel className="flex flex-col lg:flex-row h-full !p-0">
            <div className="flex flex-col gap-10 lg:w-full lg:justify-between py-10">
              <div className="flex flex-col gap-5 leading-none">
                <Typography variant="xl" color="white">
                  Defense Community
                </Typography>
                <Typography variant="md" className="text-gray-300">
                  We ingest large data sets to recognize behavioral patterns and
                  threats in real time across video, audio, text and still
                  image.
                </Typography>
              </div>

              <Button
                bg="#F8F603"
                _hover={{ bg: "#F8F603" }}
                className="w-full xl:w-max"
              >
                Get in Touch
              </Button>
            </div>

            <div className="w-full">
              <img
                src={images.DefenseBackground}
                alt="Advertising Industry Image"
                loading="lazy"
                className="h-[80vh] w-full object-cover"
              />
            </div>
          </TabPanel>
          <TabPanel className="flex flex-col lg:flex-row h-full !p-0">
            <div className="flex flex-col gap-10 lg:w-full lg:justify-between py-10">
              <div className="flex flex-col gap-5 leading-none">
                <Typography variant="xl" color="white">
                  Advertising Industry
                </Typography>
                <Typography variant="md" className="text-gray-300">
                  The world's only accurate media valuation tool - analyzing
                  logo recognition, voice callouts, and chat mentions in real
                  time.
                </Typography>
              </div>

              <Button
                bg="#F8F603"
                _hover={{ bg: "#F8F603" }}
                className="w-full xl:w-max"
              >
                Get in Touch
              </Button>
            </div>

            <div className="w-full">
              <img
                src={images.AdvertisingBackground}
                alt="Advertising Industry Image"
                loading="lazy"
                className="h-[80vh] w-full object-cover"
              />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
};

export default HomeServices;
