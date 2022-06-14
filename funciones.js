/**
 * Se envia el formulario obtenido para utilizar la informacion (nombre del jugador, auto seleccionado).
 * @method pasarFormulario
 */
function pasarformulario(){
    var nombre,auto,urlComp,pasar;
    nombre = document.getElementById("input_nombre").value;
    pasar=1;
    if(obtenerRadioButton()==undefined){
        alert("Alguna vez viste la calle sin autos? Bueno yo tampoco, elegi uno. Das mas asco que chuparle el dedo a un mecanico");
        pasar=0
    }
    else{
        auto= document.getElementsByName("vehiculo")[obtenerRadioButton()].value;
    }

    if(nombre==""){
        alert("No tener nombre no es muy RAPIDO Y FURIOSO que digamos. ¿Que paso, tus papis no te pusieron nombre o no te enseñaron a leer?");
        pasar=0;
    }
    if(nombre.length>10){
        alert("Nombre demasiado largo, not what she said. Proba con uno mas corto, esto no es un libro salame.");
        pasar=0;
    }
    if(pasar==1) {
        urlComp = "PantallaJuego.html#" + nombre + "-" + auto.value;
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
    var auto = document.getElementsByName("vehiculo");
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
 * Se obtiene la imagen del auto seleccionado.
 * @method obtenerAuto
 * @return {string} auto - se retorna el auto que fue seleccionado
 */
function obtenerauto() {
    var urlComp, auto;

    urlComp = window.location.href.split('/')[4];
    auto= window.location.href.split('#')[2];
    return auto;
}
