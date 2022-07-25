const modalidad = ["1-calle", "2-trail", "3-hibrido", "4-salir"]
const recomendacion = [
    {
        nombre:"A 42 km de la Felicidad",
        categoria: "Calle",
        autor: "José María Gallego", 
        link: "https://tienda.planetadelibros.com.ar/products/a-42-km-de-la-felicidad?gclid=CjwKCAjw_b6WBhAQEiwAp4HyICjGnHrMl9f79DKNSnDsYpetq3TDol35-jJGTO65eixHJNYP1PxIXRoCVRsQAvD_BwE"
    },
    {
        nombre:"Selección y preparación de velocistas: La experiencia cubana",
        categoria: "Calle",
        autor: "Liván Ramos", 
        link: "https://www.buscalibre.com.ar/libro-seleccion-y-preparacion-de-velocistas-la-experiencia-cubana/9783659058875/p/46678036?gclid=CjwKCAjw_b6WBhAQEiwAp4HyIO5lXoBnNB-EWCMP5U166NuBw9nYTbYLKoOABK2W-4bR7oqnuVx9ohoCm1UQAvD_BwE",
    },
    {
        nombre:"Correr, comer, vivir",
        categoria: "Trail",
        autor: "Scott Jurek", 
        link:"https://www.amazon.com/-/es/Scott-Jurek-ebook/dp/B00BFS7D56",

    },
    {
        nombre:"Otro",
        categoria: "Ninguna",
        autor: "Otro", 
        link:"Otro",

    }]


function calcularTiempoTrail (distancia,VAM){
    if (distancia <= 5){ 
        return  VAM * 1.1 * distancia
    }

    else if  (distancia >5 && distancia<=10 ){
        return  VAM * 1.3 * distancia
    }

    else if  (distancia >10 && distancia<=21 ){
        return  VAM * 1.4 * distancia
    }

    else if  (distancia >10 && distancia<=21 ){
        return  VAM * 1.5 * distancia
    }

    else if  (distancia >21 && distancia<=42 ){
        return  VAM * 1.6 * distancia
    }

    else {
        return  VAM * 1.8 * distancia
    }
}

function calcularTiempoCalle (distancia,VAM){
    if (distancia <= 5){ 
        return  VAM * 1.1 * distancia
    }

    else if  (distancia >5 && distancia<=10 ){
        return  VAM * 1.3 * distancia
    }

    else if  (distancia >10 && distancia<=21 ){
        return  VAM * 1.4 * distancia
    }

    else if  (distancia >10 && distancia<=21 ){
        return  VAM * 1.5 * distancia
    }

    else if  (distancia >21 && distancia<=42 ){
        return  VAM * 1.6 * distancia
    }

    else {
        return  VAM * 1.8 * distancia
    }
}

function calcularTiempoHibrido (distancia,VAM){
    if (distancia <= 5){ 
        return  VAM * 1.1 * distancia
    }

    else if  (distancia >5 && distancia<=10 ){
        return  VAM * 1.3 * distancia
    }

    else if  (distancia >10 && distancia<=21 ){
        return  VAM * 1.4 * distancia
    }

    else if  (distancia >10 && distancia<=21 ){
        return  VAM * 1.5 * distancia
    }

    else if  (distancia >21 && distancia<=42 ){
        return  VAM * 1.6 * distancia
    }

    else {
        return  VAM * 1.8 * distancia
    }
}

function categoria_recomendacion_calle (recomendacion){
    return recomendacion.categoria == "Calle"
}

function categoria_recomendacion_trail (recomendacion){
    return recomendacion.categoria == "Trail"
}

function categoria_recomendacion_hibrida (recomendacion){
    return recomendacion.categoria != "Ninguna"
}

let nombre= document.getElementById("nombre");
let botonSaludar = document.getElementById ("boton_saludar");
botonSaludar.addEventListener("click", function (){
    let saludo = document.createElement ("p");
    saludo.innerHTML = "<p> Bienvenido</p>";
    saludo_box.append(saludo, nombre.value);
    })

let botonCalcular = document.getElementById ("boton_calcular");

botonCalcular.addEventListener("click", function (){
let option = parseInt (document.getElementById("modalidad").value)
let distancia = parseInt(document.getElementById("distancia").value);
let VAM = parseInt(document.getElementById("VAM").value);
   
switch (option) {
        case 1: 
            console.log(distancia);
            console.log(VAM);

            let mensajeResultadoCalle = document.getElementById("Resultado");
            mensajeResultadoCalle.innerHTML = ("Vas a tardar ")+ calcularTiempoCalle (distancia,VAM) + (" minutos");

            let recomendacion_filter_calle = recomendacion.filter (categoria_recomendacion_calle);
            recomendacion_filter_calle.forEach (el => {
                let recomendacionFinal = document.getElementById ("Recomendacion");
                recomendacionFinal.innerHTML = ("Te recomendamos: ") + el.nombre + el.link;
            })
            break;

        case 2:
            let mensajeResultadoTrail= document.getElementById("Resultado");
            mensajeResultadoTrail.innerHTML = ("Vas a tardar ")+ calcularTiempoCalle (distancia,VAM) + (" minutos");

            let recomendacion_filter_trail = recomendacion.filter (categoria_recomendacion_trail);
            recomendacion_filter_trail.forEach (el => {
                let recomendacionFinal = document.getElementById ("Recomendacion");
                recomendacionFinal.innerHTML = ("Te recomendamos: ") + el.nombre + el.link;
            })
            
            
            break;

        case 3:            
            let mensajeResultadoHibrido = document.getElementById("Resultado");
            mensajeResultadoHibrido.innerHTML = ("Vas a tardar ")+ calcularTiempoCalle (distancia,VAM) + (" minutos");

            let recomendacion_filter_hibrida = recomendacion.filter (categoria_recomendacion_hibrida);
            recomendacion_filter_hibrida.forEach (el => {
                let recomendacionFinal = document.getElementById ("Recomendacion");
                recomendacionFinal.innerHTML = ("Te recomendamos: ") + el.nombre + el.link;
            })
            
            break; 

        default: 
            alert ("opcion invalida");
            break;
    }
});
