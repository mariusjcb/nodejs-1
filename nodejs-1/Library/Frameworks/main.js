var FrameworksLoader = class {
    getListOfCoreFrameworks() {
        return JSON.parse(Import.Framework("CoreFrameworks.json").text);
    }

    getListOfUserFrameworks() {
        return JSON.parse(Import.Main("frameworks.json").text)
    }

    loadFrameworksFromArray(frameworksArray)
    {
        for(var index in frameworksArray)
        {
            try {
                Import.Framework(frameworksArray[index].frameworkPath);
                console.log("Note: "+frameworksArray[index].frameworkName+" loaded");
            } catch (FrameworkError) {
                console.log("(!) Framework ERROR: "+frameworksArray[index].frameworkName+" | " + FrameworkError);
            }
        }
    }

    constructor() {
        if(process.env["frameworksLoaded"] != true)
        {
            this.loadFrameworksFromArray(this.getListOfCoreFrameworks());
            this.loadFrameworksFromArray(this.getListOfUserFrameworks());

            console.log("\n");

            process.env["frameworksLoaded"] = true
        }
    }
}