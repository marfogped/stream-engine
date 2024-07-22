/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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

interface HomeServicesProps {
  selectedService: string;
}

const HomeServices: React.FC<HomeServicesProps> = ({ selectedService }) => {
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (selectedService.toLowerCase() === "defense") {
      setTabIndex(0);
    } else if (selectedService.toLowerCase() === "advertising") {
      setTabIndex(1);
    } else {
      setTabIndex(0);
    }
  }, [selectedService]);

  return (
    <section id="services" className="pl-[20px] xl:pl-[100px] h-max bg-black">
      <Tabs
        position="relative"
        variant="unstyled"
        className="h-full"
        index={tabIndex}
        onChange={(index) => setTabIndex(index)}
      >
        <TabList className="w-max">
          <Tab>
            <Typography variant="sm" className="text-gray-300">
              Defense Community
            </Typography>
          </Tab>
          <Tab>
            <Typography variant="sm" className="text-gray-300">
              Advertising Industry
            </Typography>
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="3px"
          bg="#F8F603"
          borderRadius="1px"
        />
        <TabPanels className="h-full">
          <TabPanel className="flex flex-col lg:flex-row h-full !p-0 gap-5">
            <div className="flex flex-col gap-10 lg:w-full lg:justify-between py-10">
              <div className="flex flex-col gap-5 leading-none">
                <Typography as="h2" variant="xl" color="white">
                  Defense Community
                </Typography>
                <Typography as="p" variant="md" className="text-gray-300">
                  We ingest large data sets to recognize behavioral patterns and
                  threats in real time across video, audio, text and still
                  image.
                </Typography>
              </div>

              <Button
                bg="#F8F603"
                _hover={{ bg: "#F8F603" }}
                size="lg"
                className="w-full xl:w-max"
              >
                Get in Touch
              </Button>
            </div>

            <div className="w-full">
              <img
                src={images.DefenseBackground}
                alt="Defense Community Image"
                loading="lazy"
                className="h-[284px] lg:h-[80vh] rounded-[10px] lg:rounded-none w-full object-cover"
              />
            </div>
          </TabPanel>
          <TabPanel className="flex flex-col lg:flex-row h-full !p-0 gap-5">
            <div className="flex flex-col gap-10 lg:w-full lg:justify-between py-10">
              <div className="flex flex-col gap-5 leading-none">
                <Typography as="h2" variant="xl" color="white">
                  Advertising Industry
                </Typography>
                <Typography as="p" variant="md" className="text-gray-300">
                  The world's only accurate media valuation tool - analyzing
                  logo recognition, voice callouts, and chat mentions in real
                  time.
                </Typography>
              </div>

              <Button
                bg="#F8F603"
                _hover={{ bg: "#F8F603" }}
                size="lg"
                className="w-full xl:w-max"
              >
                Get in Touch
              </Button>
            </div>

            <div className="w-full">
              <img
                src={images.AdvertisingBackground}
                alt="Advertising Industry Image"
                className="h-[284px] lg:h-[80vh] rounded-[10px] lg:rounded-none w-full object-cover"
                loading="lazy"
              />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
};

export default HomeServices;
