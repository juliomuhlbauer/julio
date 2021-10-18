import { pages, socials } from "@/data";
import { JWIcon } from "@/theme/icons";
import { Button, IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Container, HStack, Link } from "@chakra-ui/layout";
import VisuallyHidden from "@chakra-ui/visually-hidden";
import NextLink from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <Container
      as="header"
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
        bgColor="glass.50"
        justify="space-between"
        sx={{
          backdropFilter: "saturate(150%) blur(25px)",
        }}
      >
        <NextLink href="/" passHref>
          <Link>
            <VisuallyHidden>JW Logo</VisuallyHidden>
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

        <HStack as="nav" spacing={4} d={{ base: "none", md: "flex" }}>
          {pages.map(({ href, label }) => (
            <NextLink href={href} key={href} passHref>
              <Button
                as="a"
                key={href}
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

        <HStack as="nav" spacing={4}>
          {socials.map((social, index) => (
            <IconButton
              as={Link}
              key={index}
              aria-label={social.name}
              rounded="full"
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
};

export default Header;
