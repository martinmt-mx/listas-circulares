export default class baseRuta{
    constructor(){
        this.inicio = null
        this.tamano = 0
    }
  
    agregarBase(base){
        if(this.inicio === null){
            this.inicio = base
            base.siguiente = this.inicio
        }else{
            let aux = this.inicio
            while(aux.siguiente !== this.inicio){
                aux = aux.siguiente
            }
            aux.siguiente = base
            base.siguiente = this.inicio
        }
        this.tamano++
        return base.nombre
    }
  
    eliminarBase(base) {
        let aux = this.inicio
        if(this.tamano == 1 && aux.nombre === base){
            this.inicio = null
            this.tamano--
            return base
        }

        if(aux.nombre == base){
            this.inicio = aux.siguiente
            let temp = this.inicio
            while(temp.siguiente.nombre !== base){
                temp = temp.siguiente
            }
            this.tamano--
            temp.siguiente = this.inicio
            return base
        }

        else {
            let temp = this.inicio
            while(temp.siguiente.nombre !== base){
                temp = temp.siguiente
            }
            temp.siguiente = temp.siguiente.siguiente
            this.tamano--
            return base
        }
  
    }
  
    buscarhBase(base) {
        if(this.inicio !== null){
            let aux = this.inicio
            let final = false
            let i = 0
            while(final == false){
                if(aux.nombreBase == base){
                    final = true
                    return base
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
        let lista = ""
        if(this.inicio = null) return false
        
        let aux = this.inicio
        let final = false
        while(final == false){
            lista += `${aux.producto}, `
            aux = aux.siguiente
            if(aux.nombre === this.inicio.nombre){
                final = true
            }
        }
    }
}