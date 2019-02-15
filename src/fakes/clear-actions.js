export default function (stores, fakeName, actionName) {
    let actions = stores.actions;

    if (fakeName === undefined) {
        Object.keys(actions).forEach(key => delete actions[key]);
    } else if (actionName === undefined) {
        actions[fakeName] = {};
    } else {
        delete actions[fakeName][actionName];
    }
}
