const frutas = ['laranja', 'banana', 'uva'];
let [fruta1, ,fruta3] = frutas;

console.log(fruta1)
console.log(fruta3)


const pessoa = {
    nome: 'joao',
    idade: 20,
    pais: 'brasil',
    idioma: 'portugues'
}
let {idade,idioma} = pessoa

console.log(idade, idioma)

const localidade = ({pais, idioma}) => `Voce mora no ${pais} e fala ${idioma}`

console.log(localidade(pessoa))