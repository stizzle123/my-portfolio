import { useRef, useState, useEffect } from "react";

const useRefScrollProgress = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    window.addEventListener("scroll", () => {
      //@ts-ignore
      const rect = ref.current.getBoundingClientRect()!;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const offsetTop = rect.top + scrollTop;
      setStart(offsetTop / document.body.clientHeight);
      setEnd((offsetTop + rect.height) / document.body.clientHeight);
    });
  }, [start, end, ref]);
  return { ref, start, end };
};

export default useRefScrollProgress;
