import { Box, Button, Link } from "@chakra-ui/react";

interface LinkItemProps {
    href: string;
    name: string;
}

export const LinkItem = ({ href, name }: LinkItemProps) => {
    return (
        <Box mb={"16px"}>
            <Link href={href} isExternal backgroundColor="lightGrey">
                <Button whiteSpace="normal" borderRadius={0} backgroundColor="lightGrey" _hover={{}}>
                    {name}
                </Button>
            </Link>
        </Box>
    );
};