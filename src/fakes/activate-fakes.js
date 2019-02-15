import sinon from 'sinon';


export default function (stores) {
    stores.cache = stores.activeFakes.reduce(function (acc, name) {
        let type;
        if (stores.stubs[name]) {
            type = stores.stubs[name];
            acc[name] = sinon.stub(type.target, type.methodName);
        } else if (stores.spies[name]) {
            type = stores.spies[name];
            acc[name] = sinon.spy(type.target, type.methodName);
        }
        if (stores.actions[name] !== undefined) {
            Object.keys(stores.actions[name]).forEach(function (key) {
                let current = stores.actions[name][key];
                acc[name][current[0]].apply(acc[name],current[1]);
            });
        }
        return acc;
    }, {});
}
