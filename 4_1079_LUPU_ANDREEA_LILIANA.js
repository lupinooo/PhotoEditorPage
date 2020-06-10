var sound=new Audio();
sound.src="media/click.mp3";
 
function getFile(e){
  var formInput=document.getElementById('file');
  var filename=formInput.value;
  var fr=new FileReader();
  fr.readAsDataURL(formInput.files[0]);
  fr.onloadend=function(e){
        var string=e.target.result;
        var img=document.createElement('img');
        img.setAttribute("src", string);
        img.setAttribute("className", "collageImages")
        img.setAttribute("id", Math.random().toString(20));
        img.width=180;
        img.height=200;
        var src=document.getElementById('tableData');
        src.appendChild(img);
        var canvas=document.getElementById("main_canvas");
       img.ondragstart=function(evt){
         evt.dataTransfer.setData("text", evt.target.id);
          console.log(evt.target.id);
       }
 
     
  }
}
 
 
function model1(){
  var main_canvas=document.getElementById("main_canvas");
 var context=main_canvas.getContext('2d')
 context.clearRect(0,0,main_canvas.width, main_canvas.height)
 context.strokeStyle="black"
 context.fillRect(20,20,260,230)
 context.fillRect(300,20,260,460)
 context.fillRect(20,270,260,210)
 context.stroke()
 dropEvents(main_canvas)
}
 
function model2(){
  var main_canvas=document.getElementById("main_canvas");
 var context=main_canvas.getContext('2d')
 context.clearRect(0,0,main_canvas.width, main_canvas.height)
 //context.strokeStyle="black"
 context.fillRect(20,20,180,460)
 context.fillRect(220,20,170,180)
 context.fillRect(420,20,160,180)
 context.fillRect(220,220,360,260)
 //context.stroke()
 dropEvents1(main_canvas)
}
 
 
function model3(){
  var main_canvas=document.getElementById("main_canvas");
  var context=main_canvas.getContext('2d')
 context.clearRect(0,0,main_canvas.width, main_canvas.height)
 context.strokeStyle="black"
 context.fillRect(20,20,180,180)
 context.fillRect(220,20,170,180)
 context.fillRect(420,20,160,180)
 context.fillRect(20,220,560,260)
 context.stroke()
 dropEvents2(main_canvas)
}
 
function model4(){
  var main_canvas=document.getElementById("main_canvas");
  var context=main_canvas.getContext('2d')
 context.clearRect(0,0,main_canvas.width, main_canvas.height)
 context.strokeStyle="black"
 context.fillRect(20,20,180,460)
 context.fillRect(400,20,180,460)
 context.fillRect(220,20,160,160)
 context.fillRect(220,320,160,160)
 context.stroke()
 dropEvents3(main_canvas)
}
 
