import { Box, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { UsefulLinkTab } from "../UsefulLinksSection";
import { UsefulLinkList } from "./UsefulLinkList";

interface UsefulLinkTabsProps {
  tabs: UsefulLinkTab[];
}

export const UsefulLinkTabs: React.FC<UsefulLinkTabsProps> = ({ tabs: sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0].title);

  return (
    <Box>
      <Flex>
        {sections.map((section) => (
          <Button isActive={section.title === activeSection} onClick={() => setActiveSection(section.title)}>
            {section.title}
          </Button>
        ))}
      </Flex>
      <UsefulLinkList links={sections.find((section) => section.title === activeSection).links} />
    </Box>
  );
};
