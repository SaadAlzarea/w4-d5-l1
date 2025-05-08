let murder = "Hello World";
console.log(murder);
let text = document.getElementById("text");
text.textContent = murder;

document.getElementById("change-text").onclick = function () {
    text.textContent = "Im here"
};
document.getElementById("font-size-large").onclick = function () {
    text.style.fontSize ="2em"
};
document.getElementById("font-size-small").onclick = function () {
    text.style.fontSize ="0.5em"
};
document.getElementById("color").onclick = function () {
    text.style.color = "blue"
};
document.getElementById("bg-color").onclick = function () {
    text.style.backgroundColor = "blue"
};
document.getElementById("change-image").onclick = function () {
    img = document.getElementById("img").src = "https://images.pexels.com/photos/31249526/pexels-photo-31249526/free-photo-of-close-up-of-pink-magnolia-blossoms-in-spring.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
};

