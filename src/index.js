import injectF from './injection/inject';
import harnessF from './injection/harness';

import registerSpyF from './registration/register-spy';
import registerStubF from './registration/register-stub';
import registerTypeF from './registration/register-type';

import activateFakesF from './fakes/activate-fakes';
import restoreFakesF from './fakes/restore-fakes';
import setActiveFakesF from './fakes/set-active-fakes';
import addActionF from './fakes/add-action';
import clearActionsF from './fakes/clear-actions';

import {curry} from 'ramda';
import sinon from 'sinon';

function liftuf(fn) {
    return function (a) {
        return function () {
            return fn(a);
        };
    };
}

function liftf(fn) {
    return function (a) {
        return function (...b) {
            return fn (a, ...b);
        };
    };
}
export default function createTester() {
    const stores = {
        spies: {},
        stubs: {},
        types: {},
        actions: {},
        activeFakes: [],
        cache: {}
    };

    const inject = curry(injectF)(stores),
        harness = curry(harnessF)(stores),
        registerSpy = curry(registerSpyF)(stores),
        registerStub = curry(registerStubF)(stores),
        registerType = curry(registerTypeF)(stores),
        activateFakes = liftuf(activateFakesF)(stores),
        restoreFakes = liftuf(restoreFakesF)(stores),
        setActiveFakes = curry(setActiveFakesF)(stores),
        addAction = curry(addActionF)(stores),
        clearActions = liftf(clearActionsF)(stores.actions);




    return {
        inject,
        harness,
        registerSpy,
        registerStub,
        registerType,
        activateFakes,
        restoreFakes,
        setActiveFakes,
        addAction,
        clearActions,
        stub: sinon.stub,
        getStores: () => stores
    };
}
