import ma = require('vsts-task-lib/mock-answer');
import tmrm = require('vsts-task-lib/mock-run');
import path = require('path');
import assert = require('assert');

let taskPath = path.join(__dirname, '..', 'index.js');

let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);

tmr.setInput('parameterFile', null);

let a: ma.TaskLibAnswers = <ma.TaskLibAnswers>{
  
   
};
tmr.setAnswers(a);

tmr.run();
