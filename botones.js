import Ruta from "./ruta.js"
import BaseRuta from "./baseRuta.js"
let btnAgregar = document.querySelector("#btnAgregar")
let btnBuscar = document.querySelector("#btnBuscar")
let btnEliminar = document.querySelector("#btnEliminar")
let btnListar = document.querySelector("#btnListar")
let btnRecorrido = document.querySelector("#btnRecorrido")
let mensajes = document.querySelector("#mensajes")
var baseRuta = new BaseRuta()

let r1 = new Ruta("r1", 11)
let r2 = new Ruta("r2", 12)
let r3 = new Ruta("r3", 13)
baseRuta.agregarBase(r1)
baseRuta.agregarBase(r2)
baseRuta.agregarBase(r3)
btnAgregar.addEventListener("click", () => {
    let nombreBase = document.querySelector('#baseNombre').value
    let tiempo = Number(document.querySelector('#tiempoBase').value)
    let ruta = new Ruta(nombreBase, tiempo)
    baseRuta.agregarBase(ruta)
    mensajes.innerHTML = `Se agregó ${nombreBase}`
})

btnBuscar.addEventListener("click", () => {
    let baseBuscar = document.querySelector("#baseBuscar").value
    let base = baseRuta.buscarBase(baseBuscar)
    if(base == false){
        mensajes.innerHTML = `No se encontró la base`
    }else{
        mensajes.innerHTML = `Se encontró ${base.nombre}, su tiempo de recorrido es ${base.minutos} minutos`
    }
    
});

btnEliminar.addEventListener("click", () => {
    let baseEliminar = document.querySelector("#baseEliminar").value
    let base = baseRuta.eliminarBase(baseEliminar)
    if(base == false){
        mensajes.innerHTML = `No se encontró la base`
    }else{
        mensajes.innerHTML = `Se eliminó ${base[0]}, su tiempo de recorrido era ${base[1]} minutos`
    }
});

btnListar.addEventListener("click", () => {
    let lista = baseRuta.listar()
    if(lista == false){
        mensajes.innerHTML = `No hay rutas`
    }else{
        mensajes.innerHTML = `Lista de rutas: ${lista}`
    }
});

btnRecorrido.addEventListener("click", () => {
    let rutaInicio = document.querySelector("#rutaInicio").value
    let horaInicio = document.querySelector("#horaInicio").value   
    let horaFinal = document.querySelector("#horaFin").value
    let recorrido = baseRuta.recorrido(rutaInicio, horaInicio, horaFinal)
    mensajes.innerHTML = recorrido
});