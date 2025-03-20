/* eslint-disable @typescript-eslint/no-explicit-any */
export type PromiseType<P extends Promise<any>> =
  P extends Promise<infer T> ? T : never;

export type FunctionReturningPromise = (...args: any[]) => Promise<any>;
