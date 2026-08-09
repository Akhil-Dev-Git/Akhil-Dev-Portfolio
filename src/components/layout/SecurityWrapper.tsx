"use client";

import { useEffect } from "react";

export default function SecurityWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Prevent right click / context menu (prevents image long-press menus too)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Prevent drag and drop
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // Prevent common keyboard shortcuts for screenshots/inspection
    const handleKeyDown = (e: KeyboardEvent) => {
      // Print Screen
      if (e.key === "PrintScreen") {
        e.preventDefault();
      }
      
      // Mac Screenshot Shortcuts (Cmd+Shift+3/4/5)
      if (e.metaKey && e.shiftKey && (e.key === "3" || e.key === "4" || e.key === "5" || e.key === "s")) {
        e.preventDefault();
      }

      // DevTools (F12, Ctrl+Shift+I, Ctrl+Shift+C)
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "C" || e.key === "c"))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("keydown", handleKeyDown);

    // Disable selection via CSS globally on mount
    document.body.classList.add("select-none", "[-webkit-touch-callout:none]", "[-webkit-user-select:none]", "[-webkit-user-drag:none]");

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("select-none", "[-webkit-touch-callout:none]", "[-webkit-user-select:none]", "[-webkit-user-drag:none]");
    };
  }, []);

  return <>{children}</>;
}
