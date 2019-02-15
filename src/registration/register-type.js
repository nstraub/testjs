import uuid from '../uuid';

export default function (stores, name, type, lifetime = 'transient') {
    if (!(lifetime === 'transient' || lifetime === 'singleton' || lifetime === 'state')) {
        throw 'invalid lifetime. Allowed lifetimes are transient, singleton and state';
    }
    stores.types[name] = {
        hash: uuid.getNext(),
        name,
        type,
        lifetime
    };
}
