// Selecciona el primer elemento del documento que tenga la clase CSS ".btn" (bootstrap)
//y lo asigna a la variable "enviarBtn". Este código se utiliza para 
//seleccionar un botón de envío en el formulario. 
var enviarBtn = document.querySelector('.btn');

// Agrega un event listener al botón seleccionado. El event listener se activa cuando
// se hace clic en el botón. La función se ejecuta en respuesta al evento de clic.
enviarBtn.addEventListener('click', function (event) {
    event.preventDefault(); //esta línea evita que el formulario se envíe.

//Imprime un mensaje en la consola del navegador. 
//Este mensaje se mostrará cuando se haga clic en el botón y se ejecute la función 
//del event listener. El mensaje indica que el formulario ha sido enviado 
//correctamente y que las consultas serán resueltas pronto.
    console.log("Tu formulario ha sido enviado correctamente; tus consultas serán resueltas a la brevedad");

// Crea un nuevo elemento de párrafo (<p>) en el documento y lo asigna a la variable "mensaje
    var mensaje = document.createElement('p');
//Establece el contenido de texto del elemento de párrafo 
//creado en el paso anterior con el mensaje que se muestra en la pagina. 
    mensaje.textContent = "Tu formulario ha sido enviado correctamente; tus consultas serán resueltas a la brevedad.";
// Agrega la clase CSS al elemento de párrafo. Esto se hace para aplicar estilos específicos 
//al mensaje, como colores, fuentes o márgenes personalizados.
    mensaje.classList.add('mensaje-estilo');

    // Inserta el mensaje debajo del botón de enviar.
    enviarBtn.parentNode.insertBefore(mensaje, enviarBtn.nextSibling);
});