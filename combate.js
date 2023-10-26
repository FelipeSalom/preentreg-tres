let id = "";
var objDiv = document.getElementById("combate");
let body = document.getElementById("bodyCombate");
let jugador = {};
let juego = false;
let stats = [
    {   
        nombre: "jugador",
        vida : 100,
        defenza : 0,
        accion : "",
        valor : 0,
    },
    {
        nombre: "Moustro",
        vida : 100,
        defenza : 0,
        accion : "",
        valor: 0,
    }
]
let opciones = [
    {
        accion: "Ataque",
        valor : () => {return this.ii = Math.floor(Math.random() * (10 - 5) + 5);}
    },
    {
        accion: "Defenza",
        valor: () => {return this.ii = Math.floor(Math.random() * (10 - 1) + 1);}
    },
    {
        accion: "Habilidad",
        valor: () => {return this.ii = Math.floor(Math.random() * (20 - 10) + 10);}
    },
    {
        accion: "Pocion",
        valor: () => {return this.ii = Math.floor(Math.random() * (10 - 1) + 1);}
    }
];
let historial = document.querySelector("#combate");

jugador =JSON.parse(sessionStorage.getItem('jugador'));
id =JSON.parse(sessionStorage.getItem('mapa'));

fetch("misiones.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((post) => {
            if(post.id === id) {
                body.style.backgroundImage = "url("+post.imagenes.esenario+")";
                document.getElementById("imagenMoustro").innerHTML = '<img src="'+post.imagenes.dragon+'" class="img">';
                document.getElementById("moustro").innerHTML = post.nombre;
            }
        });
    });
fetch("clases.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("imagenJugador").innerHTML = '<img src="'+data[jugador.clase].imagenSexo[jugador.sexo].normal+'" class="img">';
    });
    document.getElementById("jugador").innerHTML = jugador.nombre;
    document.getElementById("vidaJugador").innerHTML = stats[0].vida;
    document.getElementById("vidaMoustro").innerHTML = stats[1].vida;

verificacionMapa();

function verificacionMapa(){
    if (!id){
        cerrarMain("main-combate")
    }else{
        abrirMain("main-combate")
        cerrarMain("main-sin-mision")
    }
}
function ronda(i){
    if (stats[1].vida < 0 || stats[0].vida < 0 ) {
        alert("Reinicie la Partida Para Volver a Pelear")
        return
    }
    turnoJugador(i);
    turnoComputadora();
    let p = document.createElement("p")
    p.innerHTML = 
        '<p>El Jugador utiliza: '+stats[0].accion+" de "+stats[0].valor+'</P>'+
        '<p>El Dragon utiliza: '+stats[1].accion+" de "+stats[1].valor+'</P>'
    historial.append(p);
    objDiv.scrollTop = objDiv.scrollHeight;
    finPartida()
}
function turnoComputadora() {
    let i = Math.floor(Math.random() * (4 - 0) + 0);
    stats[1].accion = opciones[i].accion;
    stats[1].valor = opciones[i].valor();
    resultado(1, 0);
}
function turnoJugador(i){
    let op = i;
    stats[0].accion = opciones[op].accion;
    stats[0].valor = opciones[op].valor();
    resultado(0, 1);
}
function resultado(a, b){
    let ii = b;
    let i = a;
    if (stats[i].accion === "Ataque" || stats[i].accion === "Habilidad"){
        calcularDaño(i, ii)
    }else if (stats[i].accion === "Defenza"){
        stats[i].defenza = stats[i].defenza + stats[i].valor;
    }else if (stats[i].accion === "Pocion"){
        stats[i].vida = stats[i].vida + stats[i].valor;
    }
    document.getElementById("vidaJugador").innerHTML = stats[0].vida;
    document.getElementById("vidaMoustro").innerHTML = stats[1].vida;
}
function calcularDaño(i, ii){
    let daño = stats[i].valor - stats[ii].defenza;
    if (daño < 0){
        daño = 0;
    }
    stats[ii].vida = stats[ii].vida - daño;
    stats[ii].defenza = stats[ii].defenza - stats[i].valor;
    if (stats[i].defenza < 0){
        stats[i].defenza = 0;
    }else{
        return
    }
}
function autoAtaque(){
    let i = Math.floor(Math.random() * (4 - 0) + 0);
    stats[0].accion = opciones[i].accion;
    stats[0].valor = opciones[i].valor();
    resultado(0, 1);
}
function autoRonda(){
    while (!juego){
    autoAtaque()
    turnoComputadora();
    let p = document.createElement("p")
    p.innerHTML = 
        '<p>El Jugador utiliza: '+stats[0].accion+" de "+stats[0].valor+'</P>'+
        '<p>El Dragon utiliza: '+stats[1].accion+" de "+stats[1].valor+'</P>'
    historial.append(p);
    objDiv.scrollTop = objDiv.scrollHeight;
    if (stats[1].vida < 0 || stats[0].vida < 0 ){
        juego = true;
    }
}
finPartida()
}
function finPartida(){
    if (stats[1].vida < 0){
        historial.innerHTML = '<p>Victoria</p>'+'<button class="btn-accion" onclick="reiniciarPartida()">Reiniciar</button>'
    }else if (stats[0].vida < 0 ){
        historial.innerHTML = '<p>Game Over</p>'+'<button class="btn-accion" onclick="reiniciarPartida()">Reiniciar</button>'
    }
}
function reiniciarPartida(){
    stats[0].vida = 100;
    stats[0].defenza = 0;
    stats[1].vida = 100;
    stats[1].defenza = 0;
    juego = false;
    historial.innerHTML = ""
    document.getElementById("vidaJugador").innerHTML = stats[0].vida;
    document.getElementById("vidaMoustro").innerHTML = stats[1].vida;
}
function logout(){
    sessionStorage.clear();
}
function cerrarMain(id) {
    let main = document.getElementById(id);
    main.style.display = "none";
}
function abrirMain(id) {
    let main = document.getElementById(id);
    main.style.display = "flex";
}