var arrofCells = [];
var countcells = 500;
var maxRadius = 250;
let defaultRadius = 20;
let maxVelosity = 0.05;
const cvs = document.getElementById('canvas')
const ctx = cvs.getContext('2d')
let setColor = function(gotColor){this.style.background = gotColor}
setColor.call(document.getElementById("main"), "black")
window.onload =  () => getStart();




const stop = function(){}


const setRadius = function(a){
    defaultRadius = Number(a);
}

const drawC = function(i){
    ctx.beginPath()
        ctx.arc(Number(arrofCells[i].y+window.innerWidth/2),Number(arrofCells[i].x+window.innerHeight/2),3,0,Math.PI*2)
        ctx.fillStyle = 'red'
        ctx.fill()
}

class Cell {
    constructor(){
        this.distance = Math.floor(Math.random()*(maxRadius-defaultRadius) + defaultRadius)
        this.velocity = (this.distance/(maxRadius-defaultRadius))*maxVelosity
        this.degree = Math.random()*Math.PI
        this.x = this.distance*Math.sin(this.degree)
        this.y = this.distance*Math.cos(this.degree)
    }
    moveCells(){
        this.degree = this.degree+this.velocity
        this.x = this.distance*Math.sin(this.degree)
        this.y = this.distance*Math.cos(this.degree)
        this.distance = this.distance - 0.1
    }
}


const draw = () => {
    ctx.beginPath()
    ctx.rect(0,0,window.innerWidth, window.innerHeight)
    ctx.fillStyle = 'black'
   ctx.fill()
    
    for(let i in arrofCells){
        arrofCells[i].moveCells()
        drawC(i)
    }
}


const fullarr = function(){
    for(let i = 0; i<countcells; i++){
        arrofCells.push(new Cell)
    }
    setInterval(draw,1000/40)
}


const getStart = function(){
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    fullarr()
}