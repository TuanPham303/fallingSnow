var canvas = document.getElementById('field')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var ctx = canvas.getContext('2d')

function snow(){
   this.x=Math.round(Math.random()*canvas.width)/*snow position on x axis*/
   this.y=Math.round(Math.random()*canvas.height)/*snow position on y axis*/
   this.r=Math.round(Math.random())*3+2 /*snow radius*/
   this.wind=Math.random()*5/*snow move around*/
}

snow.prototype.update=function(){
   ctx.fillStyle="#fff"
   ctx.beginPath()
   ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false)
   ctx.fill()
   ctx.closePath()
   this.x+=Math.sin(this.wind)/*snow move in x axis*/
   this.wind+=0.001
   if (this.x>canvas.width||this.x<0) {
      this.x=Math.round(Math.random()*canvas.width)
      this.y=0
   }/*if snow goes out of screen, make a new one*/
   this.y+=5
   if (this.y>canvas.height) {
      this.y=0
   }/*if snow touch bottom screen, make new one at the top*/
}

var snowNumber = 500
var snows = []

function fallingSnow(){
   ctx.clearRect(0,0,canvas.width,canvas.height)
   for (var i = 0; i < snowNumber; i++) {
      snows[i].update()
   }
}

window.onload = function(){
   for(i=0;i<snowNumber;i++){
      snows.push(new snow())
   } 
   setInterval(fallingSnow, 50) 
}
