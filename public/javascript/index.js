

const pokemons = {

    pokemon1: {
    nombre: "CHARMANDER",
    life: 20,
    tipo: "fuego",        
    attack1: {
         EMBER: 5 }, 
    attack2:{
         SCRATCH: 3 },
    attack3: {
         GROWL: 0 }       
    },             
    
    pokemon2: {
        nombre: "SQUIRTLE",
        life: 20,
        tipo: "agua",
        attack1: {
            WATER_GUN: 5 }, 
       attack2:{
            TACKLE: 3 },
       attack3: {
            THAIL_WHIP: 0 }       
    },

    pokemon3: {
    nombre: "BULBASAUR",
    life: 20,
    tipo: "planta",        
    attack1: {
        VINE_WHIP: 5 }, 
   attack2:{
        TACKLE: 3 },
   attack3: {
        SOLARBEAM: 12 }       
   }
}
const arrayPokemons = [pokemons.pokemon1, pokemons.pokemon2, pokemons.pokemon3] // CREO ARRAY DE OBJETOS PARA PODER USAR EL METODO RANDOM

//                                                                  FILTROS PARA PROGRAMAR EL EFECTO DE LOS ATAQUES EN EL RIVAL

 const ataquesOfensivos = ["EMBER", "SCRATCH", "WATER_GUN", "TACKLE", "VINE_WHIP"]

                                                        // FUNCION PARA SELECCIONAR RIVAL RANDOM

 let random = Math.floor(Math.random()* arrayPokemons.length)
 let rivalRandom = pokemons.pokemon3 //arrayPokemons[random] //Es el objeto literal!
 console.log(rivalRandom)


                                                    //VARIABLE PARA PROGRAMAR SOLARBEAM
let ataquesDe2Turnos = false

let fallo //Variable para programar si falla o no el ataque

                                                                //  ELECCION DE POKEMON Y ASIGNACIÓN DE RIVAL (LOS OBJETOS LITERALES)

let pokemonElegido // Es el objeto literal

let nombrePokemonElegido //Nombre del objeto

let nombrePokemonRival // Nombre del objeto



let eleccionPokemon = prompt("escribe el numero del pokemon que quieres utilizar: 1)CHARMANDER 2)SQUIRTLE o 3)BULBASAUR")
    switch (eleccionPokemon)  {
        case "1":
           pokemonElegido = pokemons.pokemon1;
           nombrePokemonElegido = pokemonElegido.nombre
           nombrePokemonRival = rivalRandom.nombre
    alert(`Comienza la batalla!, tu pokemon es ${nombrePokemonElegido} tu rival es ${rivalRandom.nombre}`)
             
            break;
        case "2":
             pokemonElegido = pokemons.pokemon2
             nombrePokemonElegido = pokemonElegido.nombre
             nombrePokemonRival = rivalRandom.nombre
    alert(`Comienza la batalla!, tu pokemon es ${nombrePokemonElegido} tu rival es ${rivalRandom.nombre}`)
    
             break;
        case "3":
             pokemonElegido = pokemons.pokemon3
             nombrePokemonElegido = pokemonElegido.nombre
             nombrePokemonRival = rivalRandom.nombre
             alert(`Comienza la batalla!, tu pokemon es ${nombrePokemonElegido} tu rival es ${rivalRandom.nombre}`)
             
             break;    
        default:
            alert("El pokemon elegido no esta disponible")
            break;
    }

//                                                                 CUADRO DE SELECCION DE ATAQUES

let keysAttacks // aca atrapo a todos los nombres de los ataques para que salgan prolijos en el prompt

                                                                    // VIDA DE LOS POKEMONS!!!
let vida = pokemonElegido.life

let vidaRival = rivalRandom.life
                                    // VALORES DE LOS ATAQUES POKEMON ELEGIDO Y POKEMON RIVAL (ESTAS VARIABLES SOLO SE USAN PARA CALCULAR EL EFECTO DEL GROWL O THAIL WHIP y EFECTIVIDAD)

