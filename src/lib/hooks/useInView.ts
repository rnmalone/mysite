import { RefObject, useEffect } from "react";

/**
 * Fires the callback when the ref is in the viewport
 *
 * Will reassign the observer when the deps change
 *
 * @param ref
 * @param onInView
 * @param deps
 */
export default function useInView(ref: RefObject<any>, onInView: () => void, deps: any[] = []) {

    const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting ? onInView() : void 0
    )

    useEffect(() => {
        observer.observe(ref.current)

        return () => {
            observer.disconnect()
        }
    }, deps)

}