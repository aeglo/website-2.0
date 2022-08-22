import { Box, Flex, IconButton, Link, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Partner } from "../../pages/partners";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { WebIcon } from "../icons/WebIcon";

interface PartnerItemProps {
    partner: Partner;
    backgroundColor: string;
    maxHeight: string;
    itemKey: any;
}

export const PartnerItem = ({ partner, itemKey, backgroundColor, maxHeight }: PartnerItemProps) => {
    const [showInfos, setShowInfos] = useState(false);

    return (
        <Flex
            flex={1}
            maxHeight={{ base: maxHeight, md: '100%' }}
            backgroundImage={`url(${partner.asset})`}
            backgroundColor={backgroundColor}
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            onMouseEnter={() => setShowInfos(true)}
            onMouseLeave={() => setShowInfos(false)} >
            {showInfos && (<Box display="flex" flexDirection="column" w='100%' h='100%' bgGradient='linear(to-t, darkSection, rgba(27, 31, 43, 0.42))' alignItems="center" justifyContent="flex-end">
                <Text marginTop="2vh" fontSize={{ base: "16px", md: "20px" }} fontWeight="bold" textAlign="center" marginX={50} color="white" overflowY="auto">
                    {partner.descriptionFR}
                </Text>
                <Stack direction={"row"} mt="48px" display="flex" justifyContent="center">
                    <Link key={'web' + itemKey} href={partner.website} isExternal>
                        <WebIcon w="28" h="28" />
                    </Link>
                    <Link key={'linkedin' + itemKey} href={partner.linkedin} isExternal>
                        <LinkedInIcon boxSize={6} color="white" />
                    </Link>
                </Stack>
            </Box>)}
        </Flex >
    );
};