let attack1PokemonElegido = Object.values(pokemonElegido.attack1)
let attack2PokemonElegido = Object.values(pokemonElegido.attack2)
let attack3PokemonElegido = Object.values(pokemonElegido.attack3)

let attack1PokemonRival = Object.values(rivalRandom.attack1)
let attack2PokemonRival = Object.values(rivalRandom.attack2)
let attack3PokemonRival = Object.values(rivalRandom.attack3)

                                                    //FUNCION PARA CALCULAR EFECTIVIDAD (Solo se aplica al primer ataque que es del tipo fuego, agua o planta) Al SOLARBEAM no lo bajo por FIACA!!
function efectividad () {
    if (pokemonElegido.tipo == "fuego" && rivalRandom.tipo == "planta" || pokemonElegido.tipo == "agua" && rivalRandom.tipo == "fuego" ||  pokemonElegido.tipo == "planta" && rivalRandom.tipo == "agua"){
        attack1PokemonElegido = parseInt(attack1PokemonElegido) + (20 * parseInt(attack1PokemonElegido) / 100)
        attack1PokemonRival = parseInt(attack1PokemonRival) - (20 * parseInt(attack1PokemonRival) / 100)    
    } else if (pokemonElegido.tipo == "fuego" && rivalRandom.tipo == "agua" || pokemonElegido.tipo == "agua" && rivalRandom.tipo == "planta" || pokemonElegido.tipo == "planta" && rivalRandom.tipo == "fuego"){
        attack1PokemonElegido = parseInt(attack1PokemonElegido) - (20 * parseInt(attack1PokemonElegido) / 100)
        attack1PokemonRival = parseInt(attack1PokemonRival) + (20 * parseInt(attack1PokemonRival) / 100)        
    }
}


                                                // FUNCION PARA OBTENER SOLO EL NOMBRE DEL ATAQUE EN EL CUADRO DE SELECCION
function nombresDeAtaques() {
    let nombreAtaque1 = Object.keys(pokemonElegido.attack1)
    let nombreAtaque2 = Object.keys(pokemonElegido.attack2)
    let nombreAtaque3 = Object.keys(pokemonElegido.attack3)
    return keysAttacks = `1)${nombreAtaque1} 2)${nombreAtaque2} 3)${nombreAtaque3}`
}

nombresDeAtaques() 

let ataqueSeleccionado //ES EL OBJETO
let valorAtaqueSeleccionado // ES EL VALOR (NUM)
let ataqueRival = rivalRandom.attack1 // ataque predefinido (LO TENGO QUE CAAMBIAR)

let opcionesDeAtaque = prompt(`Tu pokemon es ${nombrePokemonElegido}, escriba el numero del ataque que desea efectuar: ${keysAttacks} ----LIFE:  ${vida}`)

//                                                                      SELECCIONAR ATAQUE DEL CUADRO

function seleccion() {
    if (opcionesDeAtaque == 1){
        ataqueSeleccionado = pokemonElegido.attack1
        valorAtaqueSeleccionado = attack1PokemonElegido
    } else if (opcionesDeAtaque == 2){
        ataqueSeleccionado = pokemonElegido.attack2
        valorAtaqueSeleccionado = attack2PokemonElegido
    }else if (opcionesDeAtaque == 3) {
        ataqueSeleccionado = pokemonElegido.attack3
        valorAtaqueSeleccionado = attack3PokemonElegido
    } else{
        alert("no eligio un numero valido")
        
    }    
}

efectividad()
seleccion()

let nombreAtaqueSeleccionado = Object.keys(ataqueSeleccionado) // variable del nombre del ataque para que salga en el alert
let nombreAtaqueRival = Object.keys(ataqueRival)



                                  

//                                              FUNCION PARA CALCULAR EL EFECTO DE GROWL Y THAIL WHIP

