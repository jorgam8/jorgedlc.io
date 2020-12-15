let formulario = document.getElementById("registro")

formulario["enviar"].addEventListener("click", devolver, false);

function devolver() {
    sBoleta.value = boleta.value;
    sNombre.value = nombre.value;
    sMateria.value = materia.value;
    sGrupo.value = grupo.value;
    sFecha.value = fecha.value;
}

formulario["limpiar"].addEventListener("click", clean, false);

function clean() {
    sBoleta.value = "";
    sNombre.value = "";
    sMateria.value = "";
    sGrupo.value = "";
    sFecha.value = "";
    boleta.value = "";
    nombre.value = "";
    materia.value = "";
    grupo.value = "";
    fecha.value = "";
}