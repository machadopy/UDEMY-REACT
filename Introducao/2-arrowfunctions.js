function ola (){
    return 'ola!'
}

console.log(ola())

function olaPessoa(nome){
    return `Ola ${nome}`
}

console.log(olaPessoa('juca'))


//Arrow Functions


const ola2 = () =>{
    return 'ola2'
}

console.log(ola2())

const olapessoa2 = (nome, idade) =>{
    return `Ola ${nome} sua idade ${idade}`
}

console.log(olapessoa2('juca',23))

const olapessoa3 = nome => `Ola ${nome}`

console.log(olapessoa3('juca'))
