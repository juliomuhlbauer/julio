import { pages, socials } from "@/data";
import { useContextMenu } from "@/hooks/use-context-menu";
import Icon from "@chakra-ui/icon";
import { Box, Link } from "@chakra-ui/layout";
import { Menu, MenuDivider, MenuItem, MenuList } from "@chakra-ui/menu";
import NextLink from "next/link";
import { FC } from "react";

export const ContextMenu: FC = () => {
  const { anchorPoint, contextMenu } = useContextMenu();

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
          color="primary.50"
          bgColor="glass.50"
          backdropFilter="saturate(150%) blur(50px)"
        >
          {pages.map((page, index) => (
            <NextLink key={index} href={page.href}>
              <MenuItem
                icon={<Icon as={page.icon} boxSize={4} />}
                fontSize="lg"
                fontWeight="semibold"
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
