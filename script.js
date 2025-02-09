function jugar(eleccionUsuario) {
    const opciones = ["piedra", "papel", "tijera"];
    const eleccionMaquina = opciones[Math.floor(Math.random() * 3)];

    let resultado = "";

    if (eleccionUsuario === eleccionMaquina) {
        resultado = "¡Empate! Ambos eligieron " + eleccionUsuario;
    } else if (
        (eleccionUsuario === "piedra" && eleccionMaquina === "tijera") ||
        (eleccionUsuario === "papel" && eleccionMaquina === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionMaquina === "papel")
    ) {
        resultado = "¡Ganaste! " + eleccionUsuario + " vence a " + eleccionMaquina;
    } else {
        resultado = "¡Perdiste! " + eleccionMaquina + " vence a " + eleccionUsuario;
    }

    document.getElementById("resultado").innerText = resultado;
}
