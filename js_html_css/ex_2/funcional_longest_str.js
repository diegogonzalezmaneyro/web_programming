/**
* Returns the longest of the given
* strings.
*
* @param {Array<String>} strings
* @return {String}
*/

function funcionalLongestString(strings) {
    return strings.reduce( (previous,current) => {
        return (current.length > previous.length) ? current:previous;
    }, '');
};

const str_arr = [ 'perro', 'gato', 'elefante','pantera','lobo marino' ];
console.log("Palabra más larga: "+funcionalLongestString(str_arr));