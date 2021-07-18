let data;
let url = 'https://source.unsplash.com/160x90/?';
let form;
let submit;
let searchfor;
let flexblock;
let divblock;
let word;
let imagesearch;

function preload(){
  data = loadTable('https://raw.githubusercontent.com/computational-mama/nadika-sangam/main/nadika-sangam.csv','csv')
  img = loadImage(url)

}


function setup() {
//   createCanvas(900, 700);
//   noLoop()
    noCanvas()
    form = createInput("")
    submit = createButton("submit")
    submit.mousePressed(formVal)
    // submit.keyPressed(formVal)
    // flexblock = createDiv("")
    // flexblock.class("content")
    
    // flexblock.style("display","flex")
    // flexblock.style("flex-direction","row")
    // flexblock.style("flex-wrap","wrap")
    
    divblock = createDiv("")
    divblock.class("group")
    
    divblock.style("display","flex")
    divblock.style("flex-direction","row")
    divblock.style("flex-wrap","wrap")
    // divblock.parent(flexblock)
}

function draw() {

}

function mousePressed(){
  
}

function formVal(){
    word = createP(form.value())
    searchfor = url + form.value()
    imagesearch = createImg(searchfor, form.value())
    word.parent(divblock)
    imagesearch.parent(divblock)   

}

function keyPressed(){
    if(keyCode == ENTER){
        word = createP(form.value())
        searchfor = url + form.value()
        imagesearch = createImg(searchfor, form.value())
        word.parent(divblock)
        imagesearch.parent(divblock)

    }
}