// FUNCTIONS

let songs = ["resources/sounds/didYouSee.mp3", "resources/sounds/laugh.mp3",
  "resources/sounds/ohMy.mp3", "resources/sounds/wow.mp3", "resources/sounds/yeahBoy.mp3"
];

function play() {
  let randomSong = songs[Math.floor(Math.random() * songs.length)];
  var audio = new Audio(randomSong);
  audio.play();
};

function playAndWobble() {
  document.getElementById("colonel").classList.add("wobble");
  play();
  setTimeout(function() {
    document.getElementById("colonel").classList.remove("wobble");
  }, 3000);
}


function underTwoHundreds() {
  let wingsNumber = parseInt(wings_counter.innerHTML);
  document.getElementById("colonel").classList.remove("wobble");

  if (wingsNumber == 109) {
    play();
    document.getElementById("colonel").classList.add("wobble");
    setTimeout(function() {
      document.getElementById("colonel").classList.remove("wobble");
    }, 3000);
  } else if (wingsNumber == 10) {
    play();
    document.getElementById("colonel").classList.add("wobble");
    setTimeout(function() {
      document.getElementById("colonel").classList.remove("wobble");
    }, 3000);
  } else {
    console.log("Nope");
  }
}


function plusOne() {
  document.getElementById('firstPlus').classList.remove("blinked");
  document.getElementById('secondPlus').classList.remove("blinked");
  document.getElementById('thirdPlus').classList.remove("blinked");
  let plusOnes = [document.getElementById('firstPlus'), document.getElementById('secondPlus'), document.getElementById('thirdPlus')];
  let randomPlus = plusOnes[Math.floor(Math.random() * plusOnes.length)];
  randomPlus.classList.add("blinked");
}


function showPhoto() {
  let wingsNumber = parseInt(wings_counter.innerHTML);

  if (wingsNumber > 500) {
    const faces = [faceOne, faceTwo, faceThree, faceFour, faceFive, faceSix, faceSeven, faceEight];
    const availableFaces = faces.filter(face => face.style.opacity == "0");

    if (availableFaces.length > 0) {
      const selectedFace = availableFaces[0];
      selectedFace.style.opacity = "1";
      selectedFace.classList.add("heartBeat");
    } else {
      console.log("all done");
    }
  }
}


function showPhoto() {
  let wingsNumber = parseInt(wings_counter.innerHTML);

  if (wingsNumber > 500) {
    const faces = [faceOne, faceTwo, faceThree, faceFour, faceFive, faceSix, faceSeven, faceEight];
    const availableFaces = faces.filter(face => face.style.opacity == "0");

    if (availableFaces.length > 0) {
      const selectedFace = availableFaces[0];
      selectedFace.style.opacity = "1";
      selectedFace.classList.add("heartBeat");
    } else {
      console.log("all done");
    }
  }
}




// EVENT LISTENERS

bucketImg.addEventListener("click", plusOne);

bucketImg.addEventListener("click", underTwoHundreds);

twitterStr.addEventListener("click",
  function() {
    setInterval(playAndWobble, 15000);
  }
);
document.querySelector('#uberEatsStr').addEventListener("click", showPhoto);
