
module.exports = function console2(element) {
    console.log(element)
    if (!element) throw new TypeError("Frontis wants a something to log!");
    const render = element.toString() + ': ' + element;
    return console.log(render);
};
