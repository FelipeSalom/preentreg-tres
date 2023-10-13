let tablonMisiones = document.querySelector("#misiones");
let jugador = {};

jugador =JSON.parse(sessionStorage.getItem('jugador'));

    fetch("misiones.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((post) => {
            let div = document.createElement("div")
            div.innerHTML = 
                '<a href="./index.html" class="ancla-misiones">'+
                    '<div class="misiones" type="button" onclick="guardarMapa('+post.id+')">'+
                        '<div class="min-dragon"><img src="'+post.imagenes.miniaturaDragon+'" class="mision-img"></div>'+
                        '<div class="min-mapa"><img src="'+post.imagenes.miniaturaEsenario+'" class="mision-img"></div>'+
                        '<div class="des-mision"><h2>'+post.nombre+'</h2><p>'+post.ubicacion+'</p></div>'+
                    '</div>'+
                '</a>'
            tablonMisiones.append(div);
        });
    });
    fetch("clases.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("imagenJugador").innerHTML = '<img src="'+data[jugador.clase].imagenSexo[jugador.sexo].chibi+'" class="img">';
    });

function guardarMapa(id){
    let i = JSON.stringify(id)
    sessionStorage.setItem('mapa', i);
}
function logout(){
    sessionStorage.clear();
}

