function menuAppear() {
    this.firstElementChild.style.visibility = "visible";
}

function menuVanish() {
    this.firstElementChild.style.visibility = "hidden";
}

let newButton = document.getElementById("newButton");
newButton.addEventListener("pointerenter", menuAppear);
newButton.addEventListener("pointerleave", menuVanish);