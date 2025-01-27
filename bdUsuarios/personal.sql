CREATE DATABASE PERSONAL;
USE PERSONAL;
CREATE TABLE usuario (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(40) NOT NULL,
    apellido VARCHAR(40) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefono VARCHAR(40),
    contraseña VARCHAR(40) NOT NULL
);

DELIMITER //
CREATE PROCEDURE insertar_usuario(
    IN p_nombre VARCHAR(40),
    IN p_apellido VARCHAR(40),
    IN p_email VARCHAR(255),
    IN p_telefono VARCHAR(40),
    IN p_contraseña VARCHAR(40)
)
BEGIN
    INSERT INTO usuario (nombre, apellido, email, telefono, contraseña)
    VALUES (p_nombre, p_apellido, p_email, p_telefono, p_contraseña);
END //
DELIMITER ;


CALL insertar_usuario('Juan', 'Pérez', 'juan.perez@example.com', '123456789', 'password123');
CALL insertar_usuario('María', 'López', 'maria.lopez@example.com', '987654321', 'password456');
CALL insertar_usuario('Carlos', 'García', 'carlos.garcia@example.com', '555123456', 'password789');
CALL insertar_usuario('Ana', 'Martínez', 'ana.martinez@example.com', '111222333', 'password321');
CALL insertar_usuario('Luis', 'Hernández', 'luis.hernandez@example.com', '444555666', 'password654');
CALL insertar_usuario('Sofía', 'Rodríguez', 'sofia.rodriguez@example.com', '777888999', 'password987');
CALL insertar_usuario('Miguel', 'Torres', 'miguel.torres@example.com', '222333444', 'password111');
CALL insertar_usuario('Laura', 'Gómez', 'laura.gomez@example.com', '666777888', 'password222');
CALL insertar_usuario('Diego', 'Ramírez', 'diego.ramirez@example.com', '888999000', 'password333');
CALL insertar_usuario('Isabel', 'Vargas', 'isabel.vargas@example.com', '999000111', 'password444');


select * from usuario
