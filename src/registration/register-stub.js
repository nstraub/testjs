import registerFake from './register-fake';

export default function (stores, name, obj, method) {
    registerFake(stores.stubs, name, obj, method);
}
