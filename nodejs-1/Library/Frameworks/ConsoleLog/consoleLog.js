var ConsoleLog = class {
    constructor(message) {
        var headLine = this.buildHeadLine();
        this.showLogMessage(headLine, message);
    }

    buildHeadLine() {
        return "[" + new Date().toLocaleString() + "]";
    }

    showLogMessage(headLine, message) {
        console.log(headLine + ": " + message);
    }
}