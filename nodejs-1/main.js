require('node-import');

imports(process.env.npm_package_name+"/Base.js");
imports(process.env.npm_package_name+"/AppDelegate.js");

(function main() {
    var coreApp = new AppDelegate();
})();