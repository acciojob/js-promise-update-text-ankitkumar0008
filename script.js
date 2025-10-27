//your JS code here. If required.
let output = document.getElementById('output');

function addText(text){
    new Promise((resolve, reject) => {
        setTimeout(()=>{
    output.textContent = text;
    },1000)
    resolve();
    })
}
addText("Hello, world!"); 