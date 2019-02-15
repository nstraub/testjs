import sinon from 'sinon';

import restoreFakes from '../../src/fakes/restore-fakes';

export default function () {
    let cache;
    beforeEach(function () {
        cache = {};
    });

    it('should restore all stubs and spies in cache object', function () {
        let test = {restore: sinon.spy()};
        cache.test = test;
        let test1 = {restore: sinon.stub()};
        cache.test1 = test1;
        restoreFakes({cache});

        expect(test.restore).toHaveBeenCalledOnce();
        expect(test1.restore).toHaveBeenCalledOnce();
    });

    it('shoud empty cache object', function () {
        cache.test = {restore: sinon.spy()};
        cache.test1 = {restore: sinon.stub()};
        restoreFakes({cache});

        expect(Object.keys(cache).length).toBe(0);
    });
}
