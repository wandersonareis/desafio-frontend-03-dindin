import { useState, useEffect, useCallback } from "react";

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((event) => {
    setValue(event.target.value.trim());
  }, []);

  function resetValue() {
    setValue(initialValue);
  }

  return {
    value,
    onChange,
    resetValue,
  };
}

export function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}