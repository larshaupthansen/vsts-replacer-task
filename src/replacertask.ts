
import tl = require('vsts-task-lib/task');
import fs = require('fs');

var regex = /__[A-Za-z0-9.]*__/g;


export function replaceVariables(content: string) : string {


    var matches = content.match(regex);
    if(matches != null){
        for(var i=0; i < matches.length; i++) {
            var match = matches[i];
            var variableName  = match.replace(/__/g,"");       
            content = content.replace(match,  tl.getVariable(variableName));
        }
    }
    return content;

}

export function replaceParameters(fileGlob: string) {

    

    console.log("Searching for: " + fileGlob);

    var files: string[]=   tl.find(fileGlob);

    for(var i= 0; i <  files.length; i++) {
        console.log("Found: " + files[i]);
        var data = fs.readFileSync(files[i]).toString();
        data = replaceVariables(data);
        console.log(data);
        tl.writeFile(files[i],data);
    }

}