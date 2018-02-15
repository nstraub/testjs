import {activateFakes_spec, addAction_spec, restoreFakes_spec, setActiveFakes_spec} from './fakes';
import {registerSpy_spec, registerStub_spec} from './registration';
import createTester from '../src/index';

createTester();
describe('Test-JS', function () {
    describe('Fakes', function () {
        describe('Activate Fakes', activateFakes_spec);
        describe('Add Action', addAction_spec);
        describe('Restore Fakes', restoreFakes_spec);
        describe('Set Active Fakes', setActiveFakes_spec);
    });

    describe('Registration', function () {
        describe('Register Spy', registerSpy_spec);
        describe('Register Stub', registerStub_spec);
    });
});
