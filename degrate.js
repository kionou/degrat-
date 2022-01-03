// créer les elements

let principale = document.createElement('div');
    principale.classList.add("principal");

let second = document.createElement('div');
    second.classList.add("second");

let red = document.createElement('div');
let blue = document.createElement('div');
let green = document.createElement('div');
let input = document.createElement('div')


    red.classList.add("red")
    blue.classList.add("blue")
    green.classList.add("green");
    input.classList.add("input")

    let input1 = document.createElement('input');
        input1.setAttribute("type", "range")
    let input2 = document.createElement('input');
        input2.setAttribute("type", "range")
    let input3 = document.createElement('input');
        input3.setAttribute("type", "range")

        input1.classList.add("one")
        input2.classList.add("one")
        input3.classList.add("one")

let canvas = document.createElement('div');
    canvas.classList.add("can")
    

// les prsonnalises




// les ajouter
document.body.append(principale);
principale.append(second);
second.append(red);
second.append(blue);
second.append(green);

red.append(input,canvas);
blue.append(canvas.cloneNode(true),input.cloneNode(true));
input.append(input1.cloneNode(true),input2.cloneNode(true),input3.cloneNode(true))
blue.append(input1.cloneNode(true),input2.cloneNode(true),input3.cloneNode(true));
green.append(input1,input2,input3);
console.log("eeee");


let btnr = document.querySelector('.one');
let case1 = document.querySelector('.can');
r = "0";
v = "0";
b = "0";
btnr.max = "225"

btnr.addEventListener('click', (e)=>{
console.log(e.target.value);
case1.style.backgroundColor = `rgb(${e.target.value}, ${v}, ${b})`
} );


    
