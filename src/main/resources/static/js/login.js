$(document).ready(function() {
//on ready
});

async function iniciarSesion() {
    let datos = {};
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;

    try {
        const request = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
        });

        const respuesta = await request.text();
        if (respuesta != 'FAIL') {
            localStorage.token=respuesta;
            localStorage.email=datos.email;
            window.location.href = 'usuarios.html';
            alert("Inicio de sesión exitoso");
        } else {
            alert("Credenciales inválidas");
        }
    } catch (error) {
        console.error("Error al iniciar sesión:", error.message);
        alert("Ocurrió un error al iniciar sesión.");
    }
}