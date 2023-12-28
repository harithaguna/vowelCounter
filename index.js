console.log("hey");
var countVowel=document.getElementById('countVowel');
function vowelCount(str){
    str=str.toLowerCase();
    let vowelsArr=['a','e','i','o','u'];
    let counter=0;
    for( let i of str)
    {
        if (vowelsArr.includes(i))
        {
           counter++;
        }
    }
    countVowel.innerHTML=counter;
}