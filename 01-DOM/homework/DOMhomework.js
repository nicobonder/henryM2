// Crear un array vacío llamado 'toDoItems'
// Tu codigo acá:
let toDoItems = [];

// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// Tu código acá:
let spanBy = document.querySelector('#createdBy');
spanBy.innerHTML = spanBy.innerHTML +  " Nico Bonder"


// Crear una clase denominada 'ToDo' cuyo constructor debe recibir un único parámetro del tipo string
// con el nombre 'description' que será justamente la descripción del ToDo.
// Agregar dos propiedades a la clase:
// 1) 'description' : debe ser igual a la descripción pasada como parámetro al constructor
// 2) 'complete'    : debe setearse en false
// Ayuda: usar 'this' en el constructor

class ToDo { //se crea la clase ToDo
  // Tu código acá:
  constructor (description){
    this.description = description;
    this.complete = false;
  }
}


// Agregar un método denominado 'completeToDo' al prototipo de la clase ToDo
// No requiere ningún argumento
// Debe setear el atributo 'complete' del ToDo en true

// Tu código acá:
ToDo.prototype.completeToDo = function(){ //le agrega un metodo a la clase
  this.complete = !this.complete; //asi pasa de false a true, pero tb de true a false
}


// Agregar dos parámetros a la función 'buildToDo':
//    1) Un objeto de la clase ToDo
//    2) Index numérico
//
// La función debe realizar lo siguiente:
//    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
//    2) Asignarle a 'toDoShell' la clase 'toDoShell'
//    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'

//    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML ****Este falla!****
//       asignándole el valor de la propiedad 'description' del objeto ToDo.

//    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
//    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
//          - Si es true: asignarle a 'toDoText' la clase 'completeText'
//          - Si es false: no asignarle ninguna clase
//    7) Agregar 'toDoText' como hijo de 'toDoShell'
//    8) Devolver la variable toDoShell


//crea un div, le pongo una clase, meto un span que tiene un texto, que es la description del constructor. Y retorno el div

function buildToDo(todo, index) {
  // Tu código acá:
  let toDoShell = document.createElement('div');
  toDoShell.className = 'toDoShell'; //si son muchas clases se usa classList
  
  let check = document.createElement('input')
  check.type = 'checkbox';
  check.id = index;
  check.className = 'completeCheckbox'
  //le tengo que agregar un eventlistener al span
  //****VIENE DE LA ULTIMA FUNCION// 
  check.addEventListener('click',completeToDo) //cdo te hagan click, ejecuta completeToDo
  toDoShell.appendChild(check);

  let toDoText = document.createElement('span');
  toDoText.innerHTML = todo.description; 
  toDoShell.appendChild(toDoText);

  const trash = document.createElement('i');
  trash.className = 'fa-solid fa-trash';
  trash.id = 'r' + index;
  trash.addEventListener('click', removeTask);
  toDoShell.appendChild(trash);
  
  //toDoText.id = index;//tb se puede hacer con setAttribute
  if(todo.complete){
    toDoText.className = 'completeText'//es una clase que tiene como estilo una raya para tachar el elemento de la lista
    check.checked = true;
  }
  
 /* lo siguiente en la función 'buildToDo':
  a) Crer un checkbox en la función 'buildToDo'
  b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
 
  d) Asignarle la clase 'completeCheckbox' al checkbox
  e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
  f) Agregar el checkbox sobre el elemento 'toDoShell'
*/

    return toDoShell;
}

// La función 'buildToDos' debe crear un array de objetos toDo y devolverlo
// Recibirá como parámetro un array de objetos ToDo
// Utilizar el método map usando la función previamente creada ('buildToDo')
// Devolver el nuevo array


//quiero generar un todo para cada i de todos
function buildToDos(toDos) {
  // Tu código acá:
  return toDos.map(buildToDo);
/*tb puede ser = todos.map(function(todo,i){
  return buildTodo(todo, i)
})*/
 
}

// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
//  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
//  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
//  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems //tengo que crear una vble y llamar a buildToDos y pasar como parametro toDoItems

//  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
//  5) Al final de este archivo, antes de la línea que dice "NO CAMBIES NADA DE ACÁ PARA ABAJO" escribe una
//     línea para hacer el llamado a esta funcion (displayToDos)
//  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página

