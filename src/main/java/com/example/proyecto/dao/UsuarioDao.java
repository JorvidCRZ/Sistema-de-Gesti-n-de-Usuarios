package com.example.proyecto.dao;

import com.example.proyecto.models.Usuario;

import java.util.List;

public interface UsuarioDao {

     Usuario getUsuario(Long id);

     List<Usuario> obtenerListaUsuario();

    void eliminarUsuario(Long id);

    void registrar(Usuario usuario);

    Usuario obtenerUsuarioPorCredenciales(Usuario usuario);

}
