import { useContext } from "react";

import { StateContext } from "utils/contexts";

export const useStateContext = () => useContext(StateContext);
