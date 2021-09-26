import { pages, socials } from "@/data";
import { useMedia } from "@/hooks";
import { JWIcon } from "@/theme/icons";
import { Button, IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Container, HStack, Link } from "@chakra-ui/layout";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const { isMd } = useMedia();

  const router = useRouter();

  return (
    <Container
      zIndex="10"
      position={{ base: "static", md: "sticky" }}
      my={{ base: 4, md: 6 }}
      top={{ base: 4, md: 6 }}
      maxW="container.lg"
    >
      <HStack
        borderRadius="lg"
        py={2}
        px={4}
        bgColor={isMd ? "transparent" : "glass.50"}
        justify="space-between"
        sx={{
          backdropFilter: "saturate(150%) blur(25px)",
        }}
      >
        <NextLink href="/">
          <Link>
            <IconButton
              variant="ghost"
              aria-label="JW Logo"
              h={16}
              w={20}
              icon={<JWIcon boxSize={{ base: 14, md: 16 }} />}
              colorScheme="primary"
            />
          </Link>
        </NextLink>
        {!isMd && (
          <HStack spacing={4}>
            {pages.map(({ href, label }) => (
              <NextLink href={href} key={href} passHref>
                <Button
                  key={href}
                  as="a"
                  colorScheme="primary"
                  variant="ghost"
                  fontWeight="bold"
                  fontSize="xl"
                  {...(router.asPath === href && {
                    variant: "outline",
                  })}
                >
                  {label}
                </Button>
              </NextLink>
            ))}
          </HStack>
        )}

        <HStack spacing={4}>
          {socials.map((social, index) => (
            <IconButton
              rounded="full"
              key={index}
              as={Link}
              aria-label={social.title}
              colorScheme="primary"
              variant="ghost"
              icon={<Icon as={social.icon} boxSize={6} />}
              href={social.link}
              isExternal
            />
          ))}
        </HStack>
      </HStack>
    </Container>
  );
}
