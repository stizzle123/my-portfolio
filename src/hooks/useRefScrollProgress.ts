import { useRef, useState, useLayoutEffect } from "react";

const useRefScrollProgress = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    //@ts-ignore
    const rect = ref.current.getBoundingClientRect()!;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop;
    setStart(offsetTop / document.body.clientHeight);
    setEnd((offsetTop + rect.height) / document.body.clientHeight);
  }, [start, end]);
  return { ref, start, end };
};

export default useRefScrollProgress;
