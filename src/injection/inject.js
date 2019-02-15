import sinon from 'sinon';

export default function (stores, fn, ...deps) {
    let providers = deps.map((dep)=> _inject(stores, dep));
    return function () {
        return fn.apply(this, providers.map((provider)=>provider()));
    };
}


function _inject(stores, name) {
    if (stores.cache[name] !== undefined) {
        return () => stores.cache[name];
    }

    if (stores.stubs[name] !== undefined) {
        return sinon.stub;
    }

    if (stores.spies[name] !== undefined) {
        return sinon.spy;
    }

    let descriptor = stores.types[name];

    if (!descriptor.provider) {
        if (descriptor.lifetime === 'transient') {
            descriptor.provider = () => new descriptor.type();
        } else {
            descriptor.instance = new descriptor.type();
            descriptor.provider = () => descriptor.instance;
        }
    }
    return descriptor.provider;
}
