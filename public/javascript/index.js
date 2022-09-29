

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
 let rivalRandom = arrayPokemons[random] //Es el objeto literal!
 console.log(rivalRandom)


                                                    //VARIABLE PARA PROGRAMAR SOLARBEAM EN POKEMON ELEGIDO Y EN RIVAL
let ataquesDe2Turnos = false
let ataquesDe2TurnosRival = false

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
let ataqueRival
let valorAtaqueSeleccionadoRival
let nombreAtaqueSeleccionado
let nombreAtaqueRival

let opcionesDeAtaque = prompt(`Tu pokemon es ${nombrePokemonElegido}, escriba el numero del ataque que desea efectuar: ${keysAttacks} ----LIFE:  ${vida}`)

//                                                                      SELECCIONAR ATAQUE DEL CUADRO

function seleccion() {
    if (opcionesDeAtaque == 1){
        ataqueSeleccionado = pokemonElegido.attack1
        valorAtaqueSeleccionado = attack1PokemonElegido
        nombreAtaqueSeleccionado = Object.keys(ataqueSeleccionado)
    } else if (opcionesDeAtaque == 2){
        ataqueSeleccionado = pokemonElegido.attack2
        valorAtaqueSeleccionado = attack2PokemonElegido
        nombreAtaqueSeleccionado = Object.keys(ataqueSeleccionado)
    }else if (opcionesDeAtaque == 3) {
        ataqueSeleccionado = pokemonElegido.attack3
        valorAtaqueSeleccionado = attack3PokemonElegido
        nombreAtaqueSeleccionado = Object.keys(ataqueSeleccionado)
    } else{
        alert("no eligio un numero valido")
        opcionesDeAtaque = prompt(`Tu pokemon es ${nombrePokemonElegido}, escriba el numero del ataque que desea efectuar: ${keysAttacks} ----LIFE:  ${vida}`)
        seleccion()
        
    }    
}

efectividad() //Se modifican los valores de los ataques luego de que se selecciona el pokemon y el rival!
seleccion()


                                  

//                                              FUNCION PARA CALCULAR EL EFECTO DE GROWL Y THAIL WHIP

function ataqueNoOfensivo() {
    if (nombreAtaqueSeleccionado == "GROWL"){
        attack1PokemonRival = attack1PokemonRival - (20 * attack1PokemonRival / 100)
        attack2PokemonRival = attack2PokemonRival - (20 * attack2PokemonRival / 100)
        attack3PokemonRival = attack3PokemonRival - (20 * attack3PokemonRival / 100)
        alert(`El poder de ataque del ${nombrePokemonRival} rival ha disminuido!`)    
    } else if (nombreAtaqueSeleccionado == "THAIL_WHIP") {
        attack1PokemonElegido = parseInt(attack1PokemonElegido) + (20 * parseInt(attack1PokemonElegido) / 100)
        attack2PokemonElegido = parseInt(attack2PokemonElegido) + (20 * parseInt(attack2PokemonElegido) / 100)
        attack3PokemonElegido = parseInt(attack3PokemonElegido) + (20 * parseInt(attack3PokemonElegido) / 100)
        alert(`El poder defensivo del ${nombrePokemonRival} rival ha disminuido!`)   
    }
}
//                                                                  FUNCIONES PARA CALCULAR SI EL ATAQUE ES SUPER EFECTIVO O NO
function comprobarSiElAtaqueEsEfectivo() {  
        if (ataqueSeleccionado == pokemonElegido.attack1 && (pokemonElegido.tipo == "fuego" && rivalRandom.tipo == "planta" || pokemonElegido.tipo == "agua" && rivalRandom.tipo == "fuego" ||  pokemonElegido.tipo == "planta" && rivalRandom.tipo == "agua") ){    
            vidaRival = vidaRival - valorAtaqueSeleccionado
            alert(`Es super efectivo! al ${nombrePokemonRival} rival le quedan ${vidaRival} puntos de vida`)
        }else if ((pokemonElegido.tipo == "fuego" && rivalRandom.tipo == "agua" || pokemonElegido.tipo == "agua" && rivalRandom.tipo == "planta" || pokemonElegido.tipo == "planta" && rivalRandom.tipo == "fuego") && ataqueSeleccionado == pokemonElegido.attack1){
            vidaRival = vidaRival - valorAtaqueSeleccionado
            alert(`No es muy efectivo! al ${nombrePokemonRival} rival le quedan ${vidaRival} puntos de vida`)
        }else {
            vidaRival = vidaRival - valorAtaqueSeleccionado
            alert(`Al ${nombrePokemonRival} rival le quedan ${vidaRival} puntos de vida`) // mismo tipo de pokemon (Sin efectividad)
        }
    }

