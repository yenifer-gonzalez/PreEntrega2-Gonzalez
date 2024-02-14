const preguntas = [
  {
    pregunta: "¿Cuál es la capital de México?",
    opciones: ["Ciudad de México", "Guadalajara", "Monterrey", "Montevideo"],
    respuesta: "Ciudad de México",
    dificultad: "fácil",
  },
  {
    pregunta: "¿Cuántos continentes hay en el mundo?",
    opciones: ["5", "6", "7", "8"],
    respuesta: "7",
    dificultad: "fácil",
  },
  {
    pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?",
    opciones: [
      "Lope de Vega",
      "Miguel de Unamuno",
      "Cervantes",
      "Garcilaso de la Vega",
    ],
    respuesta: "Cervantes",
    dificultad: "fácil",
  },
  {
    pregunta: "¿Qué río es el más largo del mundo?",
    opciones: ["Nilo", "Amazonas", "Misispi", "Yangtsé"],
    respuesta: "Amazonas",
    dificultad: "media",
  },
  {
    pregunta: "¿Cuál es la moneda oficial de Japón?",
    opciones: ["Yuan", "Won", "Dólar", "Yen"],
    respuesta: "Yen",
    dificultad: "media",
  },
];

let puntuacion = 0;

function mostrarPregunta(item) {
  let preguntasTexto = "";
  item.opciones.forEach((opcion, index) => {
    preguntasTexto += `${index + 1}. ${opcion}\n`;
  });
  preguntasTexto += "0. Salir del juego";

  const respuestaUsuario = prompt(
    `${item.pregunta}\n\n${preguntasTexto}\nIntroduce el número de tu respuesta:`
  );

  if (respuestaUsuario === "0") {
    return "salir";
  }

  if (respuestaUsuario > 0 && respuestaUsuario <= item.opciones.length) {
    return item.opciones[respuestaUsuario - 1];
  } else {
    alert("Por favor, seleccione un número entre 1 y 4, o 0 para salir.");
    return mostrarPregunta(item);
  }
}

function play() {
  for (let item of preguntas) {
    let respuesta = mostrarPregunta(item);
    if (respuesta === "salir") {
      alert("Has elegido salir del juego.");
      return;
    }
    if (respuesta.toLowerCase() === item.respuesta.toLowerCase()) {
      alert("¡Correcto!");
      switch (item.dificultad) {
        case "fácil":
          puntuacion += 1;
          break;
        case "media":
          puntuacion += 2;
          break;
        default:
          puntuacion += 0;
      }
    } else {
      alert(`Incorrecto. La respuesta correcta era: ${item.respuesta}`);
    }
  }
  alert(
    `Juego terminado. Tu puntuación es: ${puntuacion} de ${
      preguntas.length * 2
    }`
  );
}

export default function playQuiz() {
  while (true) {
    let jugarDeNuevo = prompt("¿Quieres jugar al Quiz Game? (si/no)");
    if (jugarDeNuevo?.toLowerCase() === "si") {
      play();
      puntuacion = 0;
    } else if (jugarDeNuevo?.toLowerCase() === "no") {
      alert("Gracias por jugar.");
      break;
    } else {
      alert("Por favor, responde 'si' o 'no'.");
    }
  }
}
