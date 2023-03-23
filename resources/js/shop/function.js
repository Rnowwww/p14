
//Store 

function buyFacebook() {

  if('wingsPC' in localStorage) {
    wingsPerClick += facebookFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
  } else {
    wingsPerClick += facebookFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
  }

  facebookInv.classList.remove("facebookInvNone");
  facebookInv.classList.add("facebookInv");
}

function buyTwitter() {

  if('wingsPS' in localStorage) {
    wingsPerSecond += twitterFactory;
    localStorage.setItem('wingsPS', wingsPerSecond);
  } else {
    wingsPerSecond += twitterFactory;
    localStorage.setItem('wingsPS', wingsPerSecond);
  }
  twitterInv.classList.remove("facebookInvNone");
  twitterInv.classList.add("facebookInv");
}


function buyUberEats() {
  
  if('wingsPC' in localStorage) {
    wingsPerClick += uberEatsFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
  } else {
    wingsPerClick += uberEatsFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
  }  
  
  uberEatsInv.classList.remove("uberEatsInvNone");
  uberEatsInv.classList.add("uberEatsInv");
}

function buyQuizz() {
  
  if('wingsPC' in localStorage) {
    wingsPerClick += quizzFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
    localStorage.setItem('unlockAllPhotos', true);
  } else {
    wingsPerClick += quizzFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
    localStorage.setItem('unlockAllPhotos', true);
  }  
  
  quizzInv.classList.remove("quizzInvNone");
  quizzInv.classList.add("quizzInv");
}


// Unlocking stuff to buy

setInterval(showingStuffToBuy, 500);

function showingStuffToBuy() {
  showingFbInStr();
  undisplayFbInStr();
  showingTwInStr();
  undisplayTwInStr();
  showingUbInStr();
  undisplayUbInStr();
  showingQzInStr();
  undisplayQzInStr();
  showingAllPhotos();
}

function showingFbInStr() {
  if('wings' in localStorage){
    let actualWings = parseInt(localStorage.getItem('wings'));
    if(actualWings >= 10) {
      facebookStr.addEventListener("click", buyFacebook);
      facebookStr.addEventListener("click", spendMoneyOnFb);
      facebookStr.removeAttribute("name");
      facebookStr.setAttribute("name", "shopRowV");
    }
  }
}

function undisplayFbInStr() {
  if('wings' in localStorage){
    let actualWings = parseInt(localStorage.getItem('wings'));
    if(actualWings < 10) {
      facebookStr.removeAttribute("name");
      facebookStr.setAttribute("name", "shopRow");
    }
  }
}

function showingTwInStr() {
  if('wings' in localStorage){
    let actualWings = parseInt(localStorage.getItem('wings'));
    if(actualWings >= 100) {
      twitterStr.addEventListener("click", buyTwitter);
      twitterStr.addEventListener("click", spendMoneyOnTw);
      twitterStr.removeAttribute('name');
      twitterStr.setAttribute('name', 'shopRowV');
    }
  }
}

function undisplayTwInStr() {
  if('wings' in localStorage){
    let actualWings = parseInt(localStorage.getItem('wings'));
    if(actualWings < 100) {
      twitterStr.removeAttribute("name");
      twitterStr.setAttribute("name", "shopRow");
    }
  }
}

function showingUbInStr() {
  if('wings' in localStorage){
    let actualWings = parseInt(localStorage.getItem('wings'));
    if(actualWings >= 500) {
      uberEatsStr.addEventListener("click", buyUberEats);
      uberEatsStr.addEventListener("click", spendMoneyOnUb);
      uberEatsStr.removeAttribute('name');
      uberEatsStr.setAttribute('name', 'shopRowV');
    }
  }
}

function undisplayUbInStr() {
  if('wings' in localStorage){
    let actualWings = parseInt(localStorage.getItem('wings'));
    if(actualWings < 500) {
      uberEatsStr.removeAttribute("name");
      uberEatsStr.setAttribute("name", "shopRow");
    }
  }
}

function showingQzInStr() {
  if('wings' in localStorage){
    let actualWings = parseInt(localStorage.getItem('wings'));
    if(actualWings >= 1000) {
      quizzStr.addEventListener("click", buyQuizz);
      quizzStr.addEventListener("click", spendMoneyOnQz);
      quizzStr.removeAttribute('name');
      quizzStr.setAttribute('name', 'shopRowV');
    }
  }
}

function undisplayQzInStr() {
  if('wings' in localStorage){
    let actualWings = parseInt(localStorage.getItem('wings'));
    if(actualWings < 1000) {
      quizzStr.removeAttribute("name");
      quizzStr.setAttribute("name", "shopRow");
    }
  }
}


// Spending money

function spendMoneyOnFb() {
  if('wings' in localStorage){
    let actualWings = parseInt(localStorage.getItem('wings'));
    if(actualWings >= 10) {
      actualWings -= facebookFactory;
      localStorage.setItem('wings', actualWings);
    }
  }
}

function spendMoneyOnTw() {
  if('wings' in localStorage){
    let actualWings = parseInt(localStorage.getItem('wings'));
    if(actualWings >= 100) {
      actualWings -= twitterFactory;
      localStorage.setItem('wings', actualWings);
    }
  }
}

function spendMoneyOnUb() {
  if('wings' in localStorage){
    let actualWings = parseInt(localStorage.getItem('wings'));
    if(actualWings >= 500) {
      actualWings -= uberEatsFactory;
      localStorage.setItem('wings', actualWings);
    }
  }
}

function spendMoneyOnQz() {
  if('wings' in localStorage){
    let actualWings = parseInt(localStorage.getItem('wings'));
    if(actualWings >= 1000) {
      actualWings -= quizzFactory;
      localStorage.setItem('wings', actualWings);
    }
  }
}


function showingAllPhotos() {
  if(localStorage.getItem('unlockAllPhotos') == "true"){
    const el = document.querySelectorAll(".faceImg");
    for(let i = 0; i < el.length; i++){
      el[i].removeAttribute('style');
      el[i].classList.add("heartBeat");
    }
  }
}
