import { useEffect } from "react";
import { off, on } from "./misc/util";

interface LegacyMouseEvent extends MouseEvent {
  toElement?: Element | null;
}

const usePageLeave = (onPageLeave: () => void, args: unknown[] = []): void => {
  useEffect(() => {
    if (!onPageLeave) {
      return;
    }

    const handler = (event: MouseEvent) => {
      const e = event || (window.event as LegacyMouseEvent);
      const from = e.relatedTarget || (e as LegacyMouseEvent).toElement;
      if (!from || (from as Element).nodeName === "HTML") {
        onPageLeave();
      }
    };

    on(document, "mouseout", handler);
    return () => {
      off(document, "mouseout", handler);
    };
  }, args);
};

export default usePageLeave;