//                                                      FUNCION PARA DETERMINAR SI EL ATAQUE FALLA O NO
function ataqueErrado(){
    fallo = Math.floor(Math.random()* 10)
    fallo > 1 ? fallo = true : fallo = false // le pongo 1 para que no falle casi nunca, despues lo modifico!!
}


function primerTurno () {
    // if (ataquesDe2Turnos == true){
    //     alert(`${nombrePokemonElegido} uso SOLARBEAM`)
    //     ataquesDe2Turnos = false
    // }

    alert(`${nombrePokemonElegido} uso ${nombreAtaqueSeleccionado}`) //Enunciado del ataque
    if (nombreAtaqueSeleccionado == "SOLARBEAM"){
        alert(`${nombrePokemonElegido} esta cargando poder`)
        ataquesDe2Turnos = true // Cambio a true para programar el ataque en el proximo turno
    }   

    let comprobacion = ataquesOfensivos.find(elem => elem == nombreAtaqueSeleccionado)
    if (comprobacion != undefined){
        ataqueErrado()
        if (fallo == true){
            comprobarSiElAtaqueEsEfectivo()
        } else {
            alert(`${nombrePokemonElegido} fallo el ataque!`)
        }
    } else {
        ataqueErrado()
        if (fallo == true){
            ataqueNoOfensivo() 
        } else {
            alert(`${nombrePokemonElegido} fallo el ataque!`)
        }
               
    }              
}

primerTurno()

//                                          ACA ARRANCO A PROGRAMAR EL PRIMER ATAQUE DEL RIVAL

function comprobarSiElAtaqueEsEfectivoRival() {  
    if (ataqueRival == rivalRandom.attack1 && (rivalRandom.tipo == "fuego" && pokemonElegido.tipo == "planta" || rivalRandom.tipo == "agua" && pokemonElegido.tipo == "fuego" ||  rivalRandom.tipo == "planta" && pokemonElegido.tipo == "agua") ){    
        vida = vida - valorAtaqueSeleccionadoRival
        alert(`Es super efectivo! a ${nombrePokemonElegido} le quedan ${vida} puntos de vida`)
    }else if ((rivalRandom.tipo == "fuego" && pokemonElegido.tipo == "agua" || rivalRandom.tipo == "agua" && pokemonElegido.tipo == "planta" || rivalRandom.tipo == "planta" && pokemonElegido.tipo == "fuego") && ataqueRival == rivalRandom.attack1){
        vida = vida - valorAtaqueSeleccionadoRival
        alert(`No es muy efectivo! a ${nombrePokemonElegido} le quedan ${vida} puntos de vida`)
    }else {
        vida = vida - valorAtaqueSeleccionadoRival
        alert(`A ${nombrePokemonElegido} le quedan ${vida} puntos de vida`) // mismo tipo de pokemon (Sin efectividad)
    }
}

