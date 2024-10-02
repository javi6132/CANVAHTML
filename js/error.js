window.onload = function () {

    //lett indica una variable a nivel de bloque {}
    // el llamado al componente html

    let canvas = document.getElementById("theLostCanvas");
    if (canvas // di el objeto existe
        &&  //and ambas deben de ser verdaderas 
           //  || or solamente una debe de ser verdadera. para que pueda serguir el orden de la funcion
           // ! not ! true 
    canvas.getContext) {
    let ctx = canvas.getContext("2d"); // definimos los ejes x,y
    if(ctx) {
        // cento frl canvas
        let centroX = canvas.width /2;
        let centroY = canvas.height /2;

        // definimos el radio. lo vamos a dividir en radio interno y externo

        let radioExterno = 95; // radio de las puas
        let radioInterno = 50; // radio del circulo
        let radioMedio = radioInterno * 1.6;
        let radioCentro = 20;

        // numero de puntos del engranaje
        let numeroPuntos = 40;

        // configuramos las lineas
        ctx.beginPath(); // nod indica el inicio de la linea
        ctx.lineJoin = "bevel"; 
        // al unir las lineas se utiliza una acabado redondo

        for(
            let i = 0; 
            // ; indica al compilador que salte la linea
            // se llama i por convencion
            i < numeroPuntos;
            // condicion logica tru o false
            i ++
            // al valor de i se le va a sumar 1
            // variable =+ variable = variable + variable
            // i -- restar el valor en 1
        ){
            if(
                i % 2 == 0
                // i que es el marcapasos de for 
                // % el residuo de i divido en 2
                // == igual
                // != diferente
            ){
                // si el valor es par
                radio = radioExterno;
            }else{
                // si no es par
                radio = radioInterno;
            }
            // creo el segmento del angulo se movera 
            //al pintar la linea
            let angulo = Math.PI * 2 /numeroPuntos * (i+1);

            // calculamos las coordenadas enternas.
            let x = (radio * Math.sin(angulo)) + centroX;
            let y = (radio * Math.cos(angulo)) + centroY;

            if( i == 0 ){
                ctx.moveTo(x,y); // inicio de linea
            }else{
                ctx.lineTo(x,y); // linea complementaria
            }
        }
            
            // configuracion de visual de las lineas
            ctx.closePath(); // cerramos la figura en el punto indicado
            // por defecto es el inicio (moveTo())
            ctx.linewidth = 5 ; // ancho de la linea
            ctx.strokeStyle = "orange"; // define el color enterno de la linea
            ctx.fillStyle = "red"; // define el color de relleno de la forma
            ctx.stroke(); // pintamos la linea

    }
  }
}
