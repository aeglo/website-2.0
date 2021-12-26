import { Center, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { UsefulLinkTab } from "../UsefulLinksSection";
import { UsefulLinkList } from "./UsefulLinkList";

interface UsefulLinkTabsProps {
  tabs: UsefulLinkTab[];
}

export const UsefulLinkTabs: React.FC<UsefulLinkTabsProps> = ({ tabs }) => {
  return (
    <Tabs variant="soft-rounded" colorScheme="blue" align="center" mb={{base: "128px", md: "196px"}}>
      <TabList justifyItems="center" overflow={{ base: "scoll", md: "" }}>
        {tabs.map((tab) => (
          <Tab paddingX={{ base: 2, md: 8 }} paddingY={3} marginX={{ base: 0, md: 12 }}>
            {tab.title}
          </Tab>
        ))}
      </TabList>
      <TabPanels marginTop={6}>
        {tabs.map((tab) => (
          <TabPanel>
            <UsefulLinkList links={tab.links} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
