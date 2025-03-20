import { useState } from "react";

export interface QueueMethods<T> {
  add: (item: T) => void;
  remove: () => T | undefined;
  first: T | undefined;
  last: T | undefined;
  size: number;
}

const useQueue = <T>(initialValue: T[] = []): QueueMethods<T> => {
  const [state, set] = useState(initialValue);
  return {
    add: (value) => {
      set((queue) => [...queue, value]);
    },
    remove: () => {
      let result: T | undefined;
      set(([first, ...rest]) => {
        result = first;
        return rest;
      });
      return result;
    },
    get first() {
      return state[0];
    },
    get last() {
      return state[state.length - 1];
    },
    get size() {
      return state.length;
    },
  };
};

export default useQueue;
