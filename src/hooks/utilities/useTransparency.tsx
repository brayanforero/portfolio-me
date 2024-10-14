import { useEffect, useRef, useState } from "react";

interface Props {
  distance: number
}

function useTransparency({ distance = 0 }: Props) {
  const [isFar, setIsFar] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null);


  useEffect(() => {
    const handler = () => {
      const { scrollY } = window;

      setIsFar(scrollY > distance)
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return { headerRef, isFar };
}

export default useTransparency;