function ataqueNoOfensivoRival() {
    if (nombreAtaqueRival == "GROWL"){
        attack1PokemonElegido = attack1PokemonElegido - (20 * attack1PokemonElegido / 100)
        attack2PokemonElegido = attack2PokemonElegido - (20 * attack2PokemonElegido / 100)
        attack3PokemonElegido = attack3PokemonElegido - (20 * attack3PokemonElegido / 100)
        alert(`El poder de ataque de ${nombrePokemonElegido} ha disminuido!`)    
    } else if (nombreAtaqueRival == "THAIL_WHIP") {
        attack1PokemonRival = parseInt(attack1PokemonRival) + (20 * parseInt(attack1PokemonRival) / 100)
        attack2PokemonRival = parseInt(attack2PokemonRival) + (20 * parseInt(attack2PokemonRival) / 100)
        attack3PokemonRival = parseInt(attack3PokemonRival) + (20 * parseInt(attack3PokemonRival) / 100)
        alert(`El poder defensivo de ${nombrePokemonElegido} ha disminuido!`)   
    }
}

function seleccionAtaqueRival() {
    debugger
    ataqueRival = Math.floor(Math.random() * 15)
    if (ataqueRival <= 5){
       ataqueRival = rivalRandom.attack1
       valorAtaqueSeleccionadoRival = attack1PokemonRival
       nombreAtaqueRival = Object.keys(ataqueRival)
    } else if (ataqueRival > 5 && ataqueRival <= 10 ){
       ataqueRival = rivalRandom.attack2
       valorAtaqueSeleccionadoRival = attack2PokemonRival
       nombreAtaqueRival = Object.keys(ataqueRival)
    } else {
       ataqueRival = rivalRandom.attack3
       valorAtaqueSeleccionadoRival = attack3PokemonRival
       nombreAtaqueRival = Object.keys(ataqueRival)
    }    
}

seleccionAtaqueRival()


function segundoTurno(){
    alert (`El ${nombrePokemonRival} rival uso ${nombreAtaqueRival}`)

    if (nombreAtaqueRival == "SOLARBEAM"){
        alert(`El ${nombrePokemonRival} rival esta cargando poder`)
        ataquesDe2TurnosRival = true // Cambio a true para programar el ataque en el proximo turno
    }
    
    let comprobacion = ataquesOfensivos.find(elem => elem == nombreAtaqueRival)
    if (comprobacion != undefined){
        ataqueErrado()
        if (fallo == true){
            comprobarSiElAtaqueEsEfectivoRival()
        } else {
            alert(`El ${nombrePokemonRival} rival fallo el ataque!`)
        }
    } else {
        ataqueErrado()
        if (fallo == true){
            ataqueNoOfensivoRival() 
        } else {
            alert(`El ${nombrePokemonRival} rival fallo el ataque!`)
        }               
    }
}

segundoTurno()

//                  UNA VEZ FINALIZADOS LOS DOS PRIMEROS TURNOS SE PROGRAMA QUE SE REPITAN HASTA QUE LA VIDA DE ALGUNO DE LOS 2 POKEMONES LLEGUE A 0

function batalla(){
    opcionesDeAtaque = prompt(`Tu pokemon es ${nombrePokemonElegido}, escriba el numero del ataque que desea efectuar: ${keysAttacks} ----LIFE:  ${vida}`)
    seleccion()
    primerTurno()
    if (vidaRival > 0){ //Si con el ataque de pokemonElegido mato al rival ya no dejo que programe otro ataque
        seleccionAtaqueRival()
        segundoTurno()
    } else{
        
    }
    
}



while (vida > 0 && vidaRival > 0){
    batalla()
}
//                      ESTE CODIGO SOLO SE EJECUTA SI ALGUNO DE LOS 2 POKEMONS QUEDA CON 0 DE VIDA (COMUNICA QUIEN GANO LA BATALLA)
if (vida > 0){
    alert(`El ${nombrePokemonRival} rival cayó rendido al suelo, felicitaciones! ${nombrePokemonElegido} ha ganado la batalla`)
} else {
    alert(`${nombrePokemonElegido} cayó rendido al suelo, has perdido la batalla`)
}



                                                                    

