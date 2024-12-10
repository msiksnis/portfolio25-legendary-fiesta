import { useState } from "react";

export function useFocusStates<T extends string>() {
  const [focusStates, setFocusStates] = useState<Record<T, boolean>>(
    {} as Record<T, boolean>,
  );

  const handleFocus = (field: T, isFocused: boolean) => {
    setFocusStates((prev) => ({ ...prev, [field]: isFocused }));
  };

  return { focusStates, handleFocus };
}
