const lettersBox = document.getElementById("letters")
const textArea =document.getElementById("textarea")
let letters={};
let ch;
textArea.addEventListener("input", ()=>{
    let text = textArea.value
    let textToLowerCase = text.toLowerCase()
    letters ={};
    for(let i=0;i<text.length;i++){
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
        const newParagraph = document.createElement("p")
        newParagraph.append(`${letter}: ${letters[letter]}`)
        lettersBox.append(newParagraph)
    }
})