function dropEvents(canvas){
  canvas.ondragover=function(evt){
    evt.preventDefault();
    console.log("its draggin over")
  }
  canvas.ondrop=function(evt){
       evt.preventDefault();
       var id=evt.dataTransfer.getData("text");
       var img=document.getElementById(id);
       var context=canvas.getContext('2d');
       if(canvas.id=="editCanvas"){
           context.drawImage(img, 0,0,canvas.width,canvas.height);
       }
       else{
       if(evt.x > 200 ){
         context.drawImage(img, 300, 20, 260,460);
       }
       else if(evt.y>250) {
       context.drawImage(img,20,270,260,210)
       }
       else{
         context.drawImage(img,20,20,260,230);
        
       }
       }
       console.log("its dropped")
  }
}
function dropEvents1(canvas){
  canvas.ondragover=function(evt){
    evt.preventDefault();
    console.log("its draggin over")
  }
  canvas.ondrop=function(evt){
       evt.preventDefault();
       var id=evt.dataTransfer.getData("text");
       var img=document.getElementById(id);
       var context=canvas.getContext('2d');
       if(canvas.id=="editCanvas"){
           context.drawImage(img, 0,0,canvas.width,canvas.height);
       }
       else{
 
       if(evt.x < 200 ){
         context.drawImage(img, 20, 20, 180,460);
       }
       else if(evt.x<400 && evt.x>200&&evt.y<150) {
       context.drawImage(img,220,20,170,180)
       }
       else if(evt.x<600 && evt.x>300&&evt.y<150){
         context.drawImage(img,420,20,160,180);
        
       }
       else if(evt.y>100){
         context.drawImage(img,220,220,360,260);
       }
      
       console.log("its dropped")
  }
}
}
function dropEvents2(canvas){
  canvas.ondragover=function(evt){
    evt.preventDefault();
    console.log("its draggin over")
  }
  canvas.ondrop=function(evt){
       evt.preventDefault();
       var id=evt.dataTransfer.getData("text");
       var img=document.getElementById(id);
       var context=canvas.getContext('2d');
       if(canvas.id=="editCanvas"){
           context.drawImage(img, 0,0,canvas.width,canvas.height);
       }
       else{
       if(evt.x < 100 && evt.y<150){
         context.drawImage(img, 20, 20, 180,180);
       }
       else if(evt.x<400 && evt.x>200&&evt.y<150) {
       context.drawImage(img,220,20,170,180)
       }
       else if(evt.x<600 && evt.x>400&&evt.y<150){
         context.drawImage(img,420,20,160,180);
        
       }
       else if(evt.y>100){
         context.drawImage(img,20,220,560,260);
       }
      
       console.log("its dropped")
  }
}
}
function dropEvents3(canvas){
  canvas.ondragover=function(evt){
    evt.preventDefault();
    console.log("its draggin over")
  }
  canvas.ondrop=function(evt){
       evt.preventDefault();
       var id=evt.dataTransfer.getData("text");
       var img=document.getElementById(id);
       var context=canvas.getContext('2d');
       if(canvas.id=="editCanvas"){
           context.drawImage(img, 0,0,canvas.width,canvas.height);
       }
       else{
       if(evt.x < 100){
         context.drawImage(img, 20, 20, 180,460);
       }
       else if(evt.x<400 && evt.x>200&&evt.y<150) {
       context.drawImage(img,220,20,160,160)
       }
       else if(evt.x>400){
         context.drawImage(img,400,20,180,460);
        
       }
       else if(evt.y>150){
         context.drawImage(img,220,320,160,160);
       }
      
       console.log("its dropped")
  }
}
}
 
 
function backgroundSelect(){
  var canvas=document.getElementById("main_canvas");
  var selected=document.getElementById("backgroundOptions").value;
  switch(selected){
   case "back1":
      canvas.style.backgroundImage="url('media/back1.jfif')";
      break;
   case "back2":
      canvas.style.backgroundImage="url('media/back2.jpg')";
      break;
   case "back3":
      canvas.style.backgroundImage="url('media/back3.jfif')";
      break;
   case "back4":
      canvas.style.backgroundImage="url('media/back4.jpg')";
      break;
  }
}
 
 
function changeBrightness(data, bright){
    for(var i=0;i<data.length;i+=4){
      data[i]+=255*(bright/100);
      data[i+1]+=255*(bright/100);
      data[i+2]+=255*(bright/100)
    }
  }
 
 
function editPhoto(){
var editCanvas=document.getElementById('editCanvas')
var context=editCanvas.getContext('2d')
var editDiv=document.getElementById('editDiv')
dropEvents(editCanvas)
var element = document.createElement("input")
element.setAttribute("type", "button")
element.className="selectButtons"
element.setAttribute("value", "Invert colors")
editDiv.appendChild(element)
 
 
element.onclick=function(){
  var imageData=context.getImageData(0,0,editCanvas.width, editCanvas.height)
var data=imageData.data
  for(var i=0;i<data.length;i+=4){
    data[i]=255-data[i]
    data[i+1]=255-data[i+1]
    data[i+2]=255-data[i+2]
  }
  context.putImageData(imageData, 0, 0)
  
}
 
var element1=document.createElement("input")
element1.setAttribute("type", "range")
element1.setAttribute("value", "0")
element1.setAttribute("min", "-100")
element1.setAttribute("max", "100")
var brightnessDiv=document.getElementById('brightness')
brightness.appendChild(element1)
var brightValue=document.getElementById('brightnessValue')
element1.addEventListener('change', function(evt){
  var imageData=context.getImageData(0,0,editCanvas.width, editCanvas.height)
   var data=imageData.data
  brightValue.innerText=evt.currentTarget.value;
  changeBrightness(data, parseInt(element1.value, 10))
  context.putImageData(imageData, 0, 0)
})

var element3 = document.createElement("input")
element3.setAttribute("type", "button")
element3.className="selectButtons"
element3.setAttribute("value", "Grey Colors")
editDiv.appendChild(element3)
 
 
element3.onclick=function(){
  var imageData=context.getImageData(0,0,editCanvas.width, editCanvas.height)
var data=imageData.data
  for(var i=0;i<data.length;i+=4){
    data[i]=0.299 * data[i] + 0.587 * data[i+1] + 0.114 * data[i+2]
    data[i+1]=0.299 * data[i] + 0.587 * data[i+1] + 0.114 * data[i+2]
    data[i+2]=0.299 * data[i] + 0.587 * data[i+1] + 0.114 * data[i+2]
  }
  context.putImageData(imageData, 0, 0)
  
}



   }
 
function save(){
var link = document.getElementById('link');
var canvas=document.getElementById('main_canvas')
link.setAttribute('download', 'collage.png');
link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
}


