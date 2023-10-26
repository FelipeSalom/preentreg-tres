let usuarios = {};
let jugador = {};
let idJugador = {};
let tablonMisiones = document.querySelector("#tienda");
let bolsaInventario = document.querySelector("#inventario");
let items = [];
let indice = 0;

usuarios = JSON.parse(localStorage.getItem('usuarios'));
jugador =JSON.parse(sessionStorage.getItem('jugador'));
idJugador = JSON.parse(sessionStorage.getItem('idJugador'))

usuarios[idJugador].inventario.forEach((item) => {
    let div = document.createElement("div")
    indice = usuarios[idJugador].inventario.indexOf(item);
    div.innerHTML = 
        '<div class="items" type="button" onclick="venderItems('+indice+')">'+
            '<img src="'+item.imagen+'" class="items-img">'+
        '</div>'
    bolsaInventario.append(div);})

fetch("clases.json")
    .then(response => response.json())
    .then(data => {
    document.getElementById("imagenJugador").innerHTML = '<img src="'+data[jugador.clase].imagenSexo[jugador.sexo].chibi+'" class="img">';
});
fetch("items.json")
    .then(response => response.json())
    .then(data => {
    data.forEach((post) => {
        let div = document.createElement("div")
        indice = data.indexOf(post);
        div.innerHTML = 
                '<div class="items" type="button" onclick="comprarObjeto('+indice+')">'+
                    '<img src="'+post.imagen+'" class="items-img">'+
                '</div>'
        tablonMisiones.append(div);
        items.push(post);
    });
});
function logout(){
    sessionStorage.clear();
}
function mostrarTodo(){
    tablonMisiones.innerHTML = "";
    items.forEach((post) => {
        let div = document.createElement("div")
        indice = items.indexOf(post)
        div.innerHTML = 
                '<div class="items" type="button" onclick="comprarObjeto('+indice+')">'+
                    '<img src="'+post.imagen+'" class="items-img">'+
                '</div>'
        tablonMisiones.append(div);
    });
};
function filtrarItems(id){
    tablonMisiones.innerHTML = "";
    let filtro = items.filter((item) => {return item.clase === id})
    filtro.forEach((post) => {
        let div = document.createElement("div")
        indice = items.indexOf(post)
        div.innerHTML = 
            '<div class="items" type="button" onclick="comprarObjeto('+indice+')">'+
                '<img src="'+post.imagen+'" class="items-img">'+
            '</div>'
        tablonMisiones.append(div);
    })
};
function comprarObjeto(id){
    usuarios[idJugador].inventario.push(items[id]);
    guardarCompras()
}
function venderItems(id){
    usuarios[idJugador].inventario.splice(id, 1);
    guardarCompras();
}
function guardarCompras(){
    let usuariosString = JSON.stringify(usuarios);
    localStorage.setItem('usuarios', usuariosString)
    mostrarInventario();
}
function mostrarInventario(){
    bolsaInventario.innerHTML = ""
    usuarios[idJugador].inventario.forEach((item) => {
        indice = usuarios[idJugador].inventario.indexOf(item);
        let div = document.createElement("div")
        div.innerHTML = 
            '<div class="items" type="button" onclick="venderItems('+indice+')">'+
                '<img src="'+item.imagen+'" class="items-img">'+
            '</div>'
        bolsaInventario.append(div);
    })
}
