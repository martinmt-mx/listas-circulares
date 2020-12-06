export default class BaseRuta{
    constructor(){
        this.inicio = null
        this.tamano = 0
    }
  
    agregarBase(ruta){
        if(this.inicio === null){
            this.inicio = ruta
            ruta.siguiente = this.inicio
        }else{
            let aux = this.inicio
            while(aux.siguiente !== this.inicio){
                aux = aux.siguiente
            }
            aux.siguiente = ruta
            ruta.siguiente = this.inicio
        }
        this.tamano++
        return ruta.nombre
    }
  
    eliminarBase(ruta) {
        let aux = this.inicio
        if(this.tamano == 1 && aux.nombre === ruta){
            this.inicio = null
            this.tamano--
            let datosBase = [ruta, aux.minutos]
            return datosBase
        }
        
        if(this.inicio !== null){
            let anterior = false
            let final = false
            let i = 0
            while(final == false){
                if(aux.nombre == ruta){
                    if(anterior == false){
                        this.inicio = aux.siguiente
                        let datosBase = [ruta, aux.minutos]
                        this.tamano--
                        return datosBase
                    }else{
                        anterior.siguiente = aux.siguiente
                        let datosBase = [ruta, aux.minutos]
                        this.tamano--
                        return datosBase
                    }
                }
                anterior = aux
                aux = aux.siguiente
                i++
                if(i>this.tamano){
                    return false
                }
            }
        }
        return false
    }
  
    buscarBase(ruta) {
        if(this.inicio !== null){
            let aux = this.inicio
            let final = false
            let i = 0
            while(final == false){
                if(aux.nombre == ruta){
                    final = true
                    return aux
                }
                aux = aux.siguiente
                i++
                if(i>this.tamano){
                    return false
                }
            }
        }
        return false
    }
  
    listar() {
        if(this.inicio == null) return false
        let lista = ""
        let aux = this.inicio
        let final = false;
        while(!final){
            lista += `${aux.nombre}, `
            aux = aux.siguiente
            if(aux.nombre === this.inicio.nombre){
                final = true
            }
        }
        lista += "Fin de la lista"
        return lista
    }

    recorrido(base, horaInicio, horaFinal){
        let recorrido = ""
        let aux = this.buscarBase(base)
        let hora = Number(horaInicio)
        while(hora < horaFinal){
            recorrido += `Ruta: ${aux.nombre}, Tiempo: ${hora} - `
            console.log("holi si entró")
            aux = aux.siguiente;
            hora += Number(aux.minutos)
        }
        recorrido += `Ruta: ${aux.nombre}, Tiempo: ${hora} - `
        return recorrido
    }
}