import { useEffect, useState } from "react";

/**
 * Overrides the browser behaviour to only allow the Tab key to focus one of the elements that get set
 *
 * @param condition
 */
export default function useTabTrap(condition: boolean) {
    const [elements, setElements] = useState<any[]>([])
    const [currentElementIndex, setIndex] = useState(-1);

    const handleTab = async (evt: KeyboardEvent) => {
        if (evt.ctrlKey || evt.altKey) {
            return;
        }

        if (evt.key === 'Tab' && elements.length) {
            evt.preventDefault();
            if (currentElementIndex === -1) {
                await elements[0].focus()
                setIndex(0)
            } else {
                if (evt.shiftKey) {
                    if (currentElementIndex === 0) {
                        await elements[elements.length - 1].focus()
                        setIndex(elements.length - 1)
                    } else {
                        await elements[currentElementIndex - 1].focus()
                        setIndex((current) => current - 1)
                    }
                } else {
                    if (currentElementIndex === elements.length - 1) {
                        await elements[0].focus()
                        setIndex(0)
                    } else {
                        await elements[currentElementIndex + 1].focus()
                        setIndex((current) => current + 1)
                    }
                }
            }
        }
    }

    useEffect(() => {
        if (condition) {
            window.addEventListener('keydown', handleTab, false);
            return () => {
                window.removeEventListener('keydown', handleTab, false);
            };
        }

        return void 0;
    }, [currentElementIndex, elements, condition])

    return {
        setElements: (elements: any[]) => {
            setElements(elements);
            setIndex(-1);
        }
    }
}