function addDropDownMenu(element) {
    element.addEventListener("pointerenter", () => {element.firstElementChild.style.visibility = "visible";});
    element.addEventListener("pointerleave", () => {element.firstElementChild.style.visibility = "hidden";});
}

addDropDownMenu(document.getElementById("newButton"));