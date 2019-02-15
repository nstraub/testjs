import setActiveFakes from '../../src/fakes/set-active-fakes';


export default function () {
    let store;
    beforeEach(function () {
        store = {activeFakes: []};
    });

    it('should set active fakes to names passed in', function () {
        setActiveFakes(store, 'test', 'test2');
        expect(store.activeFakes[0]).toBe('test');
        expect(store.activeFakes[1]).toBe('test2');
    });
    it('should replace any active fakes in store with new names passed in', function () {
        store.activeFakes.push('pretest');

        setActiveFakes(store, 'test', 'test2');
        expect(store.activeFakes[0]).toBe('test');
        expect(store.activeFakes[1]).toBe('test2');
    });
    it('should keep store object reference intact', function () {
        const prestore = store;
        setActiveFakes(store, 'test', 'test2');

        expect(prestore).toBe(store);
    });
}
