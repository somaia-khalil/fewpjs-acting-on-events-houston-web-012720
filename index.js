function moveDodgerLeft() {

    let dodger = document.getElementById('dodger')
    let left = dodger.style.left.replace("px", "")
    let clean = parseInt(left, 10)
    dodger.style.left = `${clean - 1}px`

}


function moveDodgerRight() {
    let dodger = document.getElementById('dodger')
    let left = dodger.style.left.replace("px", "")
    let clean = parseInt(left, 10)
    dodger.style.left = `${clean +1}px`
}



document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }

    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});