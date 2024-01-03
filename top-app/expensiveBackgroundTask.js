const blockMainThread = (wait) => {
    const startTime = Date.now();
    while (Date.now() < startTime + wait) {}
};

const setupExpensiveBackgroundTask = (interval, statusContainer) => {
    const recursivelyBlockMainThread = () => {
        requestAnimationFrame(() => {
            statusContainer.innerHTML = "blocked"
            requestAnimationFrame(() => {
                statusContainer.innerHTML = "unblocked"
                blockMainThread(interval);
                setTimeout(recursivelyBlockMainThread, interval);
            })
        })
    };

    recursivelyBlockMainThread();
};

export { setupExpensiveBackgroundTask };