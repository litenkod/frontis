
module.exports = {
    console2: function(element) {
        console.log(element)
        if (!element) throw new TypeError("console2 wants something to log!");
        const render = element.toString() + ': ' + element;

        return console.log(render);
    }
}