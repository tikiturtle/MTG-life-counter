
let hp = {
  life1 : document.querySelector('.life1'),
  hp1: 20,
  life2 : document.querySelector('.life2'),
  hp2: 20
};



function takedamage() {
  hp.hp1 -= 1
  if (hp.hp1 < 10) {
    hp.life1.innerHTML = "0"+ hp.hp1
  }else {
    hp.life1.innerHTML = hp.hp1
  }
}

function healdamage() {
  hp.hp1 +=1
  hp.life1.innerHTML = hp.hp1
};

function takedamage2() {
  hp.hp2 -= 1
  if (hp.hp2 < 10) {
    hp.life2.innerHTML = "0"+ hp.hp2
  }else {
    hp.life2.innerHTML = hp.hp2
  }
}

function healdamage2() {
  hp.hp2 +=1
  hp.life2.innerHTML = hp.hp2
};


hp.life1.addEventListener("click", takedamage);
hp.life1.addEventListener("contextmenu", healdamage)

hp.life2.addEventListener("click", takedamage2);
hp.life2.addEventListener("contextmenu", healdamage2)
