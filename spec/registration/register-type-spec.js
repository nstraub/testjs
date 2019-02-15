import registerType from '../../src/registration/register-type';


export default function () {
    const store = {types: {}};
    let type = function () {};
    it('should register a type with the provided lifetime', function () {
        registerType(store, 'test', type, 'singleton');
        expect(store.types.test.name).toEqual('test');
        expect(store.types.test.type).toEqual(type);
        expect(store.types.test.lifetime).toEqual('singleton');
    });
    it('should default to transient lifetime if none is provided', function () {
        registerType(store, 'test', type);
        expect(store.types.test.name).toEqual('test');
        expect(store.types.test.type).toEqual(type);
        expect(store.types.test.lifetime).toEqual('transient');
    });
    it('should accept only valid lifetimes', function () {
        expect(() => registerType(store, 'test', function () {}, 'transient')).not.toThrow();
        expect(() => registerType(store, 'test', function () {}, 'singleton')).not.toThrow();
        expect(() => registerType(store, 'test', function () {}, 'state')).not.toThrow();
        expect(() => registerType(store, 'test', function () {})).not.toThrow();
        expect(() => registerType(store, 'test', function () {}, 'invalid')).toThrow('invalid lifetime. Allowed lifetimes are transient, singleton and state');
    });
}
