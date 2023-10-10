class usuario {
    constructor (mail, password, nombre, clase, sexo) {
        this.mail = mail
        this.password = password
        this.nombre = nombre
        this.clase = clase
        this.sexo = sexo
    }
};
let usuarios = [];
let indiceJugador = 0
let mailJugador = "";
let passwordJugador = "";
let claseJugador = 0;
let sexoJugador = 0;
let tablonMisiones = document.querySelector("#misiones");
comprobarEstatus()
function comprobarEstatus(){
    let estado = sessionStorage.getItem('status');
    if(estado != null){
        mostrarMisiones();
        abrirModal("modalMisiones");
        ocultarBoton('start');
    }
}
function logout(){
    sessionStorage.clear('status');
    cerrarModal("modalMisiones");
    mostrarBoton('start');
    console.log ("que onda");
    tablonMisiones.innerHTML = ''
}
function mostrarMisiones(){
    fetch("misiones.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((post) => {
            let div = document.createElement("div")
            div.innerHTML = 
                '<a href="./combate.html" class="ancla-misiones">'+
                    '<div class="misiones" type="button" onclick="guardarMapa('+post.id+')">'+
                        '<div class="min-dragon"><img src="'+post.imagenes.miniaturaDragon+'" class="mision-img"></div>'+
                        '<div class="min-mapa"><img src="'+post.imagenes.miniaturaEsenario+'" class="mision-img"></div>'+
                        '<div class="des-mision"><h2>'+post.nombre+'</h2><p>'+post.ubicacion+'</p></div>'+
                    '</div>'+
                '</a>'
            tablonMisiones.append(div);
        });
    });
}
fetch("clases.json")
                .then(response => response.json())
                .then(data => {
                    document.getElementById("imagen-personaje").innerHTML = '<img src="'+data[claseJugador].imagenSexo[0].normal+'" alt=" " class="img-normal">'+'<img src="'+data[claseJugador].imagenSexo[0].chibi+'" alt=" " class="img-chibi">';
                    document.getElementById("habilidad-1").innerHTML = '<img src="'+data[claseJugador].habilidades[0].imagen+'" alt=" " class="spell-div">'+data[claseJugador].habilidades[0].nombre+data[claseJugador].habilidades[0].descripcion;
                    document.getElementById("habilidad-2").innerHTML = '<img src="'+data[claseJugador].habilidades[1].imagen+'" alt=" " class="spell-div">'+data[claseJugador].habilidades[1].nombre+data[claseJugador].habilidades[1].descripcion;
                    document.getElementById("items").innerHTML = '<img src="'+data[claseJugador].inventario[4].imagen+'" alt=" " class="items">'+'<img src="'+data[claseJugador].inventario[0].imagen+'" alt=" " class="items">'+'<img src="'+data[claseJugador].inventario[1].imagen+'" alt=" " class="items">'+'<img src="'+data[claseJugador].inventario[2].imagen+'" alt=" " class="items">'+'<img src="'+data[claseJugador].inventario[3].imagen+'" alt=" " class="items">'
                    document.getElementById("atq").innerHTML = data[claseJugador].atributos.ataque
                    document.getElementById("dfz").innerHTML = data[claseJugador].atributos.defenza
                    document.getElementById("vit").innerHTML = data[claseJugador].atributos.vitalidad
                });
