import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { UsefulLinkTab } from "../UsefulLinksSection";
import { UsefulLinkList } from "./UsefulLinkList";

interface UsefulLinkTabsProps {
  tabs: UsefulLinkTab[];
}

export const UsefulLinkTabs: React.FC<UsefulLinkTabsProps> = ({ tabs }) => {
  return (
    <Tabs>
      <TabList>
        {tabs.map((tab) => (
          <Tab>{tab.title}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab) => (
          <TabPanel>
            <UsefulLinkList links={tab.links} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
