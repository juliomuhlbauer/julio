import { pages, socials } from "@/data";
import { useContextMenu } from "@/hooks/useContextMenu";
import Icon from "@chakra-ui/icon";
import { Link } from "@chakra-ui/layout";
import {
  Menu,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import NextLink from "next/link";

const ContextMenu = () => {
  const { anchorPoint, contextMenu } = useContextMenu();

  return (
    <Menu isOpen={contextMenu}>
      <MenuList
        color="primary.50"
        bgColor="glass.50"
        backdropFilter="saturate(150%) blur(50px)"
        zIndex="popover"
        position="absolute"
        top={anchorPoint.y}
        left={anchorPoint.x}
        overflow="hidden"
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
              {social.title}
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ContextMenu;
