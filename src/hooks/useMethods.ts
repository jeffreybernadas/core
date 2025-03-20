import { Reducer, useMemo, useReducer } from "react";

type ActionType = string | number | symbol;

type Action<T extends ActionType = ActionType, P = unknown> = {
  type: T;
  payload?: P;
};

type MethodsMap<M, T> = {
  [P in keyof M]: (...args: unknown[]) => T;
};

type CreateMethods<M, T> = (state: T) => MethodsMap<M, T>;

type WrappedMethods<M> = {
  [P in keyof M]: (...args: unknown[]) => void;
};

const useMethods = <M extends Record<string, unknown>, T>(
  createMethods: CreateMethods<M, T>,
  initialState: T,
): [T, WrappedMethods<M>] => {
  const reducer = useMemo<Reducer<T, Action<keyof M>>>(
    () => (reducerState: T, action: Action<keyof M>) => {
      const methods = createMethods(reducerState) as MethodsMap<M, T>;
      return methods[action.type](...(action.payload ? [action.payload] : []));
    },
    [createMethods],
  );

  const [state, dispatch] = useReducer(reducer, initialState);

  const wrappedMethods = useMemo(() => {
    const methods = createMethods(initialState);
    const actionTypes = Object.keys(methods) as Array<keyof M>;

    return actionTypes.reduce((acc, type) => {
      acc[type] = (...payload: unknown[]) => dispatch({ type, payload });
      return acc;
    }, {} as WrappedMethods<M>);
  }, [createMethods, initialState]);

  return [state, wrappedMethods];
};

export default useMethods;
