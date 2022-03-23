let grid = document.getElementById("grid");

for(i = 1; i <= 100; i++){

    let box = document.createElement("div");
    box.innerHTML += i;
    box.classList.add("box");
    grid.appendChild(box);
}