import { useReducer } from "react";

type ToggleAction = boolean | undefined;

const useToggle = (
  initialValue: boolean,
): [boolean, (nextValue?: ToggleAction) => void] => {
  const [state, dispatch] = useReducer(
    (currentState: boolean, action: ToggleAction) =>
      typeof action === "boolean" ? action : !currentState,
    initialValue,
  );

  return [state, dispatch];
};

export default useToggle;
