function obtenerFormulario(){
    var nombre = $("#nombre").val()
    var apellidos = $("#apellidos").val()
    var correo = $("#correo").val()
    var fecha = $("#fecha").val()
    var mensaje = $("#mensaje").val()
    var errorCampoRequerido = "<p class='text-danger errorForm'>*CAMPO REQUERIDO</p>"
    var errores = ""
    $(".errorForm").remove()

    if(nombre.length <= 1){
        errores = errores + "<p class= 'text-danger'>*NOMBRE ES CAMPO REQUERIDO</p>"
        $("#inputNombre").append(errorCampoRequerido)
    }
    if(apellidos.length == 0){
        errores = errores + "<p class= 'text-danger'>*APELLIDOS ES CAMPO REQUERIDO</p>"
        $("#inputApellidos").append(errorCampoRequerido)
    }
    if(correo.length == 0){
        errores = errores + "<p class= 'text-danger'>*CORREO ES CAMPO REQUERIDO</p>"
        $("#inputCorreo").append(errorCampoRequerido)
    }

    if(fecha.length == 0){
        errores = errores + "<p class= 'text-danger'>*LA FECHA ES CAMPO REQUERIDO</p>"
        $("#inputFecha").append(errorCampoRequerido)
    }
    if(mensaje.length == 0){
        errores = errores + "<p class= 'text-danger'>*EL MENSAJE ES CAMPO REQUERIDO</p>"
        $("#inputMensaje").append(errorCampoRequerido)
    }

    // errores 
    if (errores != ""){
        Swal.fire({
            title: "Error!",
            html: errores,
            icon: "error"
        }); 
    } else { 
        $("#errores").empty()
        Swal.fire({
            title: "Confirmación!",
            text: "Tu información ha sido enviada con éxito!",
            icon: "success"
        });
    }
    return false
}

function redireccionar(){
    location.href="formulario.html";
}

window.onscroll = function() {desplazarseArriba()};

function desplazarseArriba() {
  var topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function arriba() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById('clock').innerText = timeString;
  }
  setInterval(updateClock, 1000);
  updateClock();
