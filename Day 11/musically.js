/* 
Enharmonic Equivalents
In music, notes can be written out in multiple ways (especially for notes on the black keys). 
Although these notes are spelled out differently, they still are the same note physically.

C# = Db, D# = Eb, F# = Gb, G# = Ab, A# = Bb

Given a musical note, create a function that returns its enharmonic equivalent. The examples below should make this clear.

Examples
getEquivalent("D#") ➞ "Eb"

getEquivalent("Gb") ➞ "F#"

getEquivalent("Bb") ➞"A#"
Notes
Note names will always be a capital letter followed by either # or b.
Remember that the note after G is A and vice versa.
*/

function getEquivalent(str){

    var keys = 'cdefgab'.toUpperCase().split("");
    
    if(str.endsWith('#')){
        var str = str.split("");
        str[0] = keys[keys.indexOf(str[0]) + 1];
        str[1] = 'b'
        str = str.join("");
    }else{
        str = str.split("");
        str[0] = keys[keys.indexOf(str[0])-1];
        str[1]= '#'
        str = str.join("")
    }

    return str;

}

console.log(getEquivalent("Bb"));
console.log(getEquivalent("D#"));