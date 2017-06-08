import * as path from 'path';
import * as assert from 'assert';
import * as ttm from 'vsts-task-lib/mock-test';

describe('Test ReplacerTask', function () {
    before(() => {

    });

    after(() => {

    });

    it('Should fail with no input', (done: MochaDone) => {
        this.timeout(1000);

        let tp = path.join(__dirname, 'fail-no-parameters.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.run();
        assert(!tr.succeeded, 'should have failed');
        done();
    });

  });