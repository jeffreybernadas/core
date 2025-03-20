import useEffectOnce from "./useEffectOnce";
import useUpdateEffect from "./useUpdateEffect";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useLogger = (componentName: string, ...rest: any[]) => {
  useEffectOnce(() => {
    console.log(`${componentName} mounted`, ...rest);
    return () => console.log(`${componentName} unmounted`);
  });

  useUpdateEffect(() => {
    console.log(`${componentName} updated`, ...rest);
  });
};

export default useLogger;
