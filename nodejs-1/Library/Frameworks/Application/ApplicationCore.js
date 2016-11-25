var Application = class {
    initApplication(childrenAppDelegate) {
        this.setApplicationExitHandlers(this.applicationWillFinish);
        this.applicationWillBecomeActive(childrenAppDelegate);
    }

    setApplicationExitHandlers(completionHandler) {
        process.on('exit', this.applicationDidFinish.bind(null, {cleanup: true}));
        process.on('SIGINT', this.applicationDidFinishWithError.bind(null, {exit: true}));
        process.on('uncaughtException', this.applicationDidFinishWithUncaughtException.bind(null, {exit: true}));
    }

    applicationWillBecomeActive(childrenAppDelegate) {
        try {
            new ConsoleLog("Application started");
            childrenAppDelegate.applicationDidBecomeActive();
        } catch (ApplicationError) {
            console.log("(!) Application Error: " + ApplicationError);
        }
    }

    applicationDidFinish(options)
    {
        console.log("\nApplication did finish launching\n");
    }

    applicationDidFinishWithError(options, err)
    {   
        console.log("\n(!) ERROR:");
        console.log(err.stack);

        if(options.exit)
            process.exit();
    }

    applicationDidFinishWithUncaughtException(options, err)
    {
        console.log("\n(!) ERROR: Uncaught Exception");
        
        console.log("\n(!) ERROR TYPE:");
        console.log(err.stack);

        if(options.exit)
            process.exit();
    }
}