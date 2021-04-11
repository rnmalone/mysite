import React, {useEffect, useState} from "react";
import {IComponentProps} from "../models/generic";
import { mobileThreshold } from '../config/client.config';

export interface IWindowDimensions {
    width: number;
    height: number;
    isMobile: boolean;
}

const checkMobileViewport = (x: number, y: number) => x < mobileThreshold && y > x

export const viewportContext = React.createContext<IWindowDimensions>({
    height: window.innerHeight,
    width: window.innerWidth,
    isMobile: checkMobileViewport(window.innerWidth, window.innerHeight)
});

const ViewportProvider = ({ children }: IComponentProps) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [isMobile, setIsMobile] = useState(false)

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        setIsMobile(checkMobileViewport(window.innerWidth, window.innerHeight))
    }

    useEffect(() => {
        handleWindowResize()
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <viewportContext.Provider value={{ width, height, isMobile }}>
            {children}
        </viewportContext.Provider>
    );
};

export default ViewportProvider;