function displayToDos() {
  // Tu código acá:
  let toDoContainer = document.getElementById('toDoContainer');
  toDoContainer.innerHTML = ""; //esto sirve para q cdo cargo un nuevo elemento, no se vuelvan a recargar todos y no queden repetidos. Es para poder limpiar el container cdo ejecuto esta funcion dentro de addToDo.
  
  let build = buildToDos(toDoItems) //genero un arreglo de objetos con descriptions y completes
  for(let i = 0; i <build.length; i++){
    toDoContainer.appendChild(build[i])  
  }

}


// La función 'addToDo' agregará un nuevo ToDo al array 'toDoItems'
// [NOTA: Algunas cuestiones a tener en cuenta sobre el elemento 'input' de HTML (Ya que 'toDoInput' es un input)
// Todos los elementos input tienen una propiedad llamada 'value' que nos permite acceder al texto que se encuentre
// actualmente escrito dentro del input]
//  1) Crear un nuevo ToDo usando la clase ToDo y pasándole el valor del input 'toDoInput' como parámetro
//  2) Agregar el objeto ToDo recién creado al array toDoItems
//  3) Setear el valor del input toDoInput como un string vacio ("") (Esto se realiza para que en la vista se borre lo que se encontraba escrito)
//  4) Llamar a la función displayToDos para que se actualicen los toDos mostrados en pantalla


//recien aca voy a agregar los elem en la array
let myInput = document.getElementById('toDoInput')
function addToDo() {
  // Tu código acá:
  if(myInput.value !== ''){
    let nuevoToDo = new ToDo(myInput.value); //input.value es la description 
    toDoItems.push(nuevoToDo);
    myInput.value = ""; // para que despues se blanquee el valor
    
    displayToDos()
  }
}

myInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
      addToDo();
      event.preventDefault();
  }
});

/*
let myInput = document.querySelector("#toDoInput");
function addToDo() {
  // Tu código acá:
  if (myInput.value !== "") {
    let newToDo = new ToDo(myInput.value);
    toDoItems.push(newToDo); //actualice mi arreglo de toDos
    myInput.value = ""; //me queda el input vacio
    displayToDos(); // se va a encargar de que aparezca en pantalla el nuevo elenemtno; se vuelve a renderizar todos de nuevo.
  } 
}

myInput.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {addToDo()}
})
*/

// Agregar un 'Event Listener' para que cada vez que el botón 'AGREGAR' sea clickeado
// se ejecute la función 'addToDo'
//   1) Seleccionar el elemento cuyo id es 'addButton'
//   2) Agregarle un 'click' event listener, pasándole la función 'addToDo' como callback

function removeTask(event) {
  let index = event.target.id;
  index = index.substr(1);
  toDoItems.splice(index, 1);
  displayToDos();
}


// Tu código acá:
let myButton = document.getElementById('addButton');
myButton.addEventListener('click', addToDo)// en el event listener se llama la function pero no se ejecuta, por eso no pongo los ()

//no ejecuto la funcion addToDo sino que la paso por argumento


// La función completeToDo se va a ejecutar cuando queramos completar un todo
// [NOTA: Algunas cuestiones a tener en cuenta
// Todo Event Listener recibe como parámetro el objeto 'event' conteniendo un montón de información que incluye
// el tipo del evento, que elemento fue el que lo llamó, los valores de dicho elemento, etc.
// En este paso vamos a utilizarlo para encontrar el index del item que disparó el evento (Esta parte ya se
// encuentra desarrollada pero está comentada dentro de la función por lo que va a ser necesario que la descomenten)]
//   1) Utilizando el index suministrdo, llamar a 'completeToDo' (Recuerden que habíamos creado dcho método en el
//      prototipo de la clase ToDo) sobre el elemento correspondiente del array toDoItems
//   2) Llamar a displayToDos para actualizar los elementos que se van a mostrar en pantalla
//   3) En la función 'buildToDo' agregar un 'click' event listener al elemento 'toDoText', pasándole
//      esta función como callback


function completeToDo(event) {
  // DESCOMENTAR LA SIGUIENTE LINEA

  //en buildtodo creamos el div, 
   const index = event.target.id;
   //event es el clic, event.target es el span, event.target.id es el index que le habiamos atribuido en buildTodo, o index del span
  //
   // Tu código acá:
  toDoItems[index].completeToDo(); //esto pasa el complete de false a true. Tb necesito que de true pase a false. 
  displayToDos() //y despues tengo q volver a mostrar todo 

}

// Una vez que llegaste a este punto verificá que todos los tests pasen


// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //


displayToDos()
// Acá debes insertar la llamada a 'displayToDos'


// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}
