/**
* Returns the longest of the given
* strings.
*
* @param {Array<String>} strings
* @return {String}
*/

function longestString(strings) {
    let s = '';
    for (let string of strings) {
        if (string.length > s.length) {
            s = string;
        }
    }
    console.log(s)
    return s;
    // your code goes here!
    }

const str_arr = [ 'cat', 'rabbit', 'elephant' ];
longestString(str_arr);