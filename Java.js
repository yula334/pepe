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

let curquest = [new Pll("Black", "Блок", "Назад", "Чёрный"), new Pll("Table", "Таблетка", "Керамика", "Стол"), new Pll("Look", "Лук", "Закрывать", "Смотреть")]

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