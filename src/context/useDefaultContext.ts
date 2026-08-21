import { useContext } from "react";
import { MediaContext } from "./MediaContext";

export const useDefaultContext = () => useContext(MediaContext);
