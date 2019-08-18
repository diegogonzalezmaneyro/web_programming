/**
* Returns the longest of the given
* strings.
*
* @param {Array<String>} strings
* @return {String}
*/

function longestString(strings) {
    let s = '';
    for (let string in strings) {
        if (string.length > s.length) {
            s = string;
        }
    }
    return s;
    // your code goes here!
    }
