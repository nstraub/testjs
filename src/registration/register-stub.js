import injector from '../injector';
import uuid from '../uuid';

export default function (name, obj, method) {
    const stubs = injector.get('stubs');

    if (typeof obj[method] !== 'function') {
        throw `the method "${method}" does not exist on target`;
    }
    Object.keys(stubs).forEach(function (key) {
        let current = stubs[key];
        if (current.target === obj && current.methodName === method) {
            throw 'You can only register an obj/method pair once';
        }
    });
    stubs[name] = {
        hash: uuid.getNext(),
        name,
        target: obj,
        methodName: method,
        isActive: true
    };
}
