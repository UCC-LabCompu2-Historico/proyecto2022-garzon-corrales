
function choqueRectangular(obj1,obj2){
    return obj1.pos.x + obj1.width/2 >= obj2.pos.x - obj2.width/2 &&
        obj1.pos.x - obj1.width/2 <= obj2.width/2 + obj2.pos.x &&
        obj1.pos.y + obj1.height/2 >= obj2.pos.y - obj2.height/2 &&
        obj1.pos.y - obj1.height/2 <= obj2.height/2 + obj2.pos.y;
}

let Controller = function(){
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    //adding client test

    window.addEventListener('keydown', function(e){
        switch(e.code){
            case "ArrowUp":
            case "KeyW":
                this.up = true;
                break;
            case "ArrowLeft":
            case "KeyA":
                this.left = true;
                break;
            case "ArrowDown":
            case "KeyS":
                this.down = true;
                break;
            case "ArrowRight":
            case "KeyD":
                this.right = true;
                break;
            case "Space":
        }
    }.bind(this))

    window.addEventListener('keyup', function(e){
        switch(e.code){
            case "ArrowUp":
            case "KeyW":
                this.up = false;
                break;
            case "ArrowLeft":
            case "KeyA":
                this.left = false;
                break;
            case "ArrowDown":
            case "KeyS":
                this.down = false;
                break;
            case "ArrowRight":
            case "KeyD":
                this.right = false;
                break;
            case "Space":
                this.jump = false;
                break;
            case "Ctrl":
            case "KeyX":
        }
    }.bind(this))
}



let auto= {
    height:240,
    width:100,
    pos:{x:270,y:465},
    imagen: new Image(),
    controller: new Controller(),
    actualizar: function () {
        var a=1;
        if (this.controller.up && (this.pos.y!=-30)) {
            this.pos.y -= a;
        } else if (this.controller.down && (this.pos.y!=500)) {
            this.pos.y += a;
        }

        if (this.controller.right && (this.pos.x!=540)) {
            this.pos.x += a;
        } else if (this.controller.left && (this.pos.x!=-30)) {
            this.pos.x -= a;
        }

    },

    dibujar : function () {
        var canvas = document.getElementById(elementid = "canvas");
        var ctx = canvas.getContext("2d");
        this.imagen.src = "imagenes/auto13.png";
        ctx.drawImage(this.imagen, this.pos.x,this.pos.y);

    },
}

let obstaculo1={
    height:230,
    width:100,
    pos:{x:50,y:-269},
    vehiculo: new Image(),


    dibujar: function (){
        var canvas = document.getElementById(elementid = "canvas");
        var ctx = canvas.getContext("2d");
        this.vehiculo.src="imagenes/policia1.png";
        ctx.drawImage(this.vehiculo, this.pos.x,this.pos.y);
        var al;
        al=Math.floor(Math.random()*650);


        this.pos.y+=1;
        if(this.pos.y>800){

            if(al>250){
                this.pos.y=-al;
            }
            else{
                this.pos.y=-678;
            }
        }
    },

}



let obstaculo2={
    height:230,
    width:100,
    pos:{x:270,y:-841},
    vehiculo: new Image(),



    dibujar: function (){
        var canvas = document.getElementById(elementid = "canvas");
        var ctx = canvas.getContext("2d");
        this.vehiculo.src="imagenes/camioneta1.png";
        ctx.drawImage(this.vehiculo, this.pos.x,this.pos.y);
        var al;
        al=Math.floor(Math.random()*650);


        this.pos.y+=1;
        if(this.pos.y>800){
            if(al>250){
                this.pos.y=-al;
            }
            else{
                this.pos.y=-471;
            }
        }
    },

}
let obstaculo3={
    height:230,
    width:100,
    pos:{x:475,y:-1350},
    vehiculo: new Image(),


    dibujar: function (){
        var canvas = document.getElementById(elementid = "canvas");
        var ctx = canvas.getContext("2d");
        this.vehiculo.src="imagenes/auto23.png";
        ctx.drawImage(this.vehiculo, this.pos.x,this.pos.y);
        var al;
        al=Math.floor(Math.random()*650);


        this.pos.y+=1;
        if(this.pos.y>800){
            if(al>250){
                this.pos.y=-al;
            }
            else{
                this.pos.y=-978;
            }
        }
    },

}




function inicio(){
    var canvas = document.getElementById(elementid = "canvas");

    canvas.width=canvas.width;
    auto.actualizar();
    auto.dibujar();
    obstaculo1.dibujar();
    obstaculo2.dibujar();
    obstaculo3.dibujar();
    if(choqueRectangular(auto, obstaculo1) || choqueRectangular(auto,obstaculo2) || choqueRectangular(auto,obstaculo3)){
        window.open("game_over.html", "_self");
    }
}











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
