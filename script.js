console.log("Crie um array que receba 5 itens e exiba no console.")

 let selecao = ["neymar", "marquinhos", "coutinho", "anthony", "alisson"]

 console.log(selecao)





console.log("Utilize um método para adicionar um nome ao inicio do array.")

selecao.unshift("raphinha")

console.log(selecao)





console.log("Utilize um método para remover o último nome do array.")

selecao.pop()

console.log(selecao)





console.log("Utilize um método para adicionar dois nomes ao fim do array.")

selecao.push("casemiro", "gabigol")

console.log(selecao)





console.log("Utilize um método para remover o primeiro nome do array.")

selecao.shift()

console.log(selecao)





console.log("Utilize um método para organizar em ordem crescente o seguinte array: const numbers = [7,5,6,3,8,9,2,1,4]")

let numbers = [7,5,6,3,8,9,2,1,4]

let numbersEmOrdem = numbers.sort(function (b,a){
    return(b-a)
})

console.log(numbersEmOrdem)