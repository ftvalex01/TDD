/* 
Escribir una funcion que al pasarle un número:
--Muestra "fizz" si es multiplo de 3
--Muestra "buzz" si es multiplo de 5
--Muestra "Fizzbuzz" si es multiplo de 3 y de 5
--Muestra el numero si no es multiplo de ninguno de los anteriores
*/
export const fizzbuzz = (number) => {
    if(typeof number != 'number') throw new Error('paramater provided must be a number')
    if(Number.isNaN(number)) throw new Error('paramater provided must be a number')

    //if(number % 3 == 0 && number % 5 == 0) return 'fizzbuzz'
    //if(number % 15 == 0) return 'fizzbuzz'
    //if(number % 3 == 0) return 'fizz'
    //if(number % 5 == 0) return 'buzz'
    const multiplies = {3:'fizz',5:'buzz'}
    let output = ''

    Object
        .entries(multiplies)
        .forEach(([multiplier,word]) => {
            if(number % multiplier == 0) output += word
        })

    return output == '' ? number : output
}