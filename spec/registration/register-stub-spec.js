import registerStub from '../../src/registration/register-stub';
import injector from '../../src/injector';

export default function () {
    let spyable = {
        spyme() {
            return 'test';
        }
    };
    const stubs = injector.get('stubs');

    beforeEach(function () {
        Object.keys(stubs).forEach(function (key) {
            delete stubs[key];
        });
    });
    it('should register a spy descriptor for use with Sinon', function () {
        registerStub('testSpy', spyable, 'spyme');

        expect(stubs.testSpy).toBeDefined();
    });
    it('should throw an error if method cannot be found on obj', function () {
        expect(() => registerStub('testSpy2', spyable, 'invalidMethod')).toThrow('the method "invalidMethod" does not exist on target');
    });
    it('should throw an error if the same obj/method combination already exists', function () {
        registerStub('testSpy', spyable, 'spyme');
        expect(()=>registerStub('testSpy', spyable, 'spyme')).toThrow('You can only register an obj/method pair once');
    });
}
