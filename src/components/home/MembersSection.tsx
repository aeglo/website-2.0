import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Member } from "../../pages/members";
import { MembersSectionList } from "./members/MembersSectionList";

interface MembersListProps {
    title: string;
    subtitle: string;
    members: Member[];
}

export const MembersSection: React.FC<MembersListProps> = ({ title, subtitle, members }) => {
    return (
        <Box id="home" paddingY="128px" paddingX={{ base: 0, md: "128px" }} backgroundColor="darkSection" color="white">
            <Stack direction="column" textAlign="center">
                <Heading marginBottom={1}>{title}</Heading>
                <Text fontSize="lg" fontWeight="semibold" pb={16}>
                    {subtitle}
                </Text>
                <MembersSectionList members={members} />
            </Stack>
        </Box>
    );
};