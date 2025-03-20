import { useEffect, useState } from "react";
import { isBrowser, off, on } from "./misc/util";

type HistoryMethod = "pushState" | "replaceState";
type HistoryState = unknown;

interface CustomHistoryEvent extends Event {
  state?: HistoryState;
}

const patchHistoryMethod = (method: HistoryMethod) => {
  const history = window.history;
  const original = history[method].bind(history);

  history[method] = function (
    state: HistoryState,
    title: string,
    url?: string | URL | null,
  ) {
    const result = original(state, title, url);
    const event = new Event(method.toLowerCase()) as CustomHistoryEvent;
    event.state = state;
    window.dispatchEvent(event);
    return result;
  };
};

if (isBrowser) {
  patchHistoryMethod("pushState");
  patchHistoryMethod("replaceState");
}

export interface LocationSensorState {
  trigger: string;
  state?: HistoryState;
  length?: number;
  hash?: string;
  host?: string;
  hostname?: string;
  href?: string;
  origin?: string;
  pathname?: string;
  port?: string;
  protocol?: string;
  search?: string;
}

const useLocationServer = (): LocationSensorState => ({
  trigger: "load",
  length: 1,
});

const buildState = (trigger: string): LocationSensorState => {
  const { state, length } = window.history;
  const {
    hash,
    host,
    hostname,
    href,
    origin,
    pathname,
    port,
    protocol,
    search,
  } = window.location;

  return {
    trigger,
    state,
    length,
    hash,
    host,
    hostname,
    href,
    origin,
    pathname,
    port,
    protocol,
    search,
  };
};

const useLocationBrowser = (): LocationSensorState => {
  const [state, setState] = useState<LocationSensorState>(buildState("load"));

  useEffect(() => {
    const onPopstate = () => setState(buildState("popstate"));
    const onPushstate = () => setState(buildState("pushstate"));
    const onReplacestate = () => setState(buildState("replacestate"));

    on(window, "popstate", onPopstate);
    on(window, "pushstate", onPushstate);
    on(window, "replacestate", onReplacestate);

    return () => {
      off(window, "popstate", onPopstate);
      off(window, "pushstate", onPushstate);
      off(window, "replacestate", onReplacestate);
    };
  }, []);

  return state;
};

const hasEventConstructor = typeof Event === "function";

export default isBrowser && hasEventConstructor
  ? useLocationBrowser
  : useLocationServer;
