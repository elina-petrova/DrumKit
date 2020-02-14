(()=>{
  let keys = Array.from(document.querySelectorAll('.key'));

  keys.forEach(key => key.addEventListener('transitionend', resetKey));
  //add an event listener to the window
  //and capture all the keyboard key presses
  function resetKey(){
    this.classList.remove('playing');
  }
  function playSound(event){
    let audioElement = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    //

    //
    //
    if(!audioElement ){ return }
    //if we have a match, then play the sound that goes with the keyboard key
    audioElement.currentTime = 0; //no brackets means its a property
    audioElement.play();// round brackets means its a method

    key.classList.add('playing');
  }

  window.addEventListener('keydown', playSound);

})();
