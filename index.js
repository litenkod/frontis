
module.exports = {
    console2: function(element) {
        if (element === null) throw new TypeError("console2 wants something to log!");

        let varType = element,
            value = '';

        if (typeof(element) == 'undefined') {
            varType = 'undefined';
            value = element;

        } else if (Array.isArray(element)) {
            varType = '[array]';
            for (let i = 0; i < element.length; i++) {
                value += i + ': ' + element[i] + '\n';
            }

        } else if (typeof(element) == 'object'){
            varType = '{object}';
            Object.entries(element).forEach(([key, val]) => {
                value += 'key: ' + key + ', val: ' + val + '\n';
            });

        } else if(typeof(element) == 'string') {
            varType = 'string';
            value = element;

        } else if(typeof(boolean)){
            varType = 'boolean';
            value = element;

        } else{
            varType = 'unknown';
            value = element;
        }

        return console.log(varType + '\n' + value);
    }
}
