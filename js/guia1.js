window.onload = function(){
    let canvas = 
    document.getElementById("theLostCanvas");
    if(canvas && canvas.getContext){
       let ctx = canvas.getContext("2d");
        if(ctx){

            // colores
            ctx.strokeStyle = "#ff0000"; //pinta la parte de afuera 
            ctx.fill = "yellow"; // colorea la parte interna
            ctx.lineWidth = 5; // grosor de la linea
            //x,y,w,h
            ctx.fillRect(50,50,100,100);//crea una linea
            ctx.strokeRect(50,50,100,100);//sombra del cuadro 
            
            ctx.fillStyle = "rgb(0,42,255)";
            ctx.fillRect(200,50,100,100);//crea una linea
            ctx.strokeRect(200,50,100,100);//sombra del cuadro 
            
        }



    }else{
        alert("su navegador no soporta canvas");
    }
}
