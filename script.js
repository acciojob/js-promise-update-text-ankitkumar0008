//your JS code here. If required.
let output = document.getElementById('output');
function addText(text){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(text);
    },1000)
    
    })
}
addText("Hello, world!")
.then((msg)=>{
    output.textContent = msg;
})
.catch((err)=>{
    console.log(err);
})