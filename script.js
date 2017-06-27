var canvas = document.getElementById('canvas')
canvas.height = window.innerHeight
canvas.width = window.innerWidth
var ctx = canvas.getContext('2d')

function snow(){
   this.x = Math.round(Math.random()*canvas.width)
   this.y = 0
   this.yspeed = Math.random()*5+3
   this.r = Math.round(Math.random()*5)
   this.wind = Math.round(Math.random()*5)
}

snow.prototype.update = function(){
   ctx.beginPath()
   ctx.arc(this.x,this.y,this.r,0,2*Math.PI)
   ctx.fillStyle = '#fff'
   ctx.fill()
   this.y += this.yspeed
   this.x += Math.sin(this.wind)
   this.wind += 0.01
   if(this.x<0 || this.x>canvas.width){
      this.x = Math.round(Math.random()*canvas.width)
      this.y = 0
   }
   if(this.y > canvas.height){
      this.y = 0
   }
}
var snowNum = 1000
var snows = []

function fallingSnow(){
   ctx.clearRect(0,0,canvas.width,canvas.height)
   for (var i = 0; i < snowNum; i++) {
      snows[i].update()
   }
} 
window.onload = function main(){
   for (var i = 0; i < snowNum; i++) {
      snows.push(new snow())
   }
   setInterval(fallingSnow,50)
}