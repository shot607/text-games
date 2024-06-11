alreadyUsed = []

function solve(e){
    e.preventDefault();
    let text = document.getElementsByClassName("syllable")[0].textContent;
    let temps = []
    a.some((x) => {
        if(x.indexOf(text.toUpperCase()) > -1){
            temps.push(x)
        }
        if(temps.length==100){
            return true;
        }
    });
    ind = 0
    for(let i = 1;i<temps.length;i++){
        if(temps[i].length>temps[ind].length && !alreadyUsed.includes(temps[i])){
            ind = i;    
        }
    }
    word = temps[ind];
    target = document.getElementsByClassName("selfTurn")[0].getElementsByTagName("input")[0];
    target.value = word;
    alreadyUsed.push(word);
    ele = document.getElementsByClassName("selfTurn")[0].getElementsByTagName("form")[0];
    ele.requestSubmit();
    return temps[ind];
}

const newButton = document.createElement('button');
newButton.textContent = "Solve";
newButton.onclick = solve;
const parent = document.getElementsByClassName("bottom")[0].getElementsByTagName("form")[0];
parent.appendChild(newButton);
parent.addEventListener("submit", (e) => {
    e.preventDefault();
});

//work on copying text