import { useEffect, useState } from "react";

export function useCounter(target: number, duration: number = 800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const step = Math.max(1, Math.floor(target / (duration / 16)));
    const t = setInterval(() => {
      setValue((v) => {
        const next = v + step;
        if (next >= target) {
          clearInterval(t);
          return target;
        }
        return next;
      });
    }, 16);
    return () => clearInterval(t);
  }, [target, duration]);

  return value;
}