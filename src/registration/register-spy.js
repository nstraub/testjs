import injector from '../injector';
import uuid from '../uuid';

export default function (name, obj, method) {
    const spies = injector.get('spies');

    if (typeof obj[method] !== 'function') {
        throw `the method "${method}" does not exist on target`;
    }
    Object.keys(spies).forEach(function (key) {
        let current = spies[key];
        if (current.target === obj && current.methodName === method) {
            throw 'You can only register an obj/method pair once';
        }
    });
    spies[name] = {
        hash: uuid.getNext(),
        name,
        target: obj,
        methodName: method,
        isActive: true
    };
}
