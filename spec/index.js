import {activateFakes_spec, addAction_spec, clearActions_spec, restoreFakes_spec, setActiveFakes_spec} from './fakes';
import {registerSpy_spec, registerStub_spec, registerType_spec} from './registration';
import 'jasmine-sinon';

describe('Test-JS', function () {
    describe('Fakes', function () {
        describe('Activate Fakes', activateFakes_spec);
        describe('Add Action', addAction_spec);
        describe('Clear Actions', clearActions_spec);
        describe('Restore Fakes', restoreFakes_spec);
        describe('Set Active Fakes', setActiveFakes_spec);
    });

    describe('Registration', function () {
        describe('Register Spy', registerSpy_spec);
        describe('Regiister Stub', registerStub_spec);
        describe('Regiister Type', registerType_spec);
    });
});
