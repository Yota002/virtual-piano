let keys = Array.from(document.getElementsByTagName("kbd"));
let array = ["A", "S", "D", "F", "G", "H", "J", "W", "E", "T", "Y", "U"];

keys.forEach(key => {
    key.addEventListener("click", (e) => {
        let audio = new Audio(`audio/${e.target.innerText}.mp3`);
        audio.play();
    })
});

document.addEventListener("keydown", (e) => {
    if (array.includes(e.key.toUpperCase())) {
        let audio = new Audio(`audio/${e.key.toUpperCase()}.mp3`);
        audio.play();
        let element = keys.filter(el => el.innerText === e.key.toUpperCase())[0];
        element.classList.add("kbd-active");
    }
});

document.addEventListener("keyup", (e) => {
    if (array.includes(e.key.toUpperCase())) {
        let element = keys.filter(el => el.innerText === e.key.toUpperCase())[0];
        element.classList.remove("kbd-active");
    }
});