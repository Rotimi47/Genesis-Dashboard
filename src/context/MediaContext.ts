import { createContext } from "react";

export type ToUpdate = "media";

interface MediaContextProps {
  mediaQuery: boolean;
  updateDefaultProps: (value: boolean, type: ToUpdate) => void;
}

export const MediaContext = createContext<MediaContextProps>({
  mediaQuery: false,
  updateDefaultProps() {},
});
