let usuarios = {};
let jugador = {};
let idJugador = {};
let tablonMisiones = document.querySelector("#tienda");
let bolsaInventario = document.querySelector("#inventario");
let items = [];
let indice = 0;
let claseJugador = "";

usuarios = JSON.parse(localStorage.getItem('usuarios'));
jugador =JSON.parse(sessionStorage.getItem('jugador'));
idJugador = JSON.parse(sessionStorage.getItem('idJugador'))

usuarios[idJugador].inventario.forEach((item) => {
    let div = document.createElement("div")
    indice = usuarios[idJugador].inventario.indexOf(item);
    div.innerHTML = 
        '<div class="items" type="button" onclick="buscarItem('+indice+')">'+
            '<img src="'+item.imagen+'" class="items-img">'+
        '</div>'
    bolsaInventario.append(div);})

fetch("clases.json")
    .then(response => response.json())
    .then(data => {
    document.getElementById("imagenJugador").innerHTML = '<img src="'+data[usuarios[idJugador].clase].imagenSexo[usuarios[idJugador].sexo].normal+'" class="img">';
    document.getElementById("atq").innerHTML = data[usuarios[idJugador].clase].atributos.ataque
    document.getElementById("dfz").innerHTML = data[usuarios[idJugador].clase].atributos.defenza
    document.getElementById("vit").innerHTML = data[usuarios[idJugador].clase].atributos.vitalidad
    document.getElementById("clase").innerHTML = data[usuarios[idJugador].clase].nombre
    claseJugador = data[usuarios[idJugador].clase].nombre
});
document.getElementById("nombre").innerHTML = usuarios[idJugador].nombre;
document.getElementById("casco").innerHTML = '<img src="'+usuarios[idJugador].equipo[0].imagen+'" alt=" " class="items">'
document.getElementById("peto").innerHTML = '<img src="'+usuarios[idJugador].equipo[2].imagen+'" alt=" " class="items">'
document.getElementById("arma").innerHTML = '<img src="'+usuarios[idJugador].equipo[4].imagen+'" alt=" " class="items">'
document.getElementById("guantes").innerHTML = '<img src="'+usuarios[idJugador].equipo[1].imagen+'" alt=" " class="items">'
document.getElementById("botas").innerHTML = '<img src="'+usuarios[idJugador].equipo[3].imagen+'" alt=" " class="items">'

console.log(usuarios[idJugador])

function buscarItem(id){
    if (usuarios[idJugador].inventario[id].clase != claseJugador){
        alert("Este equipo no pertenece a esta clase");
    }else{
        let filtro1 = usuarios[idJugador].equipo.filter((item) => {return item.clase === usuarios[idJugador].inventario[id].clase});
        let filter2 = filtro1.filter((item)=>{return item.tipo === usuarios[idJugador].inventario[id].tipo});
        let itemId = filter2[0].id
        let obtenerIndex = (element) => element.id === itemId;
        let itemIndex = usuarios[idJugador].equipo.findIndex(obtenerIndex);
        let nuevoItem = id;
        equiparItem(itemIndex, nuevoItem);
    }
}
function equiparItem(i, ii){
    let nuevoItem = usuarios[idJugador].inventario[ii];
    let viejoItem = usuarios[idJugador].equipo[i];
    usuarios[idJugador].equipo.splice(i, 1, nuevoItem);
    usuarios[idJugador].inventario.splice(ii, 1, viejoItem);
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
            '<div class="items" type="button" onclick="buscarItem('+indice+')">'+
                '<img src="'+item.imagen+'" class="items-img">'+
            '</div>'
        bolsaInventario.append(div);
    })
    document.getElementById("casco").innerHTML = '<img src="'+usuarios[idJugador].equipo[0].imagen+'" alt=" " class="items">'
    document.getElementById("peto").innerHTML = '<img src="'+usuarios[idJugador].equipo[2].imagen+'" alt=" " class="items">'
    document.getElementById("arma").innerHTML = '<img src="'+usuarios[idJugador].equipo[4].imagen+'" alt=" " class="items">'
    document.getElementById("guantes").innerHTML = '<img src="'+usuarios[idJugador].equipo[1].imagen+'" alt=" " class="items">'
    document.getElementById("botas").innerHTML = '<img src="'+usuarios[idJugador].equipo[3].imagen+'" alt=" " class="items">'
}