import { useBreakpointValue } from "@chakra-ui/media-query";

export const useMedia = () => {
  const isMd = useBreakpointValue({ base: true, sm: true, md: false }, "base");
  return { isMd };
};
