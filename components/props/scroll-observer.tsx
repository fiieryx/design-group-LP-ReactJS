import React, { useState, useCallback, useEffect } from "react";

interface ScrollValue {
  scrollY: number;
}

export const ScrollContext = React.createContext<ScrollValue>({
  scrollY: 0,
});

type Props = {
  children?: React.ReactNode;
};

const ScrollObserver: React.FC<Props> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const handleSroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    addEventListener("scroll", handleSroll, { passive: true });
    return document.removeEventListener("scroll", handleSroll);
  }, [handleSroll]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserver;
