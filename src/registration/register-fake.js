import uuid from '../uuid';


export default function (target, name, obj, method) {
    const alreadyRegistered = function (key) {
        let current = target[key];
        return current.target === obj && current.methodName === method;
    };

    if (typeof obj[method] !== 'function') {
        throw `the method "${method}" does not exist on target`;
    }

    if (Object.keys(target).some(alreadyRegistered)) {
        throw 'You can only register an obj/method pair once';
    }

    target[name] = {
        hash: uuid.getNext(),
        name,
        target: obj,
        methodName: method,
        isActive: true
    };
}
