

const testPalindrome = document.getElementById('inputpalindrome');
const resultPalindrome = document.getElementById('resultatpalindrome');
const testIsogramme = document.getElementById('inputisogramme');
const resultIsogramme = document.getElementById('resultatisogramme');

function reverseString(str) {
    return str.split('').reverse().join('');
}
 //split : sépare les éléments en tableau
 //reverse : inverse les éléments du tableau
 //join : rejoint les éléments du tableau en 1 élément

function estPalindrome() {
    
    if (testPalindrome.value.toLowerCase() === reverseString(testPalindrome.value.toLowerCase())) {

        resultPalindrome.textContent = `ceci est un palindrome !!`
    }
    else {
        resultPalindrome.textContent = `ceci n'est pas un palindrome !!`
    }
}

function estIsogramme() {

    splits = testIsogramme.value.split('');
    length = splits.length;
    cpte = 0

    for (x=0; x<length; x++) {
        console.log(splits[x]);
        compteur();
        cpte = cpte + nbre;
        console.log(cpte);

        if (nbre > 1) {
            resultIsogramme.textContent = `ceci n'est pas un isogramme !!`
        }
        else if (cpte === length) {
            resultIsogramme.textContent = `ceci est un isogramme !!`
        }
        else {}
    }
}

function compteur() {
    nbre = 0
    for (i=0; i<length; i++) {
        if (splits[x] === splits[i]) {
            nbre = nbre + 1;
        }
    }
    return nbre
}