function firstVowel(str) {
    let vowel = /[aeiouAEIOU]/;
    return str.search(vowel);
}

module.exports = firstVowel;