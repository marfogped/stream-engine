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
    <section className="page-width">
      <div>
        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab>Defense Community</Tab>
            <Tab>Advertising Industry</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="3px"
            bg="#F8F603"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel className="flex flex-col gap-10">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <Typography variant="xl" color="black">
                    Defense Community
                  </Typography>
                  <Typography variant="md" className="text-gray-700">
                    We ingest large data sets to recognize behavioral patterns
                    and threats in real time across video, audio, text and still
                    image.
                  </Typography>
                </div>

                <Button bg="#F8F603" _hover={{ bg: "#F8F603" }} type="submit">
                  Get in Touch
                </Button>
              </div>

              <div>
                <img
                  src={images.DefenseBackground}
                  alt="Advertising Industry Image"
                  loading="lazy"
                  className="rounded-xl aspect-video"
                />
              </div>
            </TabPanel>
            <TabPanel className="flex flex-col gap-10">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <Typography variant="xl" color="black">
                    Advertising Industry
                  </Typography>
                  <Typography variant="md" className="text-gray-700">
                    The world's only accurate media valuation tool - analyzing
                    logo recognition, voice callouts, and chat mentions in real
                    time.
                  </Typography>
                </div>

                <Button bg="#F8F603" _hover={{ bg: "#F8F603" }} type="submit">
                  Get in Touch
                </Button>
              </div>

              <div>
                <img
                  src={images.AdvertisingBackground}
                  alt="Advertising Industry Image"
                  loading="lazy"
                  className="rounded-xl aspect-video"
                />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div></div>
    </section>
  );
};

export default HomeServices;
