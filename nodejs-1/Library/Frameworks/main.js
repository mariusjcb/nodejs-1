var forcedFrameworks = [
    {
        "frameworkName": "Application",
        "frameworkPath": "Application/Application.js",
        "frameworkVersion": "1.0.0"
    }
];

(function loadAllFrameworks() {
    var frameworksListFromJSON = JSON.parse(imports(process.env.npm_package_name+"/frameworks.json").text);

    loadFrameworksFromArray(forcedFrameworks);
    loadFrameworksFromArray(frameworksListFromJSON);
})();

function loadFrameworksFromArray(frameworksArray)
{
    for(var index in frameworksArray)
    {
        try {
            Import(frameworksArray[index].frameworkPath);
            console.log("Note: "+frameworksArray[index].frameworkName+" loaded");
        } catch (FrameworkError) {
            console.log("(!) Framework ERROR: "+frameworksArray[index].frameworkName+" | " + FrameworkError);
        }
    }
}