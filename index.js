let clases = [
    {
        nombre: "guerrero",
        descripcion: "",
        nivel: 0,
        exp: 0,
        imagenSexo: [
            {
                sexo: "Hombre",
                chibi: '<img src="./assent/chibi-g-h.png" alt="" class="img-chibi">',
                normal: '<img src="./assent/img-g-h.png" alt="" class="img-normal">',
            },
            {
                sexo: "Mujer",
                chibi: '<img src="./assent/chibi-g-m.png" alt="" class="img-chibi">',
                normal: '<img src="./assent/img-g-m.png" alt="" class="img-normal">',
            },
        ],
        habilidades: [
            {
                nombre: "Grito de Batalla:<br>",
                descripcion: "Ootorga un 10% + daño en los siguiente 2 Ataques",
                tipo: "Activa",
                accion: "",
                imagen: '<img src="./assent/g-h-1.png" alt="" class="spell">',
            },
            {
                nombre: "Maestria Armas C/C:<br>",
                descripcion: "Puede Realizar bloqueos con su arma",
                tipo: "Pasiva",
                accion: "",
                imagen: '<img src="./assent/g-h-2.png" alt="" class="spell">',
            }
        ],
        atributos:{
                ataque: 5,
                defenza: 7,
                vitalidad: 10,
        },
        inventario:[
            {
                tipo: "pecho",
                defenza: 0,
                ataque: 0,
                imagen: '<img src="./assent/arm-1 (1).png" alt="" class="items">'
            },
            {
                tipo: "glovs",
                defenza: 0,
                ataque: 0,
                imagen: '<img src="./assent/arm-1 (3).png" alt="" class="items">'
            },
            {
                tipo: "pants",
                defenza: 0,
                ataque: 0,
                imagen: '<img src="./assent/arm-1 (4).png" alt="" class="items">'
            },
            {
                tipo: "bots",
                defenza: 0,
                ataque: 0,
                imagen: '<img src="./assent/arm-1 (2).png" alt="" class="items">'
            },
            {
                tipo: "weapon",
                defenza: 0,
                ataque: 0,
                imagen: '<img src="./assent/w-1.png" alt="" class="items">'
            },
        ],
        bols:[
            {},
            {},
            {},
            {},
            {},
            {}
        ]
    },
    {
        nombre: "Arquero",
        descripcion: "",
        nivel: 0,
        exp: 0,
        imagenSexo: [
            {
                sexo: "Hombre",
                chibi: '<img src="./assent/chibi-a-h.png" alt="" class="img-chibi">',
                normal: '<img src="./assent/img-a-h.png" alt="" class="img-normal">',
            },
            {
                sexo: "Mujer",
                chibi: '<img src="./assent/chibi-a-m.png" alt="" class="img-chibi">',
                normal: '<img src="./assent/img-a-m.png" alt="" class="img-normal">',
            },
        ],
        habilidades: [
            {
                nombre: "Grito de Batalla",
                descripcion: "Ootorga un 10% + daño en los siguiente 2 Ataques",
                tipo: "Activa",
                accion: "",
                imagen: '<img src="./assent/a-h-1.png" alt="" class="spell">',
            },
            {
                nombre: "Maestria Armas Cuerpo a Cuerpo",
                descripcion: "Puede Realizar bloqueos con su arma",
                tipo: "Pasiva",
                accion: "",
                imagen: '<img src="./assent/a-h-2.png" alt="" class="spell">',
            }
        ],
        atributos:{
                ataque: 7,
                defenza: 10,
                vitalidad: 5,
        },
        inventario:[
            {
                tipo: "pecho",
                defenza: 0,
                ataque: 0,
                imagen: '<img src="./assent/arm-2 (1).png" alt="" class="items">'
            },
            {
                tipo: "glovs",
                defenza: 0,
                ataque: 0,
                imagen: '<img src="./assent/arm-2 (3).png" alt="" class="items">'
            },
            {
                tipo: "pants",
                defenza: 0,
                ataque: 0,
                imagen: '<img src="./assent/arm-2 (4).png" alt="" class="items">'
            },
            {
                tipo: "bots",
                defenza: 0,
                ataque: 0,
                imagen: '<img src="./assent/arm-2 (2).png" alt="" class="items">'
            },
            {
                tipo: "weapon",
                defenza: 0,
                ataque: 0,
                imagen: '<img src="./assent/w-2.png" alt="" class="items">'
            },
        ],
        bols:[
            {},
            {},
            {},
            {},
            {},
            {}
        ]
    },
    {
        nombre: "mago",
        descripcion: "",
        nivel: 0,
        exp: 0,
        imagenSexo: [
            {
                sexo: "Hombre",
                chibi: '<img src="./assent/chibi-m-h.png" alt="" class="img-chibi">',
                normal: '<img src="./assent/img-m-h.png" alt="" class="img-normal">',
            },
            {
                sexo: "Mujer",
                chibi: '<img src="./assent/chibi-m-m.png" alt="" class="img-chibi">',
                normal: '<img src="./assent/img-m-m.png" alt="" class="img-normal">',
            },
        ],
        habilidades: [
            {
                nombre: "Grito de Batalla:",
                descripcion: "Ootorga un 10% + daño en los siguiente 2 Ataques",
                tipo: "Activa",
                accion: "",
                imagen: '<img src="./assent/m-h-1.png" alt="" class="spell">',
            },
            {
                nombre: "Maestria Armas Cuerpo a Cuerpo:<br>",
                descripcion: "Puede Realizar bloqueos con su arma",
                tipo: "Pasiva",
                accion: "",
                imagen: '<img src="./assent/m-h-2.png" alt="" class="spell">',
            }
        ],
        atributos:{
                ataque: 10,
                defenza: 5,
                vitalidad: 7,
        },
        inventario:[
            {
                tipo: "pecho",
                defenza: 0,
                ataque: 0,
                imagen: '<img src="./assent/arm-3 (1).png" alt="" class="items">'
            },
            {
                tipo: "glovs",
                defenza: 0,
                ataque: 0,
                imagen: '<img src="./assent/arm-3 (3).png" alt="" class="items">'
            },
            {
                tipo: "pants",
                defenza: 0,
                ataque: 0,
                imagen: '<img src="./assent/arm-3 (4).png" alt="" class="items">'
            },
            {
                tipo: "bots",
                defenza: 0,
                ataque: 0,
                imagen: '<img src="./assent/arm-3 (2).png" alt="" class="items">'
            },
            {
                tipo: "weapon",
                defenza: 0,
                ataque: 0,
                imagen: '<img src="./assent/w-3.png" alt="" class="items">'
            },
        ],
        bols:[
            {},
            {},
            {},
            {},
            {},
            {}
        ]
    },
];
class usuario {
    constructor (mail, password, nombre, clase, sexo) {
        this.mail = mail
        this.password = password
        this.nombre = nombre
        this.clase = clase
        this.sexo = sexo
    }
}
let pruebas = {
        mail: "",
        password: "",
        nombre: "",
        clase: 0,
        sexo: "",
    };
