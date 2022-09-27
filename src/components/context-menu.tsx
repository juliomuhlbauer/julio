import { pages, socials } from "@/data";
import { useContextMenu } from "@/hooks/use-context-menu";
import Icon from "@chakra-ui/icon";
import { Box, Link } from "@chakra-ui/layout";
import { Menu, MenuDivider, MenuItem, MenuList } from "@chakra-ui/menu";
import NextLink from "next/link";
import { FC } from "react";
import useSound from "use-sound";

export const ContextMenu: FC = () => {
  const { anchorPoint, contextMenu } = useContextMenu();

  const [playPing] = useSound("/sounds/ping.mp3", {
    volume: 0.25,
  });

  return (
    <Box
      position="absolute"
      overflow="hidden"
      {...(contextMenu && {
        inset: 0,
      })}
    >
      <Menu isOpen={contextMenu}>
        <MenuList
          top={anchorPoint.y}
          left={anchorPoint.x}
          position="absolute"
          zIndex="popover"
          overflow="hidden"
          // color="primary.50"
          bgColor="glass.50"
          backdropFilter="saturate(150%) blur(50px)"
        >
          {pages.map((page, index) => (
            <NextLink key={index} href={page.href}>
              <MenuItem
                icon={<Icon as={page.icon} boxSize={4} />}
                fontSize="lg"
                fontWeight="semibold"
                onClick={() => {
                  playPing();
                }}
              >
                {page.label}
              </MenuItem>
            </NextLink>
          ))}

          <MenuDivider />

          {socials.map((social, index) => (
            <Link key={index} href={social.link} isExternal>
              <MenuItem
                icon={<Icon as={social.icon} boxSize={4} />}
                fontSize="lg"
                fontWeight="semibold"
                onClick={() => {
                  playPing();
                }}
              >
                {social.name}
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
