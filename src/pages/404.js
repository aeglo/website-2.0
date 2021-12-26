import { Img, VStack, AspectRatio, Text, Box } from "@chakra-ui/react";

// TODO: Make it responsive for mobile
export default function Custom404() {
    return (
        <Box>
            <VStack justify={"center"} alignContent={"center"}>
                <AspectRatio width="675px" ratio={2} mt={"218px"}>
                    <Img src={"images/404.png"} alt="404"/>
                </AspectRatio>
                <Text fontSize={"96px"} fontWeight={"bold"} color={"main"} mt={"48px"}>OOPS…</Text>
                <Text maxW={"506"} fontSize={"36px"} fontWeight={"medium"} color={"main"} textAlign={"center"} mt={'8px'}>It seems the website doesn’t want to let you access this page.</Text>
            </VStack>
        </Box>
    );
}

