package com.example.proyecto.controllers;

import com.example.proyecto.dao.UsuarioDao;
import com.example.proyecto.models.Usuario;
import com.example.proyecto.utils.JWTUtil;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioDao usuarioDao;
    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/usuarios", method = RequestMethod.GET)
    public List<Usuario> obtenerListaUsuario(@RequestHeader(value = "Authorization") String token) {
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
        } else {
            return new ArrayList<>();
        }
        String usuarioId = jwtUtil.getKey(token);
        if (usuarioId == null) {
            return new ArrayList<>();
        }
        List<Usuario> usuarios = usuarioDao.obtenerListaUsuario();
        return usuarios;
    }


    @RequestMapping (value= "api/usuarios",method = RequestMethod.POST)
    public void registrarUsuario(@RequestBody @NotNull Usuario usuario) {
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(1, 1024, 1, usuario.getPassword());
        usuario.setPassword(hash);
        usuarioDao.registrar(usuario);
    }

    @RequestMapping (value= "api/usuarios/{id}",method = RequestMethod.DELETE)
    public void eliminarUsuario(@PathVariable Long id) {
        usuarioDao.eliminarUsuario(id);
    }

    @RequestMapping (value= "api/usuarios/{id}",method = RequestMethod.GET)
    public Usuario obtenerUsuario(@PathVariable Long id) {
        Usuario usuario = new Usuario();
        usuario.setId(id);
        usuario.setNombre("Juanhjghjkhjk");
        usuario.setApellido("Perez");
        usuario.setEmail("juan@gmail.com");
        usuario.setTelefono("1234567890");
        usuario.setPassword("1234");
        return  usuario;
    }
}