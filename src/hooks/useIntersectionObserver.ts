import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

/**
 * Hook personnalisé pour détecter la visibilité d'un élément à l'écran.
 */
export const useIntersectionObserver = <T extends HTMLElement = HTMLElement>({
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
}: IntersectionObserverOptions = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Stop observing once visible if triggerOnce is true
                    if (triggerOnce && domRef.current) {
                        observer.unobserve(domRef.current);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { rootMargin, threshold }
        );

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return { isVisible, domRef };
};
