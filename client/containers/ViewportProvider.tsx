import React, {useEffect, useState} from "react";
import {IComponentProps} from "../models/generic";


export interface IWindowDimensions {
    width: number;
    height: number;
}

export const viewportContext = React.createContext<IWindowDimensions>({
    height: window.innerHeight,
    width: window.innerWidth
});

const ViewportProvider = ({ children }: IComponentProps) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <viewportContext.Provider value={{ width, height }}>
            {children}
        </viewportContext.Provider>
    );
};

export default ViewportProvider;

