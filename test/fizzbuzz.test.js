import { describe } from "vitest";

/* 
Escribir una funcion que al pasarle un número:
--Muestra "fizz" si es multiplo de 3
--Muestra "buzz" si es multiplo de 5
--Muestra "Fizzbuzz" si es multiplo de 3 y de 5
--Muestra el numero si no es multiplo de ninguno de los anteriores
*/
const fizzbuzz = (num) => {
    if(typeof num != 'number') throw new Error('paramater provided must be a number')
}

describe("FIZZBUZZ",() =>{
    it('Should be a function',()=>{
      expect(typeof fizzbuzz).toBe('function')  
    })
    it('Should throw if not number is provided as parameter',()=>{
        expect(() => fizzbuzz()).toThrow()
    })
    it('Should throw a specific error message if not number is provided as parameter',()=>{
        expect(() => fizzbuzz()).toThrow(/number/)
    })
})