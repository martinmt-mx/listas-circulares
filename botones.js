import Base from "./base.js"
import BaseRuta from "./base.js"
let btnAgregar = document.querySelector("#btnAgregar")
let baseBuscar = document.querySelector("#baseBuscar")
let baseEliminar = document.querySelector("#baseEliminar")
let btnListar = document.querySelector("#btnListar")
let btnRecorrido = document.querySelector("#btnRecorrido")
let mensajes = document.querySelector("#mensajes")

btnAgregar.addEventListener("click", () => {
    let nombreBase = document.querySelector('#nombreBase').value
    let tiempo = Number(document.querySelector('#tiempoBase').value)
    let base = new Base(nombreBase, tiempo)
    BaseRuta.agregarBase(base)
    mensajes.innerHTML = `Se agregó ${nombreBase}`
})

baseBuscar.addEventListener("click", () => {
    let baseBuscar = document.querySelector("#baseBuscar").value
    let base = BusBase.searchBase(baseBuscar)
    mensajes.innerHTML = `Se agregó ${base}`
});

baseEliminar.addEventListener("click", () => {
    let baseEliminar = document.querySelector("#baseEliminar").value
    BaseRuta.baseEliminar(baseEliminar)
});

btnListar.addEventListener("click", () => {
    busqueda = BaseRuta.listar()
});

btnRecorrido.addEventListener("click", () => {
    let inicio = document.querySelector("#horaInicioo").value
    let tiempo = document.querySelector("#horaFin").value   
    let final = document.querySelector("#horaFin").value
    BaseRuta.crearRecorrido(inicio, tiempo, endTime.final)
});