import clearActions from '../../src/fakes/clear-actions';


export default function () {
    it('should remove actionName from fake descriptor', function () {
        const store = {actions: {testFake: {testAction: []}}};
        clearActions(store, 'testFake', 'testAction');
        expect(store.actions.testFake).toEqual({});
    });

    it('should remove all actions from fake descriptor if no action name passed', function () {
        const store = {actions: {testFake: {testAction: []}}};
        clearActions(store, 'testFake');
        expect(store.actions.testFake).toEqual({});
    });

    it('should remove all actions from store if no action nor fake name passed', function () {
        const store = {actions: {testFake: {testAction: []}}};
        clearActions(store);
        expect(store.actions).toEqual({});
    });
}
