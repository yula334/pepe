let rwordLL = document.querySelector(".ranword")
let anss = document.querySelectorAll(".answer")

class Pll{
    constructor(rword, anss1, anss2, correct){
        this.rword = rword
        this.correct = correct
        this.answers = [anss1, anss2, this.correct]
        shuffle(this.answers)
    }
    display(){
        rwordLL.innerHTML = this.rword
        for(let i=0; i<this.answers.length; i+=1){
            anss[i].innerHTML = this.answers[i]
        }
    }
}


let curquests = [new Pll("Black", "Блок", "Назад", "Чёрный"), new Pll("Table", "Таблетка", "Керамика", "Стол"), new Pll("Look", "Лук", "Закрывать", "Смотреть"), new Pll("Parrot", "Морковка", "Пират", "Попугай"), new Pll("Ball", "Балл", "Звонок", "Мяч"), new Pll("Horse", "Дом", "Хорус", "Лошадь"), new Pll("Ship", "Щип", "Прыгать", "Овца"), new Pll("Kids", "Кеды", "Курица", "Дети"), new Pll("True", "Попытка", "Триугольник", "Правда")]

let tag = 0

let curquest = curquests[tag]
curquest.display()

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }
    return array;
}

let curtrue = 0
let curall = 0

let tru = document.querySelector(".praw")
let allan = document.querySelector(".otw")


for (let i = 0; i < anss.length; i += 1){ 
    anss[i].addEventListener("click", function(){ 
        if (anss[i].innerHTML == curquest.correct){ 
            anss[i].style.background = "#32CD32" 
            anime({
                targets: anss[i],
                background: "#4A4957",
                duration: 500,
                easing: "linear",
            })
            curtrue += 1
            curall += 1
            tru.innerHTML = curtrue
            allan.innerHTML = curall
        } else {
            anss[i].style.background = "#DC143C"  
            anime({
                targets: anss[i],
                background: "#4A4957",
                duration: 500,
                easing: "linear",
            })
            curall += 1
            allan.innerHTML = curall
        } 
        tag += 1
        if (tag < curquests.length){
            curquest = curquests[tag]
            curquest.display()
        } else{
            alert("Вопросы закончилиь, да")
            setTimeout(function() {
                tru.innerHTML = 0
                allan.innerHTML = 0
            }, 5000)
        }
    }) 
}