let usuarios = [];
let indiceJugador = 0
let mailJugador = "";
let passwordJugador = "";
let claseJugador = 0;
let sexoJugador = 0;

document.getElementById("imagen-personaje").innerHTML = clases[claseJugador].imagenSexo[0].normal+clases[claseJugador].imagenSexo[0].chibi;
document.getElementById("habilidad-1").innerHTML = clases[claseJugador].habilidades[0].imagen+clases[claseJugador].habilidades[0].nombre+clases[claseJugador].habilidades[0].descripcion;
document.getElementById("habilidad-2").innerHTML = clases[claseJugador].habilidades[1].imagen+clases[claseJugador].habilidades[1].nombre+clases[claseJugador].habilidades[1].descripcion;
document.getElementById("items").innerHTML = clases[claseJugador].inventario[4].imagen+clases[claseJugador].inventario[0].imagen+clases[claseJugador].inventario[1].imagen+clases[claseJugador].inventario[2].imagen+clases[claseJugador].inventario[3].imagen;
document.getElementById("atq").innerHTML = clases[claseJugador].atributos.ataque
document.getElementById("dfz").innerHTML = clases[claseJugador].atributos.defenza
document.getElementById("vit").innerHTML = clases[claseJugador].atributos.vitalidad

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
    document.getElementById("imagen-personaje").innerHTML = clases[claseJugador].imagenSexo[0].normal+clases[claseJugador].imagenSexo[0].chibi;
    document.getElementById("habilidad-1").innerHTML = clases[claseJugador].habilidades[0].imagen+clases[claseJugador].habilidades[0].nombre+clases[claseJugador].habilidades[0].descripcion;
    document.getElementById("habilidad-2").innerHTML = clases[claseJugador].habilidades[1].imagen+clases[claseJugador].habilidades[1].nombre+clases[claseJugador].habilidades[1].descripcion;
    document.getElementById("items").innerHTML = clases[claseJugador].inventario[4].imagen+clases[claseJugador].inventario[0].imagen+clases[claseJugador].inventario[1].imagen+clases[claseJugador].inventario[2].imagen+clases[claseJugador].inventario[3].imagen;
    document.getElementById("atq").innerHTML = clases[claseJugador].atributos.ataque
    document.getElementById("dfz").innerHTML = clases[claseJugador].atributos.defenza
    document.getElementById("vit").innerHTML = clases[claseJugador].atributos.vitalidad
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
    console.log(usuarios);
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
                mostrarBoton('mapa-inicio');
                return
            }
        }
        alert("Esta Cuenta es Invalida");
        return    
    }else{
        alert("no hay cuentas creadas");
    }
}

