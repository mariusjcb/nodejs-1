process.env['libraryPath'] = process.env.npm_package_name+"/Library/";
process.env['frameworkPath'] = process.env['libraryPath']+"/Frameworks/";
process.env['modulesPath'] = process.env['libraryPath']+"/Modules/";

function Importer() {
    this.Framework = function(frameworkPath) {
        return imports(process.env['frameworkPath']+frameworkPath);
    };

    this.Module = function(frameworkPath) {
        return imports(process.env['frameworkPath']+frameworkPath);
    };

    this.Node = function(filePath){
        return Import.Main("node_modules/"+filePath);
    }

    this.Main = function(filePath) {
        return imports(process.env.npm_package_name+"/"+filePath);
    }

    this.Root = function(filePath) {
        return imports(filePath);
    }
}

var Import = new Importer();
Import.Framework("main.js");

(function initFrameworksLoader() {
    new FrameworksLoader();
    Import.Main("AppDelegate.js");
})();