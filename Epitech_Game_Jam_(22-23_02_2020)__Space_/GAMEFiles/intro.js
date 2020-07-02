var audio=document.createElement('audio');
var first=true;
     window.addEventListener('mousedown',onmousedown);

   function onmousedown() {
      if(!first) return;
      first=false;
      audio.src="Audio/kevin-macleod-sovereign-piano-solo_1.mp3";
      audio.play();
   }