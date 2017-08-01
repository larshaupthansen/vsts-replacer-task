

var fs = require("fs"),

    fse = require("fs-extra")
 
    ;


fse.ensureDir("dist");

fse.copy('images/icon.png', "dist/images/icon.png")
  
fse.copy('src/task.json', "dist/task.json")

fse.ensureDir("dist/node_modules/vsts-task-lib");

fse.copy('node_modules', "dist/node_modules")

  