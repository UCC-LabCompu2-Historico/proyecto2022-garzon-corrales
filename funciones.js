/**
 * Se envia el formulario obtenido para utilizar la informacion (nombre del jugador, dinosaurio seleccionado y ).
 * @method pasarFormulario
 */
function pasarformulario(){
    var nombre,auto,urlComp,pasar;
    nombre = document.getElementById("nombre").value;
    pasar=1;
    if(obtenerRadioButton()==undefined){
        alert("Seleccione un auto");
        pasar=0
    }
    else{
        auto= document.getElementsByName("auto")[obtenerRadioButton()].value;
    }

    if(nombre==""){
        alert("Ingrese un nombre valido");
        pasar=0;
    }
    if(nombre.length>10){
        alert("Nombre demasiado grande");
        pasar=0;
    }
    if(pasar==1) {
        urlComp = "PantallaJuego.html#" + nombre + "#" + auto;
        window.open(urlComp, "_self");
    }

}
/**
 * A partir de esta funcion se logra saber que radio button fue seleccionado.
 * @method obtenerRadioButton
 * @return {number} - Devuelve la posicion del arreglo de radio buttons que fue seleccionado
 */
function obtenerRadioButton()
{
    var auto = document.getElementsByName("auto");
    for(i=0;i<3;i++){
        if (auto[i].checked) return i;
    }
}

/**
 * Esta funcion sirve para obtener la informacion pasada a travez de la url
 * @method obtenerFormulario
 */
function obtenerFormulario() {
    var urlComp, nombre, auto;

    urlComp = window.location.href.split('/')[4];
    nombre= window.location.href.split('#')[1];
    auto= window.location.href.split('#')[2];

    document.getElementById("nombre_jugador").innerHTML = nombre;
}

/**
 * Se obtiene el nombre del jugador.
 * @method obtenerNombre
 * @return {string} nombre - devuelve el nombre del jugador
 */
function obtenerNombre() {
    var urlComp, nombre;

    urlComp = window.location.href.split('/')[4];
    nombre= window.location.href.split('#')[1];
    return nombre;
}

/**
 * Se obtiene la imagen del dinosaurio seleccionado.
 * @method obtenerDino
 * @return {string} dino - se retorna el dinosaurio que fue seleccionado
 */
function obtenerauto() {
    var urlComp, auto;

    urlComp = window.location.href.split('/')[4];
    auto= window.location.href.split('#')[2];
    return auto;
}
