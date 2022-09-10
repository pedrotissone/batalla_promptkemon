

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
         GROWL: 3 }       
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
            THAIL_WHIP: 3 }       
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
//                                              FILTROS PARA PROGRAMAR EL EFECTO DE LOS ATAQUES EN EL RIVAL

 const ataquesOfensivos = ["EMBER", "SCRATCH", "WATER_GUN", "TACKLE", "VINE_WHIP"]

 const ataquesBajanDefensa = ["THAIL_WHIP"]

 const ataquesBajanAtaque = ["GROWL"]


                                                                //  ELECCION DE POKEMON Y ASIGNACIÓN DE RIVAL (LOS OBJETOS LITERALES)

let pokemonElegido // Es el objeto literal

let pokemonRival // Es el objeto literal

let nombrePokemonElegido //Nombre del objeto

let nombrePokemonRival // Nombre del objeto

function seleccionarRival() {
    if (pokemonElegido == pokemons.pokemon1) {
        pokemonRival = pokemons.pokemon2
        nombrePokemonRival = pokemonRival
        alert(`Comienza la batalla!, tu pokemon es ${nombrePokemonElegido} tu rival es ${pokemonRival.nombre}`)
        
    }else if (pokemonElegido == pokemons.pokemon2) {
        pokemonRival = pokemons.pokemon3
        nombrePokemonRival = pokemonRival
        alert(`Comienza la batalla!, tu pokemon es ${nombrePokemonElegido} tu rival es ${pokemonRival.nombre}`)       
    }else{ 
        pokemonRival = pokemons.pokemon1
        nombrePokemonRival = pokemonRival
        alert(`Comienza la batalla!, tu pokemon es ${nombrePokemonElegido} tu rival es ${pokemonRival.nombre}`)
    }    
}


let eleccionPokemon = prompt("escribe el numero del pokemon que quieres utilizar: 1)CHARMANDER 2)SQUIRTLE o 3)BULBASAUR")
    switch (eleccionPokemon)  {
        case "1":
           pokemonElegido = pokemons.pokemon1;
           nombrePokemonElegido = pokemonElegido.nombre
           seleccionarRival()           
            break;
        case "2":
             pokemonElegido = pokemons.pokemon2
             nombrePokemonElegido = pokemonElegido.nombre
             seleccionarRival()
             break;
        case "3":
             pokemonElegido = pokemons.pokemon3
             nombrePokemonElegido = pokemonElegido.nombre
             seleccionarRival()
             break;    
        default:
            alert("El pokemon elegido no esta disponible")
            break;
    }

//                                                                 CUADRO DE SELECCION DE ATAQUES

let keysAttacks // para que aparezcan los ataques prolijos en el prompt

                                                                    // VIDA DE LOS POKEMONS!!!
let vida = pokemonElegido.life

let vidaRival = pokemonRival.life
                                    // VALORES DE LOS ATAQUES POKEMON ELEGIDO Y POKEMON RIVAL (ESTAS VARIABLES SOLO SE USAN PARA CALCULAR EL EFECTO DEL GROWL O THAIL WHIP)

let attack1PokemonElegido = Object.values(pokemonElegido.attack1)
let attack2PokemonElegido = Object.values(pokemonElegido.attack2)
let attack3PokemonElegido = Object.values(pokemonElegido.attack3)

let attack1PokemonRival = Object.values(pokemonRival.attack1)
let attack2PokemonRival = Object.values(pokemonRival.attack2)
let attack3PokemonRival = Object.values(pokemonRival.attack3)

                                                // FUNCION PARA OBTENER SOLO EL NOMBRE DEL ATAQUE EN EL CUADRO DE SELECCION
function nombresDeAtaques() {
    let nombreAtaque1 = Object.keys(pokemonElegido.attack1)
    let nombreAtaque2 = Object.keys(pokemonElegido.attack2)
    let nombreAtaque3 = Object.keys(pokemonElegido.attack3)
    return keysAttacks = `1)${nombreAtaque1} 2)${nombreAtaque2} 3)${nombreAtaque3}`
}

nombresDeAtaques() 

let ataqueSeleccionado //ataque del pokemon elegido (object)
let ataqueRival = pokemonRival.attack1 //primer ataque rival definido (object)

let opcionesDeAtaque = prompt(`Tu pokemon es ${nombrePokemonElegido}, escriba el numero del ataque que desea efectuar: ${keysAttacks} ----LIFE:  ${vida}`)

//                                                                      SELECCIONAR ATAQUE DEL CUADRO

function seleccion() {
    if (opcionesDeAtaque == 1){
       return ataqueSeleccionado = pokemonElegido.attack1
    } else if (opcionesDeAtaque == 2){
       return ataqueSeleccionado = pokemonElegido.attack2
    }else if (opcionesDeAtaque == 3) {
       return ataqueSeleccionado = pokemonElegido.attack3
    } else{
        alert("no eligio un numero valido")
    }    
}

seleccion()

let nombreAtaqueSeleccionado = Object.keys(ataqueSeleccionado) // nombre del ataque (string)
let nombreAtaqueRival = Object.keys(ataqueRival) // nombre del ataque (string)


function calcularDaño() {
    return vidaRival = vidaRival - Object.values(ataqueSeleccionado)    
}
//                                              FUNCION PARA CALCULAR EL EFECTO DE GROWL Y THAIL WHIP

function ataqueNoOfensivo() {
    if (nombreAtaqueSeleccionado == "GROWL"){
        attack1PokemonRival = attack1PokemonRival - 2
        attack2PokemonRival = attack2PokemonRival - 2 
        attack3PokemonRival = attack3PokemonRival - 2    
    } else if (nombreAtaqueSeleccionado == "THAIL_WHIP") {
        attack1PokemonElegido = parseInt(attack1PokemonElegido) + 2
        attack2PokemonElegido = parseInt(attack2PokemonElegido) + 2
        attack3PokemonElegido = parseInt(attack3PokemonElegido) + 2
    } else {

    }  
}

function batalla () {
    alert(`${nombrePokemonElegido} uso ${nombreAtaqueSeleccionado}`)
    ataquesOfensivos.forEach(elem =>{
        if (elem == nombreAtaqueSeleccionado){
            calcularDaño()
        }else{
                       
        }
    })
    
    ataqueNoOfensivo()            
}

batalla()





                                                                    

