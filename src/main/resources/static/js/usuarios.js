// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#usuarios').DataTable();
});

async function cargarUsuarios(){
            const request = await fetch('api/usuarios', {
                method: 'GET',
                headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'Authorization': 'Bearer ' + localStorage.token }
            });

            const usuarios = await request.json();
            let listadoHTML = '';
            for (let usuario of usuarios) {
                let botonEliminar = `<a href="#" onclick="eliminarUsuario(${usuario.id})" class="btn btn-danger btn-circle btn-sm">
                                     <i class="fas fa-trash"></i></a>`;
                let usuarioHTML = `<tr><td>${usuario.id}</td><td>${usuario.nombre} ${usuario.apellido}</td>
                                   <td>${usuario.email}</td><td>${usuario.telefono}</td><td>${botonEliminar}</td></tr>`;
                listadoHTML += usuarioHTML;
            }
            document.querySelector('#usuarios tbody').innerHTML = listadoHTML;
}

function getHeaders() {
       return {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'Authorization': 'Bearer ' + localStorage.token
       };
}

async function eliminarUsuario(id){
    if(!confirm('¿Está seguro que desea eliminar el usuario?' + id)){
    return;
    }
    const request = await fetch('api/usuarios/'+ id,{
        method: 'DELETE',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'Authorization': 'Bearer ' + localStorage.token}
    });
    location.reload();
}

