const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//addEventListener escucha cada ves que se ejecuta cierto evento, para hacerlo funcionar, entre parentesis colocamos dos argumentos, el primero es el nombre del evento que queramos ejecutar y el segundo el codigo js que vamos a llamar cuando suceda ese evento.

 //el evento aqui es el click del boton y el otro argumento es el nombre de la funcion que hemos creado, se coloca sin parentesis.

btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    const sumaInputs = input1.value + input2.value; 
    pResult.innerText = "Resultado: " + sumaInputs; 
}