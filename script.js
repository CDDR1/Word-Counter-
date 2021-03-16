const inputButton = document.getElementById("input-btn");
const clearButton = document. getElementById("clear-btn");
const counter = document.getElementById("counter-count");
const input = document.getElementById("input-area");


inputButton.addEventListener("click", () => {
       
    let numOfWords;
    if (input.value === "") {
        numOfWords = 0;
        counter.innerHTML = numOfWords;
    }
    else {
        let spaceCounter = 0;
        for (let i = 0; i < input.value.length; i++) {
            if (input.value[i] === " ") {
                spaceCounter++
            }  
        };  
        numOfWords = spaceCounter + 1;
        counter.innerHTML = numOfWords;
    } 
});

clearButton.addEventListener("click", () => {
    input.value = "";
    counter.innerHTML = 0;
})


