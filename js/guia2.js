window.onload = function(){
    let canvas = 
    document.getElementById("theLostCanvas");
    if(canvas && canvas.getContext){
       let ctx = canvas.getContext("2d");
        if(ctx){
           //ancho de linea 
           ctx.lineWidth = 15;
           ctx.strokeStyle = "yellow"; // borde amarillo
           
           //trazado 
           ctx.beginPath(); //inicia la linea 
           ctx.lineCap = "round"; // punta de la linea redonda
            ctx.moveTo(50,50);// inicio del punto
            ctx.lineTo(350,50);// final del punto
            ctx.stroke();

            ctx.strokeStyle = "orange";
            ctx.lineCap = "square";
            ctx.beginPath();
            ctx.moveTo(25, 100);
            ctx.lineTo(350,100);
            ctx.stroke();

            //linea 3
            ctx.strokeStyle = "blue";
            ctx.lineCap = "butt";
            ctx.beginPath();
            ctx.moveTo(50, 150);
            ctx.lineTo(350,150);
            ctx.stroke();
        }
    }else{
        alert("su navegador no soporta canvas");
    }
}