const numeros = [1,2,3,4]

const novosNumeros = [...numeros]
novosNumeros.push(5)

console.log(numeros)
console.log(novosNumeros)

const rex = {
    nome : 'rex'
}

const max = {...rex, idade : 200, familia : 'felis catus'}


console.log(rex)
console.log(max)

//

const somar = (n1,n2) =>{
    return n1 + n2
}

console.log(somar(2,3))

const somarkwargs = (...numeros) => numeros.reduce( (a,b) => a+b, 0)

console.log(somarkwargs(2,3,4,5,6,180))