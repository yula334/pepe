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


let curquests = [new Pll("Black", "Блок", "Назад", "Чёрный"), new Pll("Table", "Таблетка", "Керамика", "Стол"), new Pll("Look", "Лук", "Закрывать", "Смотреть")]

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
            
        } else { 
            anss[i].style.background = "#DC143C"  
            anime({
                targets: anss[i],
                background: "#4A4957",
                duration: 500,
                easing: "linear",
            })
        } 
        tag += 1
        curquest = curquests[tag]
        curquest.display() 
    }) 
} 
