class Animal{
    constructor(f){
        this.familia = f
    }
    andar = () =>{
        return 'andando'
    }
}

class Cachorro extends Animal{
    constructor(n,i){
        super('Carnivoros')
        this.nome = n
        this.idade = i

    }

    latir = ()=>{
        return`${this.nome}: wooooooooof woooooooooooooooooooooooooooooooooooooof caralho`
    }
}

let rex = new Cachorro('rex', 120)

console.log(rex)
console.log(rex.latir())

let fofa = new Cachorro('fofa', 2354)

console.log(fofa)
console.log(fofa.andar())