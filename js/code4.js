

document.body.onload=creerBoutons;
var vd=document.getElementById("mavideo");
var a=document.getElementById('c1');
var b=document.getElementById('c2');
var c=document.getElementById('c3');
function lecture() {
 // Lit la vidéo
 vd.play();
 
 a.style.animationPlayState="running";
 b.style.animationPlayState="running";
 c.style.animationPlayState="running";
}
function paus() {
 // Met la vidéo en pause
 vd.pause();
 a.style.animationPlayState="paused";
 b.style.animationPlayState="paused";
 c.style.animationPlayState="paused";
}

function stp() {
 // Arrête la vidéo
 vd.pause();
 vd.currentTime=0;
}
function avance(duree) {
 // Avance de 'duree' secondes

 vd.currentTime+=parseInt(duree);
}
function recule(duree) {
 // Recule de 'duree' secondes
 vd.currentTime -= parseInt(duree); 
}
var chek=document.createElement('input');
var aa=document.createElement("span");
function repet(){
    if(chek.checked==false){
        vd.removeAttribute('loop');
        aa.removeAttribute("class");
        aa.setAttribute("class","c1");
    }else{
        vd.setAttribute("loop","true");
        aa.setAttribute("class","c2");
    }
}
function creerBoutons() {
 // Crée les boutons de gestion du lecteur
 


 var btnplay=document.createElement('button');
 var play=document.createTextNode("lecture");
     btnplay.appendChild(play);
     btnplay.setAttribute("class","c1");
 var btnpause=document.createElement('button');
 var pause=document.createTextNode("pause");
     btnpause.appendChild(pause);
     btnpause.setAttribute("class","c1");
 var btnstop=document.createElement('button');
 var stop=document.createTextNode("stop");
     btnstop.appendChild(stop);
     btnstop.setAttribute("class","c1");
 var btnAva=document.createElement('button');
 var avancer=document.createTextNode("avancer");
     btnAva.appendChild(avancer);
     btnAva.setAttribute("class","c1");
 var btnrec=document.createElement('button');
 var reculer=document.createTextNode("reculer");
     btnrec.appendChild(reculer);
     btnrec.setAttribute("class","c1");

 var box=document.getElementsByClassName('controles');
  box[0].appendChild(btnplay);
  box[0].appendChild(btnpause);
  box[0].appendChild(btnstop);
  box[0].appendChild(btnAva);
  box[0].appendChild(btnrec);

  btnplay.addEventListener('click',lecture,false);
  btnpause.addEventListener('click',paus,false);
  btnstop.addEventListener('click',stp,false);
  btnAva.addEventListener('click',function(){ avance(10)},false);
  btnrec.addEventListener('click',function(){ recule(10)},false);

  box[0].removeAttribute("hidden");

  
  vd.removeAttribute("controls");
  
      chek.setAttribute("type","checkbox");
  
  var d=document.createTextNode('REPETER');
  var es=document.createTextNode("♪ ♫♫♫ ♫♫♫ ♪");
  box[0].appendChild(es);
  aa.appendChild(chek);
  aa.appendChild(d);
  aa.setAttribute("class","c1")
  box[0].appendChild(aa);
  chek.addEventListener('click',repet,false);

}
var can=document.getElementsByTagName('canvas');
var con1=can[0].getContext('2d');
var con2=can[1].getContext('2d');
var con3=can[2].getContext('2d');
var video=document.getElementsByTagName('video')[0];

if(video){

    var inter0 = setInterval(dessinVideo1, 40);
    var inter1 = setInterval(dessinVideo2, 40);
    var inter2 = setInterval(dessinVideo3, 40);
}

function dessinVideo1() {
if(!isNaN(video.duration)) {
// Dessin de la vidéo dans les deux contextesa
con1.drawImage(video,-360,-150);
con1.fillStyle="RGBa(115, 96, 190,0.8)";
con1.beginPath();
con1.moveTo(0,0);
con1.lineTo(50,0);
con1.lineTo(0,50);
con1.closePath();
con1.stroke();
con1.fill()
con1.beginPath();
con1.moveTo(220,0);
con1.lineTo(270,50);
con1.lineTo(270,0);
con1.closePath();
con1.stroke();
con1.fill()
con1.beginPath();
con1.moveTo(270,220);
con1.lineTo(220,270);
con1.lineTo(270,270);
con1.closePath();
con1.stroke();
con1.fill()
con1.beginPath();
con1.moveTo(50,270);
con1.lineTo(0,220);
con1.lineTo(0,270);
con1.closePath();
con1.stroke();
con1.fill()

}
}
function dessinVideo2() {
if(!isNaN(video.duration)) {
// Dessin de la vidéo dans les deux contextes
con2.fillStyle="RGBa(115, 96, 190,0.8)";
con2.drawImage(video,-360,-150);
con2.beginPath();
con2.moveTo(0,0);
con2.lineTo(50,0);
con2.lineTo(0,50);
con2.closePath();
con2.stroke();
con2.fill()
con2.beginPath();
con2.moveTo(220,0);
con2.lineTo(270,50);
con2.lineTo(270,0);
con2.closePath();
con2.stroke();
con2.fill()
con2.beginPath();
con2.moveTo(270,220);
con2.lineTo(220,270);
con2.lineTo(270,270);
con2.closePath();
con2.stroke();
con2.fill()
con2.beginPath();
con2.moveTo(50,270);
con2.lineTo(0,220);
con2.lineTo(0,270);
con2.closePath();
con2.stroke();
con2.fill()

}
}
function dessinVideo3() {
if(!isNaN(video.duration)) {
// Dessin de la vidéo dans les deux contextes

con3.fillStyle="RGBa(115, 96, 190,0.8)";
con3.drawImage(video,-360,-150);
con3.beginPath();
con3.moveTo(0,0);
con3.lineTo(50,0);
con3.lineTo(0,50);
con3.closePath();
con3.stroke();
con3.fill()
con3.beginPath();
con3.moveTo(220,0);
con3.lineTo(270,50);
con3.lineTo(270,0);
con3.closePath();
con3.stroke();
con3.fill()
con3.beginPath();
con3.moveTo(270,220);
con3.lineTo(220,270);
con3.lineTo(270,270);
con3.closePath();
con3.stroke();
con3.fill()
con3.beginPath();
con3.moveTo(50,270);
con3.lineTo(0,220);
con3.lineTo(0,270);
con3.closePath();
con3.stroke();
con3.fill()

}
}
