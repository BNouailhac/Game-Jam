var audio=document.createElement('audio');
var first=true;
     window.addEventListener('mousedown',onmousedown);

   function onmousedown() {
      if(!first) return;
      first=false;
      audio.src="Audio/cipher.mp3";
      audio.play();
   }