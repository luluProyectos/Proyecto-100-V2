var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function star()
{
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 Content = event.results[0][0].transcript.toLowerCase();
   console.log(Content);
   if (Content == "selfie") {
    speak();
    }

}

function speak(){
    var synth = window.speechSynthesis;

    
    speak_data = "Tomando su selfie en 5 sefundos"
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90 
 });

 camera=document.getElementById("camera");

 function take_snapshot(){ 
     Webcam.snap(function(data_uri){
         document.getElementById("result1").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
     });
 }

 