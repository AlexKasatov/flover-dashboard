// use it for smoth transition bettwen page with a lot of elements
export const pageTransition = {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
};

// use it for smoth transition bettwen page with a single element like login
export const pageTransitionSingle = {
        hidden: { y: -100, opacity: 0 },
        enter: { y: 0, opacity: 1, transition: { delay: 0.5, type: 'spring', stiffness: 100 } },
        exit: { opacity: 0 },
};
