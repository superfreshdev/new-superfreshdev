console.log("🟨 play-audio-relax.js")


/* ---------------------------------------------------------------------- */
/* Dom Elements
/* ---------------------------------------------------------------------- */

// audio relax file
var audioFile_relax = document.getElementById("audio-relax");

// play button
var playAudioRelax = document.getElementById("play-audio-about-quick-info")

// pause button
var pauseAudioRelax = document.getElementById("pause-audio-about-quick-info")


/* ---------------------------------------------------------------------- */
/* Events
/* Click
/* ---------------------------------------------------------------------- */

// click - play
playAudioRelax.addEventListener( "click", ()=> {

  // window.alert("Play")

  // unshown play button
  playAudioRelax.style.display = "none"

  // show pause button
  pauseAudioRelax.style.display = "flex"

  // play audio
  audioFile_relax.play();


} )

// click - pause
pauseAudioRelax.addEventListener( "click", ()=> {

  // window.alert("Pause")

  // show play button
  playAudioRelax.style.display = "flex"

  // unshown pause button
  pauseAudioRelax.style.display = "none"

  // Pause Audio
  audioFile_relax.pause();


} )
