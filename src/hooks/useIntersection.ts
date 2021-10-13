import React, { useState, useEffect } from "react";

const useIntersection = (threshold = 0.5, ref: React.MutableRefObject<any>) => {
  const [inView, setInView] = useState(false);

  const callbackFn = (entries: any) => {
    const [entry] = entries;
    setInView(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold,
    };
    const observer = new IntersectionObserver(callbackFn, options);
    const elem = ref.current;
    if (elem) observer.observe(elem);
    return () => {
      if (elem) observer.unobserve(elem);
    };
  }, [ref, threshold]);

  return [inView];
};

export default useIntersection;
