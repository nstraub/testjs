import inject from './inject';


export default function (stores, fn, ...deps) {
    return function () {
        return inject(stores, fn, ...deps)();
    };
}
