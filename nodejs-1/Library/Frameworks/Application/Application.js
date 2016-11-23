var Application = class {
    initApplication(childrenAppDelegate) {
        this.setApplicationExitHandlers(this.applicationDidFinishLaunching);
        this.applicationWillBecomeActive(childrenAppDelegate);
    }

    setApplicationExitHandlers(completionHandler) {
        process.on('exit', completionHandler.bind(null, {cleanup: true}));
        process.on('SIGINT', completionHandler.bind(null, {exit: true}));
        process.on('uncaughtException', completionHandler.bind(null, {exit: true}));
    }

    applicationWillBecomeActive(childrenAppDelegate) {
        try {
            new ConsoleLog("Application started");
            childrenAppDelegate.applicationDidBecomeActive();
        } catch (ApplicationError) {
            console.log("(!) Application Error: " + ApplicationError);
        }
    }

     applicationDidFinishLaunching(options, err) {
        if (options.cleanup)
            console.log("\nApplication did finish launching\n");
        if (err)
        {
            console.log("\n(!) ERROR:");
            console.log(err.stack);
        }
        if (options.exit)
            process.exit();
    }
}