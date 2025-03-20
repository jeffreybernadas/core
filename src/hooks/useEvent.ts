import { useEffect } from "react";
import { isBrowser, off, on } from "./misc/util";

type EventHandler = (event: Event) => void;
type EventOptions = boolean | AddEventListenerOptions;

export interface ListenerType1 {
  addEventListener(
    name: string,
    handler: EventHandler,
    options?: EventOptions,
  ): void;
  removeEventListener(
    name: string,
    handler: EventHandler,
    options?: EventOptions,
  ): void;
}

export interface ListenerType2 {
  on(name: string, handler: EventHandler, options?: EventOptions): void;
  off(name: string, handler: EventHandler, options?: EventOptions): void;
}

export type UseEventTarget = ListenerType1 | ListenerType2;

const defaultTarget = isBrowser ? window : null;

const isListenerType1 = (target: unknown): target is ListenerType1 => {
  return (
    !!target && typeof (target as ListenerType1).addEventListener === "function"
  );
};

const isListenerType2 = (target: unknown): target is ListenerType2 => {
  return !!target && typeof (target as ListenerType2).on === "function";
};

type AddEventListener<T> = T extends ListenerType1
  ? T["addEventListener"]
  : T extends ListenerType2
    ? T["on"]
    : never;

export type UseEventOptions<T> = Parameters<AddEventListener<T>>[2];

const useEvent = <T extends UseEventTarget>(
  name: Parameters<AddEventListener<T>>[0],
  handler?: null | undefined | Parameters<AddEventListener<T>>[1],
  target: null | T | Window = defaultTarget,
  options?: UseEventOptions<T>,
) => {
  useEffect(() => {
    if (!handler) {
      return;
    }
    if (!target) {
      return;
    }

    if (isListenerType1(target)) {
      on(target as unknown as Window, name, handler, options);
    } else if (isListenerType2(target)) {
      (target as ListenerType2).on(name, handler, options);
    }

    return () => {
      if (isListenerType1(target)) {
        off(target as unknown as Window, name, handler, options);
      } else if (isListenerType2(target)) {
        (target as ListenerType2).off(name, handler, options);
      }
    };
  }, [name, handler, target, JSON.stringify(options)]);
};

export default useEvent;
