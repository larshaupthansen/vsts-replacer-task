import tl = require('vsts-task-lib/task');
import trm = require('vsts-task-lib/toolrunner');
import replacertask = require('./replacertask');

async function run() {
    try {
        
        let tool: trm.ToolRunner;
        if (process.platform == 'win32') {
            let cmdPath = tl.which('cmd');
        }
        else {
            let echoPath = tl.which('echo');
        }

        //let rc1: number = await tool.exec();
        
        // call some module which does external work        
        var fileGlob:string = tl.getInput("parameterFile", true);
        
        replacertask.replaceParameters(fileGlob);
        
        
        console.log('Task done! ');
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();