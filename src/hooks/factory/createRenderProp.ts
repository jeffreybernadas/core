/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

interface RenderPropProps<TState> {
  children?: (state: TState) => ReactNode;
  render?: (state: TState) => ReactNode;
  [key: string]: any;
}

type MapPropsToArgs<TProps> = (props: TProps) => any[];

const defaultMapPropsToArgs = <T extends object>(props: T): [T] => [props];

export default function createRenderProp<TProps extends object, TState>(
  hook: (...args: any[]) => TState,
  mapPropsToArgs: MapPropsToArgs<TProps> = defaultMapPropsToArgs,
) {
  return function RenderProp(props: TProps & RenderPropProps<TState>) {
    const state = hook(...mapPropsToArgs(props));
    const { children, render = children } = props;
    return render ? render(state) || null : null;
  };
}
