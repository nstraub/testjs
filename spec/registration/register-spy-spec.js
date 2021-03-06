import registerSpy from '../../src/registration/register-spy';
import tester from '../tester';
import {curry} from 'ramda';


export default function () {
    let spyable = {
        spyme() {
            return 'test';
        }
    };
    const stores = tester.getStores();
    const rs = curry(registerSpy)(stores);
    beforeEach(function () {
        stores.spies = {};
    });
    it('should register a spy descriptor for use with Sinon', function () {
        rs('testSpy', spyable, 'spyme');

        expect(stores.spies.testSpy).toBeDefined();
    });
    it('should throw an error if method cannot be found on obj', function () {
        expect(() => rs('testSpy2', spyable, 'invalidMethod')).toThrow('the method "invalidMethod" does not exist on target');
    });
    it('should throw an error if the same obj/method combination already exists', function () {
        rs('testSpy', spyable, 'spyme');
        expect(()=>rs('testSpy', spyable, 'spyme')).toThrow('You can only register an obj/method pair once');
    });
}
