//? Definición de constantes de los valores, numeros y operadores.
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const btnNum = document.querySelectorAll('.numero');
const btnOperators = document.querySelectorAll('.operador');

//? metodo que muestra el valor actual y anterior
const display = new Display(displayValorAnterior, displayValorActual);

//! Agrega los numeros al darle click
btnNum.forEach(boton =>{
    boton.addEventListener('click', () =>{
        display.agregarNumero(boton.innerHTML);
    })
});

//* Agrega los datos de operadores
btnOperators.forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value))
});