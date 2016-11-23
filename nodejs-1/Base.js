process.env['frameworkPath'] = process.env.npm_package_name+"/Library/Frameworks/";
imports(process.env['frameworkPath']+"/main.js");

function Import(frameworkPath) {
    imports(process.env['frameworkPath']+frameworkPath);
};