const lettersBox = document.getElementById("letters")
const textArea =document.getElementById("textarea")
const totalChars = document.getElementById("charCounter")
let total = 0;
let letters={};
let ch;
textArea.addEventListener("input", ()=>{
    let text = textArea.value
    let textToLowerCase = text.toLowerCase()
    letters ={};
    total = 0;
    for(let i=0;i<text.length;i++){
        total++
        totalChars.innerHTML= total;
        ch=textToLowerCase[i];
        if(letters[ch] === undefined){
            letters[ch] =1;
        }
        else{
            letters[ch]++;
        }
    }
    lettersBox.innerHTML = ""
    for(let letter in letters){
        const newParagraph = document.createElement("p");
        newParagraph.append(`${letter}: ${letters[letter]}`);
        lettersBox.append(newParagraph);
    }
})