function limpiarCampos(){
    document.getElementById("Mail").value = "";
    document.getElementById("Password").value = "";
    document.getElementById("nuevoMail").value = "";
    document.getElementById("nuevoPassword").value = "";
    document.getElementById("Nombre").value = "";
    indiceJugador = 0
    mailJugador = "";
    passwordJugador = "";
    claseJugador = 0;
    sexoJugador = 0;
    fetch("clases.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("imagen-personaje").innerHTML = '<img src="'+data[claseJugador].imagenSexo[0].normal+'" alt=" " class="img-normal">'+'<img src="'+data[claseJugador].imagenSexo[0].chibi+'" alt=" " class="img-chibi">';
        document.getElementById("habilidad-1").innerHTML = '<img src="'+data[claseJugador].habilidades[0].imagen+'" alt=" " class="spell-div">'+data[claseJugador].habilidades[0].nombre+data[claseJugador].habilidades[0].descripcion;
        document.getElementById("habilidad-2").innerHTML = '<img src="'+data[claseJugador].habilidades[1].imagen+'" alt=" " class="spell-div">'+data[claseJugador].habilidades[1].nombre+data[claseJugador].habilidades[1].descripcion;
        document.getElementById("items").innerHTML = '<img src="'+data[claseJugador].inventario[4].imagen+'" alt=" " class="items">'+'<img src="'+data[claseJugador].inventario[0].imagen+'" alt=" " class="items">'+'<img src="'+data[claseJugador].inventario[1].imagen+'" alt=" " class="items">'+'<img src="'+data[claseJugador].inventario[2].imagen+'" alt=" " class="items">'+'<img src="'+data[claseJugador].inventario[3].imagen+'" alt=" " class="items">'
        document.getElementById("atq").innerHTML = data[claseJugador].atributos.ataque
        document.getElementById("dfz").innerHTML = data[claseJugador].atributos.defenza
        document.getElementById("vit").innerHTML = data[claseJugador].atributos.vitalidad
    });
}
function abrirModal(id) {
    let modal = document.getElementById(id);
    modal.style.display = "grid";
}
function cerrarModal(id) {
    let modal = document.getElementById(id);
    modal.style.display = "none";
}
function ocultarBoton(id) {
    let start = document.getElementById(id);
    start.style.display = "none";
}
function mostrarBoton(id) {
    let start = document.getElementById(id);
    start.style.display = "block";
}
function comenzarPartida(){
    limpiarCampos()
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
    if (usuarios === null){
        usuarios = []
    }
    abrirModal('login');
    ocultarBoton('start');
}
function verificacionLogout(){
    let mailIngresado = document.getElementById("Mail").value;
    let passIngresado = document.getElementById("Password").value;
    
    if (usuarios.length != 0){
        for (let i = 0; i < usuarios.length; i++){
            if (mailIngresado === usuarios[i].mail && passIngresado === usuarios[i].password){
                indiceJugador = i
                cerrarModal('login');
                abrirModal("modalMisiones");
                mostrarMisiones()
                guardarUsuario(i)
                return
            }
        }
        alert("Esta Cuenta es Invalida");
        return    
    }else{
        alert("no hay cuentas creadas");
    }
}
function guardarUsuario(id){
    let jugador = JSON.stringify(usuarios[id]);
    sessionStorage.setItem('jugador', jugador);
    sessionStorage.setItem('status', true);    
}
function insertarDatosUsuario(){
    mailJugador = document.getElementById("nuevoMail").value;
    passwordJugador = document.getElementById("nuevoPassword").value;
    if (usuarios.length >= 0){
        for (let i = 0; i < usuarios.length; i++){
            if (mailJugador !== usuarios[i].mail){
                cerrarModal('registro');
                abrirModal('personaje');
            }else{
            alert("Esta Cuenta Ya existe");
            return
            }
        }
    }
    if (usuarios.length === 0){
        cerrarModal('registro');
        abrirModal('personaje');
    }
}
function guardarDatosUsuario() {
    let nombreJugador = document.getElementById("Nombre").value;
    usuarios.push (new usuario(mailJugador, passwordJugador, nombreJugador, claseJugador, sexoJugador));
    let conversorUsuarios = JSON.stringify(usuarios);
    localStorage.setItem('usuarios', conversorUsuarios);
    cerrarModal('personaje');
    mostrarBoton('start');
}
function selecionClase(id){
    claseJugador = id;
    mostrarFicha();
}
function selecionSexoJugador(id){
    sexoJugador = id;
    mostrarFicha();
}
function guardarMapa(id){
    let i = JSON.stringify(id)
    sessionStorage.setItem('mapa', i);
}
