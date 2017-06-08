import ma = require('vsts-task-lib/mock-answer');
import tmrm = require('vsts-task-lib/mock-run');
import path = require('path');

let taskPath = path.join(__dirname, '..', 'index.js');
let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);

tmr.setInput('parameterFile', "Hello, from task!");


// provide answers for task mock
let a: ma.TaskLibAnswers = <ma.TaskLibAnswers>{  
    "find" : {
        "test.SetParameters.xml": ["tests/test.SetParameters.xml"]
    }
};
tmr.setAnswers(a);

tmr.run();

