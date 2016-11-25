require('node-import');

var os = include("nodejs-1/node_modules/os"); // nu include ***
console.log(os.type());

imports(process.env.npm_package_name + "/Base.js");

(function main() {
    var coreApp = new AppDelegate();
    var coreServer = new ServerApplication();
})();