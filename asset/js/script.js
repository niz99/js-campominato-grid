let grid = document.getElementById("grid");

for(i = 1; i <= 100; i++){

    let box = document.createElement("div");
    box.innerHTML += i;
    box.classList.add("box");
    grid.appendChild(box);

    // ora voglio che al clic si colori la cella

    box.addEventListener("click", function(){
        this.classList.add("clicked");
    })
}

// const btn = document.getElementById("btn");
// const level = document.getElementById("level");

// btn.onclick = (event) => {
//     console.log(level);
// }

// if (level == "lev-1"){
//     console.log(level)
// }