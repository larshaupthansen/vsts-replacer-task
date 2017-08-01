

var fs = require("fs"),

    fse = require("fs-extra")
 
    ;


fse.ensureDir("dist");

fse.copy('images/icon.png', "dist/images/icon.png")
  
fse.copy('src/task.json', "dist/task.json")

fse.ensureDir("dist/node_modules");

fse.copy('node_modules/vsts-task-lib', "dist/node_modules/vsts-task-lib");
fse.copy('node_modules/minimatch', "dist/node_modules/minimatch");
fse.copy('node_modules/mockery', "dist/node_modules/mockery");
fse.copy('node_modules/q', "dist/node_modules/q");
fse.copy('node_modules/semver', "dist/node_modules/semver");
fse.copy('node_modules/shelljs', "dist/node_modules/shelljs");
fse.copy('node_modules/uuid', "dist/node_modules/uuid");


  