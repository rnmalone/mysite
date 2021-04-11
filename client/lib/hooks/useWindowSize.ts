import { useContext } from "react";
import { IWindowDimensions, viewportContext } from "../../containers/ViewportProvider";


export default function useWindowSize(): IWindowDimensions {
    return useContext(viewportContext);
}
