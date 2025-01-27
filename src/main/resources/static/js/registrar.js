$(document).ready(function() {
//on ready
});

async function registrarUsuario(){
    let datos = {};
    datos.nombre = document.getElementById('txtNombre').value;
    datos.apellido = document.getElementById('txtApellido').value;
    datos.email = document.getElementById('txtEmail').value;
    datos.telefono = document.getElementById('txtTelefono').value;
    datos.password = document.getElementById('txtPassword').value;
    let repetirPassword = document.getElementById('txtRepeatPassword').value;

 if (datos.password !== repetirPassword) {
         alert("Las contraseñas no coinciden");
         return;
 }
  try {
         const request = await fetch("api/usuarios", {
             method: "POST",
             headers: {
                 "Accept": "application/json",
                 "Content-Type": "application/json",
             },
             body: JSON.stringify(datos),
         });

         if (!request.ok) {
             throw new Error(`Error HTTP: ${request.status}`);
         }

         const text = await request.text();
         const response = text ? JSON.parse(text) : null;

         console.log("Respuesta del servidor:", response);
         alert("Usuario registrado con éxito.");
     } catch (error) {
         console.error("Error al registrar usuario:", error);
         alert("Ocurrió un error al registrar el usuario.");
     }
 }