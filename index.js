const area = document.querySelectorAll("#Tic-Tac-Toe > div")
const clear = document.querySelector("#clear")

let cross = '<svg class=\"cross\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><path d=\"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z\"></path></svg>'
let circle = '<svg id=\"circle\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z\"></path></svg>'
let i = 0;

NodeList.prototype.addEventListener = function (event_name, callback, useCapture) {
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(event_name, callback, useCapture);
  }
};
area.addEventListener("click", () => {
  i++
  if (event.target.innerHTML.length > 0) {
    event.target.removeEventListener
    i--
  } else {
    if (i % 2 == 0) {
      event.target.innerHTML = '<svg id = "circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg>'
    } else {
      event.target.innerHTML = '<svg class = "cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>'
    }
  }

  setTimeout(isWon, 1000)
})

if (i == 10) {
  clearAll()
}

clear.addEventListener("click", clearAll)

function clearAll() {
  for (let i = 0; i < area.length; i++) {
    area[i].innerHTML = ""
  }
  i = 0
}

let arrayArea = Array.from(area)


function winH1() {
  if (arrayArea[0].innerHTML == cross == false) {
    return false
  } else if (arrayArea[1].innerHTML == cross == false) {
    return false
  } else if (arrayArea[2].innerHTML == cross == false) {
    return false
  } return win = true
}

function winH2() {
  if (arrayArea[3].innerHTML == cross == false) {
    return false
  } else if (arrayArea[4].innerHTML == cross == false) {
    return false
  } else if (arrayArea[5].innerHTML == cross == false) {
    return false
  } return true
}

function winH3() {
  if (arrayArea[6].innerHTML == cross == false) {
    return false
  } else if (arrayArea[7].innerHTML == cross == false) {
    return false
  } else if (arrayArea[8].innerHTML == cross == false) {
    return false
  } return true
}

function winV4() {
  if (arrayArea[0].innerHTML == cross == false) {
    return false
  } else if (arrayArea[3].innerHTML == cross == false) {
    return false
  } else if (arrayArea[6].innerHTML == cross == false) {
    return false
  } return true
}

function winV5() {
  if (arrayArea[1].innerHTML == cross == false) {
    return false
  } else if (arrayArea[4].innerHTML == cross == false) {
    return false
  } else if (arrayArea[7].innerHTML == cross == false) {
    return false
  } return true
}

function winV6() {
  if (arrayArea[2].innerHTML == cross == false) {
    return false
  } else if (arrayArea[5].innerHTML == cross == false) {
    return false
  } else if (arrayArea[8].innerHTML == cross == false) {
    return false
  } return true
}

function winVertical1() {
  if (arrayArea[0].innerHTML == cross == false) {
    return false
  } else if (arrayArea[4].innerHTML == cross == false) {
    return false
  } else if (arrayArea[8].innerHTML == cross == false) {
    return false
  } return true
}

function winVertical2() {
  if (arrayArea[2].innerHTML == cross == false) {
    return false
  } else if (arrayArea[4].innerHTML == cross == false) {
    return false
  } else if (arrayArea[6].innerHTML == cross == false) {
    return false
  } return true
}

function winH1Cir() {
  if (arrayArea[0].innerHTML == circle == false) {
    return false
  } else if (arrayArea[1].innerHTML == circle == false) {
    return false
  } else if (arrayArea[2].innerHTML == circle == false) {
    return false
  } return true
}

function winH2Cir() {
  if (arrayArea[3].innerHTML == circle == false) {
    return false
  } else if (arrayArea[4].innerHTML == circle == false) {
    return false
  } else if (arrayArea[5].innerHTML == circle == false) {
    return false
  } return true
}

function winH3Cir() {
  if (arrayArea[6].innerHTML == circle == false) {
    return false
  } else if (arrayArea[7].innerHTML == circle == false) {
    return false
  } else if (arrayArea[8].innerHTML == circle == false) {
    return false
  } return true
}

function winV4Cir() {
  if (arrayArea[0].innerHTML == circle == false) {
    return false
  } else if (arrayArea[3].innerHTML == circle == false) {
    return false
  } else if (arrayArea[6].innerHTML == circle == false) {
    return false
  } return true
}

function winV5Cir() {
  if (arrayArea[1].innerHTML == circle == false) {
    return false
  } else if (arrayArea[4].innerHTML == circle == false) {
    return false
  } else if (arrayArea[7].innerHTML == circle == false) {
    return false
  } return true
}

function winV6Cir() {
  if (arrayArea[2].innerHTML == circle == false) {
    return false
  } else if (arrayArea[5].innerHTML == circle == false) {
    return false
  } else if (arrayArea[8].innerHTML == circle == false) {
    return false
  } return true
}

function winVertical1Cir() {
  if (arrayArea[0].innerHTML == circle == false) {
    return false
  } else if (arrayArea[4].innerHTML == circle == false) {
    return false
  } else if (arrayArea[8].innerHTML == circle == false) {
    return false
  } return true
}

function winVertical2Cir() {
  if (arrayArea[2].innerHTML == circle == false) {
    return false
  } else if (arrayArea[4].innerHTML == circle == false) {
    return false
  } else if (arrayArea[6].innerHTML == circle == false) {
    return false
  } return true
}






function isWon() {
  if (winH1() || winH2() || winH3() == true) {
    clearAll()
    return alert("Сross win")
  }
  if (winV4() || winV5() || winV6() == true) {
    clearAll()
    return alert("Сross win")
  } if (winVertical1() || winVertical2() == true) {
    clearAll()
    return alert("Сross win")
  } if (winH1Cir() || winH2Cir() || winH3Cir() == true) {
    clearAll()
    return alert("Circle win")
  } if (winV4Cir() || winV5Cir() || winV6Cir() == true) {
    clearAll()
    return alert("Circle win")
  } if (winVertical1Cir() || winVertical2Cir() == true) {
    clearAll()
    return alert("Circle win")
  }

}


