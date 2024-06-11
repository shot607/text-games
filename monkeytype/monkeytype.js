function getText(){
    let parent = document.getElementById("words");
    let text = "";
    let i = 0;
    for(const child of parent.children){
        i++;
        for(const child2 of child.children){
            text+=child2.textContent;
        }
        text+=" ";
    }
    return {text: text, length: i};
}

let index = 0;
const input = document.getElementById("wordsInput");
const text = getText().text.split(" ");
console.log(text);
let ind = 0;
input.addEventListener("keydown", (event) => {
    if(event.code!="Space"){
        event.preventDefault();
        input.value=" "+text[ind];
        console.log(input.value);
    }
    else{
        console.log(input.value);
        ind++;
    }

})