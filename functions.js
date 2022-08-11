// DECLARACIÓN DE ARRAYS

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
const array_sugerencias = [];

const formulas =
[
    {
        distance: [1,5],
        formula: 1.1
    },
    {
        distance: [6,10],
        formula: 1.3
    },
    {
        distance: [11,21],
        formula: 1.4
    },
    {
        distance: [22,42],
        formula: 1.6
    },
]
const getFormula = (distance) =>

{
    for (const element of formulas)
    if (distance >= element.distance[0] && distance <=element.distance[1])
    {
        return element.formula;
    }
}


// DECLARACIÓN DE FUNCIONES 

// FUNCIONES CALCULO 
function calcularTiempoCalle (distancia, VAM){
    let formula =getFormula(distancia);
    return VAM * formula * distancia;
}

function calcularTiempoTrail (distancia, VAM){
    let formula =getFormula(distancia);
    return VAM * formula * distancia*1.8;
}

function calcularTiempoHibrido (distancia, VAM){
    let formula =getFormula(distancia);
    return VAM * formula * distancia*1.4;
}


// FUNCIONES RECOMENDACIONES 

function categoria_recomendacion_calle (recomendacion){
    return recomendacion.categoria == "Calle"
}

function categoria_recomendacion_trail (recomendacion){
    return recomendacion.categoria == "Trail"
}

function categoria_recomendacion_hibrida (recomendacion){
    return recomendacion.categoria != "Ninguna"
}

// DECLARACION DE BOTONES

// BOTONES CALCULO 
let botonCalcular = document.getElementById ("boton_calcular");

botonCalcular.addEventListener("click", function (){
    let option = parseInt (document.getElementById("modalidad").value)
    let distancia = parseInt(document.getElementById("distancia").value);
    let VAM = parseInt(document.getElementById("VAM").value);
    
    switch (option) {
        case 1: 
            let mensajeResultadoCalle = document.getElementById("Resultado");
            mensajeResultadoCalle.innerHTML = ("Vas a tardar ")+ calcularTiempoCalle (distancia,VAM) + (" minutos");
            mensajeResultadoCalle.className =  "div_resultadoActive";            

            let recomendacion_filter_calle = recomendacion.filter (categoria_recomendacion_calle);
            recomendacion_filter_calle.forEach (el => {
                let recomendacionFinal = document.getElementById ("Recomendacion");
                recomendacionFinal.innerHTML = ("Te recomendamos: ") + el.nombre + el.link;
                recomendacionFinal.className =  "div_recomendacionActive";
            })

            break;

        case 2:
            let mensajeResultadoTrail= document.getElementById("Resultado");
            mensajeResultadoTrail.innerHTML = ("Vas a tardar ")+ calcularTiempoTrail (distancia,VAM) + (" minutos");
            mensajeResultadoTrail.className =  "div_resultadoActive";           

            let recomendacion_filter_trail = recomendacion.filter (categoria_recomendacion_trail);
            recomendacion_filter_trail.forEach (el => {
                let recomendacionFinal = document.getElementById ("Recomendacion");
                recomendacionFinal.innerHTML = ("Te recomendamos: ") + el.nombre + el.link;
                recomendacionFinal.className =  "div_recomendacionActive";
            })
            
            
            break;

        case 3:            
            let mensajeResultadoHibrido = document.getElementById("Resultado");
            mensajeResultadoHibrido.innerHTML = ("Vas a tardar ")+ calcularTiempoHibrido (distancia,VAM) + (" minutos");
            mensajeResultadoHibrido.className =  "div_resultadoActive";            


            let recomendacion_filter_hibrida = recomendacion.filter (categoria_recomendacion_hibrida);
            recomendacion_filter_hibrida.forEach (el => {
                let recomendacionFinal = document.getElementById ("Recomendacion");
                recomendacionFinal.innerHTML = ("Te recomendamos: ") + el.nombre + el.link;
                recomendacionFinal.className =  "div_recomendacionActive";
            })
            
            break; 

        default: 
            alert ("opcion invalida");
            break;
    }
});

// BOTONES SUGERENCIAS 

let botonHabilitarSugerencia = document.getElementById ("boton_habilitar_sugerencia");

botonHabilitarSugerencia.addEventListener("click", function (){
    let formularioSugerencia = document.getElementById("Sugerencia");
    formularioSugerencia.className =  "div_sugerenciaActive";
    botonHabilitarSugerencia.remove();
});

let botonEnviarSugerencia = document.getElementById("boton_enviar_sugerencia");

botonEnviarSugerencia.addEventListener("click", function(){
    let nombreSugerencia = document.getElementById ("sugerencia_nombre");
    let modalidadSugerencia = document.getElementById ("sugerencia_modalidad");
    let autorSugerencia = document.getElementById ("sugerencia_autor");
    let linkSugerencia = document.getElementById ("sugerencia_link");
    let sugerencias ={ "nombre": nombreSugerencia.value, 
                      "modalidad": modalidadSugerencia.value,
                      "autor": autorSugerencia.value,
                      "link": linkSugerencia.value,
                    }
                  
    nombreSugerencia.value ="";
    modalidadSugerencia.value="Calle";
    autorSugerencia.value= "";
    linkSugerencia.value= "";

    array_sugerencias.push(sugerencias);
    let sugerencias_JSON = JSON.stringify (array_sugerencias);
    localStorage.setItem("sugerencias", sugerencias_JSON );

    let formularioSugerenciasEnviadas = document.getElementById("Sugerencias_enviadas");
    formularioSugerenciasEnviadas.className =  "div_sugerencias_enviadasActive";

    let BotonSugerenciasEnviadas = document.getElementById("boton_ver_sugerencia");
    BotonSugerenciasEnviadas.className =  "div_sugerencias_enviadasActive";

    Toastify({
        text: "Muchas gracias! Recibimos tu sugerencia. Próximamente la revisaremos para agregarla a nuestra librería",
        duration: 3500,
        gravity: "bottom",
        style:{
            background: "#9FCC2E",
        },
    }).showToast();
});

let botonVerSugerencia = document.getElementById("boton_ver_sugerencia");
botonVerSugerencia.addEventListener("click", function(){
    let sugerenciasEnviadas = JSON.parse(localStorage.getItem("sugerencias"));
    let listaSugerenciasEnviadas = document.createElement("sugerenciasEnviadasLista");
    let html = '';
     for (const sugerencia of sugerenciasEnviadas)
     {
         html+=`
             ${sugerencia.nombre}
             ${sugerencia.modalidad}
             ${sugerencia.autor}
             ${sugerencia.link}


         `;
     }
    
    listaSugerenciasEnviadas.innerHTML = html;
    Sugerencias_enviadas.append(listaSugerenciasEnviadas);
   let BotonSugerenciasEnviadas = document.getElementById("boton_ver_sugerencia");
    BotonSugerenciasEnviadas.className =  "div_sugerencias_enviadas";
 }); 

 fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Gracias por usar nuestra web',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))