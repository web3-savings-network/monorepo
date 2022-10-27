import { useContext } from "react";
import Context from "./Context";

export function useChanceCards() {
    return useContext(Context);
}

export default useChanceCards;