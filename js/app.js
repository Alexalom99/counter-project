// Tu código aquí.
let contador = document.querySelector("#counter");

let btnlow = document.querySelector(".btn-container > button:first-child");
let btnadd = document.querySelector(".btn-container > button:last-child");



// btnlow.addEventListener("click",function () {
//     contador.textContent--;
//     if (contador.textContent < 0) {
//         contador.style.color = "red";
//     }
//     else if (contador.textContent == 0) {
//         contador.style.color = "var(--mainBlack)"
//     }
// } );

// btnadd.addEventListener("click",function () {
//     contador.textContent++;
//     if (contador.textContent > 0) {
//         contador.style.color = "green";
//     }
//     else if (contador.textContent == 0) {
//         contador.style.color = "var(--mainBlack)"
//     }
// });


btnlow.addEventListener("click",function () {
    contador.textContent--;
    if (contador.textContent < 0) {
        contador.classList.add("negative")
    }
    else if (contador.textContent == 0) {
        contador.classList.remove("positive")
    }
} );

btnadd.addEventListener("click",function () {
    contador.textContent++;
    if (contador.textContent > 0) {
        contador.classList.add("positive")
    }
    else if (contador.textContent == 0) {
        contador.classList.remove("negative")
    }
});