import injector from './injector';

export default function createTester() {
    const stores = {
        spies: {},
        stubs: {}
    };

    injector.registerProvider('spies', ()=> stores.spies);
    injector.registerProvider('stubs', ()=> stores.stubs);
}
