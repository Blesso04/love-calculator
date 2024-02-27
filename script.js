// var love1 = document.getElementById('input1').value
// var love2 = document.getElementById('input2').value
// var love= Math.round(Math.random()*100)

// function display() {
//     show.innerHTML=""
//     // show.innerHTML += `The compatibility between ${love1} and ${love2} is ${love}` 
//     show.innerHTML += "The compatibility between " + document.getElementById('input1').value 
//     + "and" + document.getElementById('input2').value + "is" + Math.round(Math.random()*100)
// }

// "The compatibility between " + document.getElementById('input1').value 
// + " and " + document.getElementById('input2').value + " is " + love + "%"
// document.getElementById('input1').value = ''
// document.getElementById('input2').value = ''

function calc() {
if(input1.value == '' || input2.value == ''){
    errorMessage.style.display = "block"
    setTimeout(()=>{
        errorMessage.style.display = "none"
    },5000)
} else{
    var love= Math.round(Math.random()*100)
    console.log(love)
document.getElementById("show").innerHTML= 
`
<div id="imageContainer" style=" position: relative;
width: 100%;">
            <h1 class="text-white text-center">The compatibility between ${input1.value} and ${input2.value} is</h1>
        <center><img src="img/images (1).jpg" alt="Your Image"></center>
        <div id="textOverlay" class="mt-4">${love}%</div>
    </div>
`
document.getElementById('input1').value = ''
document.getElementById('input2').value = ''
    // display()
}
}

    
