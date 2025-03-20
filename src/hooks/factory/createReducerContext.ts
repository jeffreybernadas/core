import {
  createContext,
  createElement,
  useContext,
  useReducer,
  ReactNode,
} from "react";

interface ProviderProps<T> {
  value: T;
  children?: ReactNode;
}

const createReducerContext = <State, Action>(
  reducer: React.Reducer<State, Action>,
  defaultInitialState: State,
) => {
  const context = createContext<[State, React.Dispatch<Action>] | undefined>(
    undefined,
  );

  const providerFactory = (
    props: ProviderProps<[State, React.Dispatch<Action>]>,
    children: ReactNode,
  ) => createElement(context.Provider, props, children);

  const ReducerProvider = ({
    children,
    initialState,
  }: {
    children?: ReactNode;
    initialState?: State;
  }) => {
    const state = useReducer(reducer, initialState ?? defaultInitialState);
    return providerFactory({ value: state }, children);
  };

  const useReducerContext = () => {
    const state = useContext(context);
    if (state == null) {
      throw new Error(
        `useReducerContext must be used inside a ReducerProvider.`,
      );
    }
    return state;
  };

  return [useReducerContext, ReducerProvider, context] as const;
};

export default createReducerContext;
