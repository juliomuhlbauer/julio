import { useCallback, useEffect, useState } from "react";

export const useContextMenu = () => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [contextMenu, setContextMenu] = useState(false);

  const handleContextMenu = useCallback(
    (event: MouseEvent) => {
      setAnchorPoint({ x: event.pageX, y: event.pageY });

      if (contextMenu) {
        setContextMenu(false);
      } else {
        event.preventDefault();
        setContextMenu(true);
      }
    },
    [contextMenu]
  );

  const handleClick = useCallback(
    () => contextMenu && setContextMenu(false),
    [contextMenu]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return { contextMenu, anchorPoint };
};
