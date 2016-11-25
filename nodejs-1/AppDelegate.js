var AppDelegate = class extends Application {
    constructor() {
        super().initApplication(this);
    }

    applicationDidBecomeActive() {
        // your code here
        new ConsoleLog("app works");
    }
}