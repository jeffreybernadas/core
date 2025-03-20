import {
  createContext,
  createElement,
  useContext,
  useState,
  ReactNode,
} from "react";

interface ProviderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  children?: ReactNode;
}

const createStateContext = <T>(defaultInitialValue: T) => {
  const context = createContext<
    [T, React.Dispatch<React.SetStateAction<T>>] | undefined
  >(undefined);
  const providerFactory = (props: ProviderProps, children: ReactNode) =>
    createElement(context.Provider, props, children);

  const StateProvider = ({
    children,
    initialValue,
  }: {
    children?: ReactNode;
    initialValue?: T;
  }) => {
    const state = useState<T>(
      initialValue !== undefined ? initialValue : defaultInitialValue,
    );
    return providerFactory({ value: state }, children);
  };

  const useStateContext = () => {
    const state = useContext(context);
    if (state == null) {
      throw new Error(`useStateContext must be used inside a StateProvider.`);
    }
    return state;
  };

  return [useStateContext, StateProvider, context] as const;
};

export default createStateContext;
