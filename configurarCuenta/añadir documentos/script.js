const btnAnadir = document.querySelector("#mostrar-modal");
const btnCancelar = document.querySelector("#btn-cancelar");
const btnSubir = document.querySelector("#drag-subir");
const button = document.querySelector(".button"), text = document.querySelector(".text");

btnAnadir.addEventListener("click",()=>{
    Constancia.showConstancia();
})

btnCancelar.addEventListener("click",()=>{
    Constancia.closest();
})

btnSubir.addEventListener("click",()=>{
    Constancia.button.addEventListener("click", ()=>{
        button.classList.add("progress");
        text.innerText = "Subiendo...";

        setTimeout(()=>{
            button.classList.remove("progress");
            text.innerText = "Completado";
        }, 10000)
    })
})
