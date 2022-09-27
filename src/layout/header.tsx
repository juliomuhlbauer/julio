import { pages, socials } from "@/data";
import { JWIcon } from "@/theme/icons";
import { Button, IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Container, HStack, Link } from "@chakra-ui/layout";
import VisuallyHidden from "@chakra-ui/visually-hidden";
import NextLink from "next/link";
import { useRouter } from "next/router";
import useSound from "use-sound";
import ProfileImg from "public/julio.jpg";
import { Image } from "@/components/image";

export const Header = () => {
  const router = useRouter();

  const [playPing] = useSound("/sounds/ping.mp3", {
    volume: 0.25,
  });

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
          <Link
            onClick={() => {
              playPing();
            }}
          >
            <Image
              src={ProfileImg}
              placeholder="blur"
              boxSize={14}
              objectFit="contain"
              rounded="full"
              alt="Júlio Werner"
              boxShadow="md"
              ring={2}
              ringColor="accent"
            />
          </Link>
        </NextLink>

        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          {pages.map(({ href, label }) => (
            <NextLink href={href} key={href} passHref>
              <Button
                as="a"
                key={href}
                colorScheme="primary"
                variant="ghost"
                fontWeight="bold"
                fontSize="xl"
                onClick={() => {
                  playPing();
                }}
                color="default"
                _hover={{
                  color: "accent",
                }}
                {...(router.asPath === href && {
                  textDecoration: "underline",
                  color: "accent",
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
              color="default"
              variant="ghost"
              icon={<Icon as={social.icon} boxSize={6} />}
              href={social.link}
              isExternal
              onClick={() => {
                playPing();
              }}
              _hover={{
                color: "accent",
              }}
            />
          ))}
        </HStack>
      </HStack>
    </Container>
  );
};
