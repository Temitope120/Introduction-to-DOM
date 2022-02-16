let myInput = document.getElementsByTagName("input");
console.log(myInput)

for(let i = 0; i < myInput.length; i++){
    let b = myInput[i];
    console.log(b.value)
}