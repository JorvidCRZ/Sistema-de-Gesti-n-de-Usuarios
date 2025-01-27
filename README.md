# Proyecto de Gestión de Usuarios

Este proyecto es una aplicación basada en **Spring Boot** y **JavaScript**, diseñada para gestionar usuarios a través de una interfaz web y una API REST. Incluye funcionalidades como listar, registrar, eliminar y autenticar usuarios, asegurando la seguridad mediante JWT y el uso de la librería **Argon2** para contraseñas.

## Estructura del Proyecto

### Backend

El backend está desarrollado en **Spring Boot** y organiza su código en los siguientes paquetes principales:

- **`controllers`**: Contiene las clases controladoras que manejan las solicitudes HTTP.
- **`dao`**: Define el acceso a la base de datos y las operaciones CRUD (Create, Read, Update, Delete).
- **`models`**: Incluye las clases de entidades como `Usuario`, que representan las tablas de la base de datos.
- **`utils`**: Herramientas auxiliares como `JWTUtil` para gestionar la autenticación y validación de tokens.

#### Principales Endpoints de la API

1. **`GET /api/usuarios`**:
   - Lista todos los usuarios registrados.
   - Requiere un token de autenticación.

2. **`POST /api/usuarios`**:
   - Registra un nuevo usuario.
   - Se utiliza **Argon2** para encriptar la contraseña.

3. **`DELETE /api/usuarios/{id}`**:
   - Elimina un usuario por su ID.

4. **`GET /api/usuarios/{id}`**:
   - Recupera la información de un usuario específico por su ID.

#### Seguridad

- **JWT**: Se generan tokens al iniciar sesión y se usan para proteger las rutas privadas de la API.
- **Hashing de contraseñas**: Se utiliza **Argon2** para almacenar las contraseñas de forma segura.
  
#### Base de Datos

- La aplicación utiliza **MySQL** como sistema de base de datos.
- Se gestiona una tabla `usuario` que almacena la información de los usuarios.
- Los campos principales en la base de datos incluyen:
  - `id` (clave primaria)
  - `nombre`
  - `apellido`
  - `email`
  - `telefono`
  - `password` (encriptada con Argon2)


### Frontend

El frontend está desarrollado utilizando **HTML**, **CSS** y **JavaScript**, y emplea **jQuery** y el plugin **DataTables** para la interacción dinámica con la interfaz.

#### Principales Funcionalidades

1. **Autenticación de Usuarios**:
   - La función `iniciarSesion` envía las credenciales al endpoint `/api/login`.
   - Si las credenciales son válidas, se guarda el token en `localStorage` para futuras solicitudes.

2. **Listar Usuarios**:
   - Utiliza el endpoint `GET /api/usuarios` para obtener todos los usuarios y mostrarlos en una tabla interactiva.

3. **Eliminar Usuarios**:
   - Ofrece un botón para eliminar usuarios mediante el endpoint `DELETE /api/usuarios/{id}`.

### Recursos

En la carpeta `resources` se incluyen los siguientes elementos:

- **`static/js`**: Archivos JavaScript para las funciones del frontend.
- **`static/css` y `static/scss`**: Estilos utilizados para la interfaz.
- **`static/vendor`**: Dependencias de terceros, como plantillas HTML.

## Modelo de Usuario

El modelo `Usuario` representa la entidad que se almacena en la base de datos. Está mapeado con **JPA** y contiene los siguientes campos:

- `id` (clave primaria)
- `nombre`
- `apellido`
- `email`
- `telefono`
- `password` (almacenada de forma encriptada)

```java
@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private String telefono;
    private String password;
}
