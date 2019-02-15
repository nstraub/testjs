import addAction from '../../src/fakes/add-action';


export default function () {
    it('should add an action to the list of actions for a fake', function () {
        const store = {actions: {testFake: {}}};
        addAction(store, 'testFake', 'testAction', 'test', 'test');
        expect(store.actions.testFake.testAction).toEqual(['test', ['test']]);
    });
    it('should create an empty index for a fake which has none', function () {
        const store = {actions: {}};
        addAction(store, 'testFake', 'testAction', 'test', 'test');
        expect(store.actions.testFake).toBeDefined();
    });
}
