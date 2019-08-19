/**
* Returns the longest of the given
* strings.
*
* @param {Array<String>} strings
* @return {String}
*/

function functionalLongestString(strings) {
    return strings.reduce( (previous,current) => {
        return (current.length > previous.length) ? current:previous;
    }, '');
};

function strongLongestStringInText (str_array) {
    text_splitted = str_array.split(' ')
    longest = functionalLongestString(text_splitted);
    return str_array.replace(longest,"<strong>"+longest+"</strong>");
}

function replaceLongestStrong(){
    body_text = document.getElementById('text');
    body_text.innerHTML = strongLongestStringInText(body_text.textContent)
}

// const buttonElem = document.getElementById('submit-button');

// buttonElem.addEventListener('dblclick', fuction(event) {
//     console.log('Double Clicked');
// };)