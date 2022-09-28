import { pages } from "@/data";
import { IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Box, HStack } from "@chakra-ui/layout";
import NextLink from "next/link";
import { useRouter } from "next/router";

export const BottomNav = () => {
  const router = useRouter();

  return (
    <Box
      zIndex="10"
      position="fixed"
      bottom={4}
      display={{ base: "block", md: "none" }}
    >
      <HStack
        as="nav"
        justify="center"
        borderRadius="lg"
        py={2}
        px={4}
        bgColor="glass.100"
        sx={{
          backdropFilter: "saturate(120%) blur(20px)",
        }}
        spacing={4}
      >
        {pages.map(({ href, label, icon }) => (
          <NextLink href={href} key={href} passHref>
            <IconButton
              aria-label={label}
              colorScheme="primary"
              variant="ghost"
              fontWeight="bold"
              fontSize="xl"
              size="lg"
              icon={<Icon as={icon} boxSize="6" />}
              {...(router.asPath === href && {
                variant: "solid",
                bgColor: "primary.200",
                color: "gray.900",
              })}
            />
          </NextLink>
        ))}
      </HStack>
    </Box>
  );
};
