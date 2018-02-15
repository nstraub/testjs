import registerSpy from '../../src/registration/register-spy';
import injector from '../../src/injector';

export default function () {
    let spyable = {
        spyme() {
            return 'test';
        }
    };
    const spies = injector.get('spies');

    beforeEach(function () {
        Object.keys(spies).forEach(function (key) {
            delete spies[key];
        });
    });
    it('should register a spy descriptor for use with Sinon', function () {
        registerSpy('testSpy', spyable, 'spyme');

        expect(spies.testSpy).toBeDefined();
    });
    it('should throw an error if method cannot be found on obj', function () {
        expect(() => registerSpy('testSpy2', spyable, 'invalidMethod')).toThrow('the method "invalidMethod" does not exist on target');
    });
    it('should throw an error if the same obj/method combination already exists', function () {
        registerSpy('testSpy', spyable, 'spyme');
        expect(()=>registerSpy('testSpy', spyable, 'spyme')).toThrow('You can only register an obj/method pair once');
    });
}
