let headerText1 = document.querySelector(".article__header").textContent = "Welcome to Eli Lavoie's Blog!"

let headerTextAll = document.querySelectorAll(".article__header")

for (var i = 0; i < headerTextAll.length; i++) {
    headerTextAll[i].classList.add("important")
}

let removeDashed = document.querySelector(".dashed").classList

removeDashed.remove("dashed")

let addGoldenrod = document.querySelector(".article__footer").classList
addGoldenrod.add("goldenrod")