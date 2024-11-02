"use strict"
const referencia = {
    retornarLinhaEcoluna(inputTarget) {
        const linhaOutput = document.querySelector(".reference__output--indicador");
        const colunaOutput = document.querySelector(".reference__output--idade");
        const indicadorLinear = inputTarget.parentElement.children[0].querySelector("span");
        const indicadoresColunares = document.querySelectorAll(".seccao-1__header__linha-de-indicadores span");
        const inputTargetAndSiblings = inputTarget.parentElement.children;
        let inputTargetColIndex = Number(inputTarget.parentElement.dataset.colindex);
        for(let i=0; i < inputTargetAndSiblings.length; i++)  {
            if(inputTargetAndSiblings[i] === inputTarget) inputTargetColIndex = i - 1;
        }
        linhaOutput.innerHTML = indicadorLinear.textContent;
        colunaOutput.innerHTML = indicadoresColunares[inputTargetColIndex].textContent;
    },
    retornarVazio() {
        const outputs = document.querySelectorAll(".reference__output");
        for (const o of outputs) o.value = "";
    }
}
function events() {
    const inputsCelulares = document.querySelectorAll(".ficha__seccao input");
    inputsCelulares.forEach( inputCelular => {
        inputCelular.addEventListener("focus", () => {
            if(!inputCelular.matches("[readonly]")) {
                referencia.retornarLinhaEcoluna(inputCelular);
            }
        });
    });
    inputsCelulares.forEach( inputCelular => inputCelular.addEventListener("focusout", referencia.retornarVazio));
}
window.onload = events;