function insertarDatosUsuario(){
    mailJugador = document.getElementById("nuevoMail").value;
    passwordJugador = document.getElementById("nuevoPassword").value;
    if (usuarios.length === 0){
        cerrarModal('registro');
        abrirModal('personaje');
    }else{
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
}

function guardarDatosUsuario() {
    let nombreJugador = document.getElementById("Nombre").value;
    usuarios.push (new usuario(mailJugador, passwordJugador, nombreJugador, claseJugador, sexoJugador));
    let conversorUsuarios = JSON.stringify(usuarios);
    localStorage.setItem('usuarios', conversorUsuarios);
    cerrarModal('personaje');
    mostrarBoton('start');
}

function mostrarFicha(){
    document.getElementById("imagen-personaje").innerHTML = clases[claseJugador].imagenSexo[sexoJugador].normal+clases[claseJugador].imagenSexo[sexoJugador].chibi;
    document.getElementById("habilidad-1").innerHTML = clases[claseJugador].habilidades[0].imagen+clases[claseJugador].habilidades[0].nombre+clases[claseJugador].habilidades[0].descripcion;
    document.getElementById("habilidad-2").innerHTML = clases[claseJugador].habilidades[1].imagen+clases[claseJugador].habilidades[1].nombre+clases[claseJugador].habilidades[1].descripcion;
    document.getElementById("items").innerHTML = clases[claseJugador].inventario[4].imagen+clases[claseJugador].inventario[0].imagen+clases[claseJugador].inventario[1].imagen+clases[claseJugador].inventario[2].imagen+clases[claseJugador].inventario[3].imagen;
    document.getElementById("atq").innerHTML = clases[claseJugador].atributos.ataque;
    document.getElementById("dfz").innerHTML = clases[claseJugador].atributos.defenza;
    document.getElementById("vit").innerHTML = clases[claseJugador].atributos.vitalidad;
}
function selecionClase(id){
    claseJugador = id;
    mostrarFicha();
}
function selecionSexoJugador(id){
    sexoJugador = id;
    mostrarFicha();
}
function mostrarPersonaje(){
    ocultarBoton("mapa-inicio");
    abrirModal("atributos");
    claseJugador = usuarios[indiceJugador].clase;
    sexoJugador = usuarios[indiceJugador].sexo;
    document.getElementById("clase-jugador").innerHTML = "Clase: "+clases[claseJugador].nombre;
    document.getElementById("sexo-jugador").innerHTML = "Sexo: "+clases[claseJugador].imagenSexo[sexoJugador].sexo;
    document.getElementById("nombre-jugador").innerHTML = "Nombre: "+usuarios[indiceJugador].nombre;
    document.getElementById("personaje-jugador").innerHTML = clases[claseJugador].imagenSexo[sexoJugador].normal+clases[claseJugador].imagenSexo[sexoJugador].chibi;
    document.getElementById("habilidad-uno").innerHTML = clases[claseJugador].habilidades[0].imagen+clases[claseJugador].habilidades[0].nombre+clases[claseJugador].habilidades[0].descripcion;
    document.getElementById("habilidad-dos").innerHTML = clases[claseJugador].habilidades[1].imagen+clases[claseJugador].habilidades[1].nombre+clases[claseJugador].habilidades[1].descripcion;
    document.getElementById("items-jugador").innerHTML = clases[claseJugador].inventario[4].imagen+clases[claseJugador].inventario[0].imagen+clases[claseJugador].inventario[1].imagen+clases[claseJugador].inventario[2].imagen+clases[claseJugador].inventario[3].imagen;
    document.getElementById("atq-jugador").innerHTML = clases[claseJugador].atributos.ataque
    document.getElementById("dfz-jugador").innerHTML = clases[claseJugador].atributos.defenza
    document.getElementById("vit-jugador").innerHTML = clases[claseJugador].atributos.vitalidad
}
