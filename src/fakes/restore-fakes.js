export default function (stores) {
    let cache = stores.cache;
    Object.keys(cache).forEach(function (key) {
        cache[key].restore();
        delete cache[key];
    });
}
