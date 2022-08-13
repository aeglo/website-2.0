import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

interface NoPartnerProps {
    backgroundColor: string;
}

export const NoPartner = ({ backgroundColor }: NoPartnerProps) => {
    const [showInfos, setShowInfos] = useState(false);

    return (
        <Flex
            flex={1}
            backgroundColor={backgroundColor}
            onMouseEnter={() => setShowInfos(true)}
            onMouseLeave={() => setShowInfos(false)} >
            {showInfos && (<Box display="flex" flexDirection="column" w='100%' h='100%' bgGradient='linear(to-t, darkSection, rgba(27, 31, 43, 0.42))' alignItems="center" justifyContent="flex-end" pb={8}>
                <Text marginTop="2vh" fontSize={{ base: "16px", md: "20px" }} fontWeight="bold" textAlign="center" marginX={100} color="white">
                    {"Nous n'avons aucun partenaire bronze pour l'instant. Consultez notre plan de partenariat afin de savoir quels bénéfices sont inclus et devenez notre premier partenaire bronze."}
                </Text>
            </Box>)}
        </Flex >
    );
};