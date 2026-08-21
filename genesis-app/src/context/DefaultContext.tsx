import { useCallback, useState } from "react";
import type { ReactNode } from "react";
import { MediaContext } from "./MediaContext";
import type { ToUpdate } from "./MediaContext";

interface Props {
  children: ReactNode;
}

export const DefaultContextProvider = ({ children }: Props) => {
  const [mediaQuery, setMediaQuery] = useState(false);

  const updateDefaultProps = useCallback((value: boolean, type: ToUpdate) => {
    switch (type) {
      case "media":
        setMediaQuery(value);
        break;
    }
  }, []);

  return (
    <MediaContext.Provider value={{ mediaQuery, updateDefaultProps }}>
      {children}
    </MediaContext.Provider>
  );
};
