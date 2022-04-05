// grabbing everything from the HTML file
const textArea = document.getElementById("textarea");
const charCounter = document.getElementById("charCounter")
const aLetter = document.getElementById("aLetterCounter")
const bLetter = document.getElementById("bLetterCounter")
const cLetter = document.getElementById("cLetterCounter")
const dLetter = document.getElementById("dLetterCounter")
const eLetter = document.getElementById("eLetterCounter")
const fLetter = document.getElementById("fLetterCounter")
const gLetter = document.getElementById("gLetterCounter")
const hLetter = document.getElementById("hLetterCounter")
const iLetter = document.getElementById("iLetterCounter")
const jLetter = document.getElementById("jLetterCounter")
const kLetter = document.getElementById("kLetterCounter")
const lLetter = document.getElementById("lLetterCounter")
const mLetter = document.getElementById("mLetterCounter")
const nLetter = document.getElementById("nLetterCounter")
const oLetter = document.getElementById("oLetterCounter")
const pLetter = document.getElementById("pLetterCounter")
const qLetter = document.getElementById("qLetterCounter")
const rLetter = document.getElementById("rLetterCounter")
const sLetter = document.getElementById("sLetterCounter")
const tLetter = document.getElementById("tLetterCounter")
const uLetter = document.getElementById("uLetterCounter")
const vLetter = document.getElementById("vLetterCounter")
const wLetter = document.getElementById("wLetterCounter")
const xLetter = document.getElementById("xLetterCounter")
const yLetter = document.getElementById("yLetterCounter")
const zLetter = document.getElementById("zLetterCounter")
// making the Varuables for each letter + total
let totalChar = 0;
let totalAletter = 0;
let totalBletter = 0;
let totalCletter = 0;
let totalDletter = 0;
let totalEletter = 0;
let totalFletter = 0;
let totalGletter = 0;
let totalHletter = 0;
let totalIletter = 0;
let totalJletter = 0;
let totalKletter = 0;
let totalLletter = 0;
let totalMletter = 0;
let totalNletter = 0;
let totalOletter = 0;
let totalPletter = 0;
let totalQletter = 0;
let totalRletter = 0;
let totalSletter = 0;
let totalTletter = 0;
let totalUletter = 0;
let totalVletter = 0;
let totalWletter = 0;
let totalXletter = 0;
let totalYletter = 0;
let totalZletter = 0;
// reset all the values before each For loop to avoid double counting
reset = () =>{
    totalAletter=0;
    aLetter.innerHTML=totalAletter
    totalBletter=0;
    bLetter.innerHTML=totalBletter
    totalCletter=0;
    cLetter.innerHTML=totalCletter
    totalDletter=0;
    dLetter.innerHTML=totalDletter
    totalEletter=0;
    eLetter.innerHTML=totalEletter
    totalFletter=0;
    fLetter.innerHTML=totalFletter
    totalGletter=0;
    gLetter.innerHTML=totalGletter
    totalHletter=0;
    hLetter.innerHTML=totalHletter
    totalIletter=0;
    iLetter.innerHTML=totalIletter
    totalJletter=0;
    jLetter.innerHTML=totalJletter
    totalKletter=0;
    kLetter.innerHTML=totalKletter
    totalLletter=0;
    lLetter.innerHTML=totalLletter
    totalMletter=0;
    mLetter.innerHTML=totalMletter
    totalNletter=0;
    nLetter.innerHTML=totalNletter
    totalOletter=0;
    oLetter.innerHTML=totalOletter
    totalPletter=0;
    pLetter.innerHTML=totalPletter
    totalQletter=0;
    qLetter.innerHTML=totalQletter
    totalRletter=0;
    rLetter.innerHTML=totalRletter
    totalSletter=0;
    sLetter.innerHTML=totalSletter
    totalTletter=0;
    tLetter.innerHTML=totalTletter
    totalUletter=0;
    uLetter.innerHTML=totalUletter
    totalVletter=0;
    vLetter.innerHTML=totalVletter
    totalWletter=0;
    wLetter.innerHTML=totalWletter
    totalXletter=0;
    xLetter.innerHTML=totalXletter
    totalYletter=0;
    yLetter.innerHTML=totalYletter
    totalZletter=0;
    zLetter.innerHTML=totalZletter
}
//input e listener calling the reset and the loop function
textArea.addEventListener("input", ()=>{
    let text = textArea.value
    let textToLowerCase = text.toLowerCase()
    reset()
    totalChar=0
    for(let i=0;i<text.length;i++){
        totalChar ++
        switch (textToLowerCase[i]) {
            case "a":
                totalAletter++;
                aLetter.innerHTML=totalAletter
                break;
            case "b":
                totalBletter++;
                bLetter.innerHTML=totalBletter
                break;
            case "c":
                totalCletter++;
                cLetter.innerHTML=totalCletter
                break;
            case "d":
                totalDletter++;
                dLetter.innerHTML=totalDletter
                break;
            case "e":
                totalEletter++;
                eLetter.innerHTML=totalEletter
                break;
            case "f":
                totalFletter++;
                fLetter.innerHTML=totalFletter
                break;
            case "g":
                totalGletter++;
                gLetter.innerHTML=totalGletter
                break;    
            case "h":
                totalHletter++;
                hLetter.innerHTML=totalHletter
                break;
            case "i":
                totalIletter++;
                iLetter.innerHTML=totalIletter
                break;                
            case "j":
                totalJletter++;
                jLetter.innerHTML=totalJletter
                break;    
            case "k":
                totalKletter++;
                kLetter.innerHTML=totalKletter
                break;    
            case "l":
                totalLletter++;
                lLetter.innerHTML=totalLletter
                break;    
            case "m":
                totalMletter++;
                mLetter.innerHTML=totalMletter
                break;    
            case "n":
                totalNletter++;
                nLetter.innerHTML=totalNletter
                break;    
            case "o":
                totalOletter++;
                oLetter.innerHTML=totalOletter
                break;    
            case "p":
                totalPletter++;
                pLetter.innerHTML=totalPletter
                break;    
            case "q":
                totalQletter++;
                qLetter.innerHTML=totalQletter
                break;    
            case "r":
                totalRletter++;
                rLetter.innerHTML=totalRletter
                break;    
            case "s":
                totalSletter++;
                sLetter.innerHTML=totalSletter
                break;    
            case "t":
                totalTletter++;
                tLetter.innerHTML=totalTletter
                break;    
            case "u":
                totalUletter++;
                uLetter.innerHTML=totalUletter
                break;    
            case "v":
                totalVletter++;
                vLetter.innerHTML=totalVletter
                break;    
            case "w":
                totalWletter++;
                wLetter.innerHTML=totalWletter
                break;    
            case "x":
                totalXletter++;
                xLetter.innerHTML=totalXletter
                break;    
            case "y":
                totalYletter++;
                yLetter.innerHTML=totalYletter
                break;    
            case "z":
                totalZletter++;
                zLetter.innerHTML=totalZletter
                break;    
                    default:
                break;
        }
    }
    charCounter.innerHTML = totalChar


})
