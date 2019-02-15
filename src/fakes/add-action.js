export default function (stores, fakeName, actionName, action, ...actionArgs) {
    if (stores.actions[fakeName] === undefined) {
        stores.actions[fakeName] = {};
    }

    stores.actions[fakeName][actionName] = [action, actionArgs];
}
