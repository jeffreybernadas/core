import React, { ReactNode } from "react";

export interface RouterProviderProps {
  route: string;
  fullRoute?: string;
  parent?: RouterProviderProps;
  children?: ReactNode;
}

const createRouter = () => {
  const context = React.createContext<RouterProviderProps>({
    route: "",
  });

  const Router = (props: RouterProviderProps) => {
    const { route, fullRoute, parent, children } = props;

    if (process.env.NODE_ENV !== "production") {
      if (typeof route !== "string") {
        throw new TypeError("Router route must be a string.");
      }
    }

    return React.createElement(context.Provider, {
      value: {
        fullRoute: fullRoute ?? route,
        route,
        parent,
      },
      children,
    });
  };

  return { Router, context };
};

export default createRouter;
