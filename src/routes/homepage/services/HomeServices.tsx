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
    <section id="services" className="h-max w-full bg-black overflow-x-hidden">
      <Tabs
        position="relative"
        variant="unstyled"
        className="h-full"
        index={tabIndex}
        onChange={(index) => setTabIndex(index)}
      >
        <TabList className="w-max">
          <Tab>
            <Typography as="h2" variant="md" color="white">
              DEFENSE COMMUNITY
            </Typography>
          </Tab>
          <Tab>
            <Typography as="h2" variant="md" color="white">
              ADVERTISING INDUSTRY
            </Typography>
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="3px"
          bg="#F8F603"
          borderRadius="1px"
        />
        <TabPanels className="h-full pl-[20px] xl:pl-[100px] ">
          <TabPanel className="flex flex-col lg:flex-row h-full !p-0 gap-5 !pr-[20px] lg:!pr-0">
            <div className="flex flex-col gap-10 lg:w-full lg:justify-between py-10">
              <div className="flex flex-col gap-8 leading-none">
                <Typography as="h2" variant="lg" className="text-gray-300">
                  Real-Time AI-Driven Threat Detection and Comprehensive Data
                  Analysis
                </Typography>
                <div className="flex flex-col gap-5">
                  <Typography as="p" variant="md" className="text-gray-300">
                    We ingest large data sets to recognize behavioral patterns
                    and threats in real time across video, audio, text and still
                    image.
                  </Typography>
                  <Typography as="p" variant="md" className="text-gray-300">
                    Using AI for automated data ingestion to recognize threats
                    in real time:
                  </Typography>

                  <ul role="list" className="flex flex-col gap-2">
                    <li className="list-item">
                      <Typography as="p" variant="md" className="text-gray-300">
                        Real-time threat detection
                      </Typography>
                    </li>
                    <li className="list-item">
                      <Typography as="p" variant="md" className="text-gray-300">
                        Comprehensive data analysis
                      </Typography>
                    </li>
                    <li className="list-item">
                      <Typography as="p" variant="md" className="text-gray-300">
                        Scalability
                      </Typography>
                    </li>
                    <li className="list-item">
                      <Typography as="p" variant="md" className="text-gray-300">
                        Actionable insights
                      </Typography>
                    </li>
                  </ul>
                </div>
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
                className="h-[350px] lg:h-[40vh] xl:h-[80vh] rounded-[10px] lg:rounded-none w-full object-cover"
              />
            </div>
          </TabPanel>
          <TabPanel className="flex flex-col lg:flex-row h-full !p-0 gap-5 !pr-[20px] lg:!pr-0">
            <div className="flex flex-col gap-10 lg:w-full lg:justify-between py-10">
              <div className="flex flex-col gap-8 leading-none">
                <Typography as="h2" variant="lg" className="text-gray-300">
                  Unmatched Real-Time Media Valuation with Accurate Logo, Voice,
                  and Chat Analysis
                </Typography>
                <div className="flex flex-col gap-5">
                  <Typography as="p" variant="md" className="text-gray-300">
                    The world's only accurate media valuation tool - analyzing
                    logo recognition, voice callouts, and chat mentions in real
                    time.
                  </Typography>
                </div>
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
                className="h-[350px] lg:h-[40vh] xl:h-[80vh] object-cover top-0 rounded-[10px] lg:rounded-none w-full"
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
