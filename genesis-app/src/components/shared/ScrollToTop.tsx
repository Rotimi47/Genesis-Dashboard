import type { ReactNode } from "react"
import { useEffect } from "react"

interface ScrollToTopProps<T extends string> {
  value:T;  // The prop to watch for changes
  children: ReactNode;

}


export function ScrollToTop<T extends string> ({
  value,
  children,
}: ScrollToTopProps<T>) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [value]);

  return <>{children}</>
};


