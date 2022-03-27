let start = document.getElementById("btn");

let select = document.getElementById("level");

let grid = document.getElementById("grid");

let paragrafo = document.getElementById("welcome");

let array = [];

start.addEventListener("click", function(){

    grid.innerHTML = "";

    grid.classList.remove("none");

    paragrafo.classList.add("none");

    console.log(select.value);

    if(select.value == "lev-1"){

        for(i = 1; i <= 100; i++){

            let box = document.createElement("div");
            box.innerHTML += i;
            box.classList.add("box-facile");
            grid.appendChild(box);

            box.addEventListener("click", function(){
                this.classList.add("clicked");
            })
        }

    } else if(select.value == "lev-2"){

        for(i = 1; i <= 81; i++){

            let box = document.createElement("div");
            box.innerHTML += i;
            box.classList.add("box-medio");
            grid.appendChild(box);

            box.addEventListener("click", function(){
                this.classList.add("clicked");
            })
        }

    } else {

        for(i = 1; i <= 49; i++){

            let box = document.createElement("div");
            box.innerHTML += i;
            box.classList.add("box-difficile");
            grid.appendChild(box);

            box.addEventListener("click", function(){
                this.classList.add("clicked");
            })
        }

    }
})

// function getRandomIntInclusive(min, max){
//     min = Math.ceil(min);
//     max = Math.ceil(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// for(y = 1; y <= 100; i++){

//     let numeroRandom = getRandomIntInclusive(1, 100);

//     do {
//         array,push(numeroRandom)
//     } while ( !array.includes(numeroRandom) )

// }