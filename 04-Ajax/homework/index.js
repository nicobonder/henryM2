const amigosBtn = document.querySelector('#boton');
const ulAmigos = document.querySelector('#lista');

function showFriends (){
    ulAmigos.innerHTML = '';
    fetch('http://localhost:5000/amigos')
    .then(res => res.json())
    .then(amigos => { //capturo el objeto que converti a js en la linea anterior
        for (let i = 0; i < amigos.length; i++) {
            let li = `<li>${amigos[i].name} <button onClick='deleteFriend(${amigos[i].id})'>X</button></li>`
            //let li = document.createElement('li');
            //li.innerText = amigos[i].name;            
            ulAmigos.innerHTML = ulAmigos.innerHTML + li;
        }
    });
} 
amigosBtn.addEventListener('click', showFriends);

//Borrar amigo
function deleteFriend(idFriend){
    if(typeof idFriend !== 'number'){
        idFriend = inputBorrar.value;
        inputBorrar.value = '';
    }
        fetch(`http://localhost:5000/amigos/${idFriend}`, {
            method: 'DELETE'
        })
       .then(res => res.json())
       .then(() => {
        spanBorrar.innerText = 'Amigo borrado exitosamente';
        showFriends();
       });
}


const inputAmigo = document.querySelector('#input');
const btnAmigo = document.querySelector('#search');
const spanAmigo = document.querySelector('#amigo');

//Buscar amigo
btnAmigo.addEventListener('click', function(e){
    let idAmigo = inputAmigo.value;
    fetch(`http://localhost:5000/amigos/${idAmigo}`)
    .then(res => res.json())
    .then(amigo => {
        spanAmigo.innerText = amigo.name;
    });
    inputAmigo.value = '';
})

const btnBorrar = document.querySelector('#delete');
const inputBorrar = document.querySelector('#inputDelete');
const spanBorrar = document.querySelector('#success');


btnBorrar.addEventListener('click', deleteFriend)