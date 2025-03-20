import { useEffect, useRef, useState } from "react";
import useUnmount from "./useUnmount";

const useThrottle = <T>(value: T, ms: number = 200) => {
  const [state, setState] = useState<T>(value);
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const nextValue = useRef<T | null>(null);
  const hasNextValue = useRef<boolean>(false);

  useEffect(() => {
    if (!timeout.current) {
      setState(value);
      const timeoutCallback = () => {
        if (hasNextValue.current) {
          hasNextValue.current = false;
          setState(nextValue.current as T);
          timeout.current = setTimeout(timeoutCallback, ms);
        } else {
          timeout.current = undefined;
        }
      };
      timeout.current = setTimeout(timeoutCallback, ms);
    } else {
      nextValue.current = value;
      hasNextValue.current = true;
    }
  }, [value, ms]);

  useUnmount(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  });

  return state;
};

export default useThrottle;
