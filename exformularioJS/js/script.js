
const nA = document.querySelector("#txtn")
const nB = document.querySelector("#txtn2")
const form = document.querySelector("#form")

form.addEventListener("submit",(event)=> {
    event.preventDefault();
    if (nA.value >= nB.value) {
        erron1.style.display = "block";
        sucesso.style.display = "none";
        return;
    } else {
        sucesso.style.display = "block";
        erron1.style.display = "none";
    }
})