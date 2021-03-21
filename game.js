let boxes = document.querySelectorAll(".box");
boxes = Array.from(boxes);

let playerPos = 156;
let width = 10;



const changePlayerPos = () => {
    for (let i=0;i<boxes.length;i++)
        boxes[i].classList.remove("player");
    boxes[playerPos].classList.add("player");
}

changePlayerPos ();

for (let i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click", () => {
        console.log(i);
    })
}

document.addEventListener("keydown", (e) => {
    if (e.keyCode === 39 && (playerPos+1) % 15 !== 0) {
        if (playerPos === 299) return;

        width = 1;
        playerPos += width; 
        changePlayerPos();
    }

    else if (e.keyCode === 37 && playerPos % 15 !== 0 ) {
        if (playerPos === 0) return;
        width = -1;
        playerPos += width; 
        changePlayerPos();
    }
    // else if (e.keyCode === 38) {
    //     if (playerPos < 15) return;
    //     width = -15;
    //     playerPos += width; 
    //     changePlayerPos();
    // }
})


