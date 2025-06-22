const canciones = [
{ nombre: "Answer: Love Myself", archivo: "answer.mp3" },
{ nombre: "Best of Me", archivo: "best.mp3" },
{ nombre: "Boy In Luv", archivo: "boy.mp3" },
{ nombre: "Butterfly", archivo: "buterfly.mp3" },
{ nombre: "Dreamers", archivo: "dreamers.mp3" },
{ nombre: "EPILOGUE : Young Forever", archivo: "young.mp3" },
{ nombre: "Life Goes On", archivo: "life.mp3" },
{ nombre: "Trivia 轉 : Seesaw", archivo: "trivia.mp3" },
{ nombre: "We are Bulletproof : The Eternal", archivo: "weare.mp3" },
{ nombre: "00:00 (Zero O’Clock)", archivo: "zero.mp3" }

];

let indiceActual = 0;
let audio = new Audio();
let botones = [];

const lista = document.getElementById("listaCanciones");
const btnSiguiente = document.getElementById("btnSiguienteGlobal");

// Crear los elementos de la lista
canciones.forEach((cancion, index) => {
const div = document.createElement("div");
div.className = "cancion";

const contenedorTexto = document.createElement("span");
contenedorTexto.className = "info";

const titulo = document.createElement("span");
titulo.className = "titulo";
titulo.textContent = cancion.nombre;

contenedorTexto.appendChild(titulo);

const btn = document.createElement("button");
btn.textContent = "▶ Reproducir";
btn.dataset.index = index;

  // 👉 Primero el texto, luego el botón
div.appendChild(contenedorTexto); 
div.appendChild(btn);             

lista.appendChild(div);
botones.push(btn);

btn.addEventListener("click", () => {
    if (indiceActual === index && !audio.paused) {
audio.pause();
btn.textContent = "▶ Reproducir";
    } else {
        reproducirCancion(index);
    }
    });
});

function reproducirCancion(index) {
audio.pause();
indiceActual = index;
audio = new Audio(canciones[indiceActual].archivo);
audio.play();

botones.forEach((b, i) => {
    b.textContent = i === index ? "⏸ Pausar" : "▶ Reproducir";
});

audio.onended = () => {
    siguienteCancion();
};
}

function siguienteCancion() {
let siguiente = (indiceActual + 1) % canciones.length;
reproducirCancion(siguiente);
}

btnSiguiente.addEventListener("click", () => {
siguienteCancion();
});

