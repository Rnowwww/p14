
setInterval(showingAllPhotos, 10);

function showingAllPhotos() {
  if(localStorage.getItem('unlockAllPhotos') == "true"){
    const el = document.querySelectorAll(".faceImg");
    for(let i = 0; i < el.length; i++){
      el[i].removeAttribute('style');
      el[i].classList.add("heartBeat");
    }
  }
}

