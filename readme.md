# Snake Game🐍
Un pequeño juego hecho 100% en Javascript, aprovechando las grids de CSS para hacer el clasico juego de la serpiente
> Proyecto creado para poner en practica lo aprendido en la materia EPyA (Expresion de Problemas y Algoritmos)  de la Licenciatura en Sistemas en la UNLa (Universidad Nacional de Lanus)

## Controles⌨️
Una vez apretado el boton "Empezar Juego" se activan los controles

*Controles en Pc:*

W: Arriba
A: Izquierda
S: Abajo 
D: Derecha

*Controles en Celular aun no Disponibles*

## Como Funciona el Codigo❓🤔

La aplicación web mediante CSS crea una grilla de 10x10 en el cuadro (boardGame) que se ve en el centro de la pantalla. Mediante codigo Javascript, al apretar el boton "Empezar Juego" crea Divs que se ubicaran en las celdas correspondientes de la matriz, estos Divs mostraran la ubicación de la serpiente. A su vez se generan 2 vectores que contendran la ubicacion en X e Y del jugador y la manzana.

Posteriormente la app mediante funciones creadas que hacen modular a la app, evalua movimiento del jugador, creacion de manzanas, contador, creacion e simulacion de la cola de la serpiente. y condiones de perdida del juego. A continuacion el codigo principal donde sucede todo el juego

    let gameProgress =  setInterval(()=>{
    	i++;
    	if(i ===  1){
    		inicialDirection();
    		playerChangeDirection();
    	};
    	playerDirectionController();
    	appleAppears();
    	havePlayerAteApple();
    	havePlayerLost();
    },clockGame)

 

### *Creado por Ignacio Garcia👨🏻‍💻*