function ataqueNoOfensivo() {
    if (nombreAtaqueSeleccionado == "GROWL"){
        attack1PokemonRival = attack1PokemonRival - (20 * attack1PokemonRival / 100)
        attack2PokemonRival = attack2PokemonRival - (20 * attack2PokemonRival / 100)
        attack3PokemonRival = attack3PokemonRival - (20 * attack3PokemonRival / 100)
        alert(`El poder de ataque de ${nombrePokemonRival} ha disminuido!`)    
    } else if (nombreAtaqueSeleccionado == "THAIL_WHIP") {
        attack1PokemonElegido = parseInt(attack1PokemonElegido) + (20 * parseInt(attack1PokemonElegido) / 100)
        attack2PokemonElegido = parseInt(attack2PokemonElegido) + (20 * parseInt(attack2PokemonElegido) / 100)
        attack3PokemonElegido = parseInt(attack3PokemonElegido) + (20 * parseInt(attack3PokemonElegido) / 100)
        alert(`El poder defensivo de ${nombrePokemonRival} ha disminuido!`)   
    }
}
//                                                                  FUNCIONES PARA CALCULAR SI EL ATAQUE ES SUPER EFECTIVO O NO
function esEfectivo() {  
        if (ataqueSeleccionado == pokemonElegido.attack1 && (pokemonElegido.tipo == "fuego" && rivalRandom.tipo == "planta" || pokemonElegido.tipo == "agua" && rivalRandom.tipo == "fuego" ||  pokemonElegido.tipo == "planta" && rivalRandom.tipo == "agua") ){    
        vidaRival = vidaRival - valorAtaqueSeleccionado
        alert(`Es super efectivo! a ${nombrePokemonRival} le quedan ${vidaRival} puntos de vida`)
    }
}

function noEsEfectivo(){
    if ( (pokemonElegido.tipo == "fuego" && rivalRandom.tipo == "agua" || pokemonElegido.tipo == "agua" && rivalRandom.tipo == "planta" || pokemonElegido.tipo == "planta" && rivalRandom.tipo == "fuego") && ataqueSeleccionado == pokemonElegido.attack1){
        vidaRival = vidaRival - valorAtaqueSeleccionado
        alert(`No es muy efectivo! a ${nombrePokemonRival} le quedan ${vidaRival} puntos de vida`)
    }
}

function ataqueErrado(){
    fallo = 1 //Math.floor(Math.random()* 10)
    fallo > 4 ? fallo = true : fallo = false
    return console.log(fallo)

}


function batalla () {
    alert(`${nombrePokemonElegido} uso ${nombreAtaqueSeleccionado}`) //Enunciado del ataque
    debugger
    if (nombreAtaqueSeleccionado == "SOLARBEAM"){
        alert(`${nombrePokemonElegido} esta cargando poder`)
        ataquesDe2Turnos = true // Cambio a true para programar el ataque en el proximo turno
    }   

    let comprobacion = ataquesOfensivos.find(elem => elem == nombreAtaqueSeleccionado)
    if (comprobacion != undefined){
        ataqueErrado()
        if (fallo == true){
            esEfectivo()
            noEsEfectivo()
        } else {
            alert(`${nombrePokemonElegido} fallo el ataque!`)
        }
    } else {
        ataqueNoOfensivo()        
    }              
}

            //PRIMERA ESTRUCTURA DE LA FUNCION BATALLA
    // ataquesOfensivos.forEach(elem =>{
        
    //     if (elem == nombreAtaqueSeleccionado){
    //         ataqueErrado() //Aca obtengo el valor de la variable fallo (true o false)                               
    //     }
    //     if (fallo == true){
    //         esEfectivo()
    //         noEsEfectivo()
    //     } else {
    //         alert(`${pokemonElegido} fallo el ataque!`)
    //     }
       
    // })    
    // ataqueNoOfensivo()            


batalla()





                                                                    

