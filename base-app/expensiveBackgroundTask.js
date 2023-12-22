const blockMainThread = (wait) => {
    const startTime = Date.now();
    while (Date.now() < startTime + wait) {}
};

const setupExpensiveBackgroundTask = (interval) => {
    const recursivelyBlockMainThread = () => {
        blockMainThread(interval);
        setTimeout(recursivelyBlockMainThread, interval);
    };

    recursivelyBlockMainThread();
};

export { setupExpensiveBackgroundTask };