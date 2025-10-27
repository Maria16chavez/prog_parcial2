# Proyecto parcial 2 - Programación III - S6A
## Descripción
🏆 En el siguiente proyecto desarrollamos una aplicación web funcional que integre los conocimientos 
adquiridos durante el semestre: HTML5, CSS, JavaScript, Node.js con Express, y conexión a base de datos MySQL.
## Contenido📚
- [⚠ Requisitos previos](#1️⚠-requisitos-previos) 
- [📲 Instalación](#📲-instalación)
- [🛠 Estructura del proyecto](#🛠-estructura-del-proyecto)
- [1️⃣ Tema 1: HTML5](#1️⃣-tema-1-HTML5) 
- [2️⃣ Tema 2: CSS](#2️⃣-tema-2-CSS) 
- [3️⃣ Tema 3: JavaScript y fundamentos](#3️⃣-tema-3-javaScript-y-fundamentos) 
- [4️⃣ Tema 4: JavaScript POO y eventos](#4️⃣-tema-4-JavaScript-POO-y-eventos) 
- [5️⃣ Tema 5: Introducción a Node.js y Express](#5️⃣-tema-5-introducción-a-Node.js-y-Express)
- [6️⃣ Tema 6: Rutas y controladores](#6️⃣-tema-6-rutas-y-controladores)
- [7️⃣ Tema 7: Ciclo Petición-Respuesta](#7️⃣-tema-7-ciclo-petición-respuesta)
- [8️⃣ Tema 8: Plantillas de Vista (EJS)](#8️⃣-tema-8-plantillas-de-vista-ejs)
- [9️⃣ Tema 9: Sesiones y cookies](#9️⃣-tema-9-sesiones-y-cookies)
- [🔟 Tema 10: Conexión a base de datos](#🔟-tema-10-conexión-a-base-de-datos)
- [🔧 Tecnologías usadas](#🔧-tecnologías-usadas)
- [👩‍💻 Team](#👩‍💻-team)

## ⚠ Requisitos previos
- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/) (gestor de paquetes)
- Editor de código (VS Code recomendado)
- Extensión **Thunder Client** o **Postman** para probar endpoints
## 📲 Instalación
1. Clona o descarga este proyecto.  
2. Abre una terminal en la carpeta del proyecto.  
3. Instala las dependencias:
   npm install
## 🛠 Estructura del proyecto
<img width="282" height="597" alt="image" src="https://github.com/user-attachments/assets/8c6d1d15-490b-448c-a207-e8f9a8e29d1a" />


## 1️⃣ Tema 1: Ciclo Petición-Respuesta
Objetivo: crear una página HTML5 que contenga:
- Un encabezado principal con el nombre de los participantes
- Una lista ordenada con 3 tecnologías web
- Una imagen con atributo alt
- Un formulario con campos: nombre, email y botón envia

🖼 Resultado visual:

<img width="724" height="246" alt="image" src="https://github.com/user-attachments/assets/2c0f0b31-58cc-4d8e-b553-0ffdb3cd07b3" />

<img width="921" height="220" alt="image" src="https://github.com/user-attachments/assets/ed56c135-5abe-4c49-bfe6-ceb1d6061bad" />

<img width="922" height="213" alt="image" src="https://github.com/user-attachments/assets/07211aa5-2f7b-4596-b69e-3ac173684caf" />

## 2️⃣ Tema 2: CSS
Objetivo: Crear estilos CSS para un diseño responsive que:
- Tenga un contenedor centrado de máximo 1000px
- Use Flexbox para organizar 3 tarjetas en fila
- En pantallas menores a 768px, las tarjetas se apilen verticalmente

🖼 Resultado visual:

<img width="779" height="411" alt="image" src="https://github.com/user-attachments/assets/4869f0d0-05b5-48ca-a5ef-4a9e76c2afb9" />

<img width="781" height="208" alt="image" src="https://github.com/user-attachments/assets/08c07536-b5ad-4a36-bf12-ae556faacd09" />

⬇ Algo de código:

<img width="486" height="204" alt="image" src="https://github.com/user-attachments/assets/c984c5aa-cade-4bd8-b563-1c0220696446" />

## 3️⃣ Tema 3: JavaScript y fundamentos
Objetivo: Escribe una función en JavaScript que:
- Reciba un array de números
- Retorne la suma de todos los números pares
- Use el método filter() y reduce()

🖼 Resultado visual:

<img width="782" height="254" alt="image" src="https://github.com/user-attachments/assets/31fc0702-68b5-4ed2-91ed-e321302e3e07" />

⬇ Algo de código:

<img width="779" height="335" alt="image" src="https://github.com/user-attachments/assets/c83c740f-9c43-46fd-a623-51e69916478e" />

## 4️⃣ Tema 4: JavaScript POO y eventos
Objetivo: Crea una clase Producto con:
- Propiedades: nombre, precio, stock
- Método para calcular el precio con IVA (19%)
- Método para verificar si hay stock disponible

🖼 Resultado visual:

<img width="781" height="332" alt="image" src="https://github.com/user-attachments/assets/d1b78e1f-71aa-44d3-8a04-580c6a2f5af1" />

<img width="783" height="176" alt="image" src="https://github.com/user-attachments/assets/5f7e0c6c-284d-4a0b-a344-5c7bb5366d3b" />

⬇ Algo de código:

<img width="773" height="306" alt="image" src="https://github.com/user-attachments/assets/6a280b3c-e078-4ac0-8b61-7c24681a71b4" />

<img width="703" height="283" alt="image" src="https://github.com/user-attachments/assets/f5f5be1f-2ae1-4304-bf1d-53a06aba557c" />

## 5️⃣ Tema 5: Introducción a Node.js y Express
Objetivo: Crea una aplicación Express que:
- Tenga una ruta /inicio que responda con "Bienvenido"
- Una ruta /api/hora que retorne la hora actual en formato JSON
- Configure el puerto 3000

🖼 Resultado visual:

<img width="606" height="238" alt="image" src="https://github.com/user-attachments/assets/3ffed518-8494-4c7c-a4dc-5e3b5a74e1db" />

⬇ Algo de código:

<img width="498" height="312" alt="image" src="https://github.com/user-attachments/assets/ada91421-b5d5-461e-af14-561036c3c688" />

<img width="494" height="336" alt="image" src="https://github.com/user-attachments/assets/fe3ab257-3121-4b66-b20d-d54c0fb7fbf3" />

## 6️⃣ Tema 6: Rutas y controladores
Objetivo: Implementa un CRUD completo para "productos" con rutas:
- GET /productos - Listar todos
- GET /productos/:id - Obtener uno
- POST /productos - Crear
- PUT /productos/:id - Actualizar
- DELETE /productos/:id - Elimina

🖼 Resultado visual:

<img width="788" height="313" alt="image" src="https://github.com/user-attachments/assets/a6f44d2d-1e70-4d8b-8bb8-c3d9054bb183" />

💥 Resultados vsibles de consultas con Thunder Client:

<img width="782" height="246" alt="image" src="https://github.com/user-attachments/assets/586f985d-c641-4782-909f-3e39bd0c1d01" />

<img width="785" height="234" alt="image" src="https://github.com/user-attachments/assets/1fbbfe09-134b-4e3f-be40-c5e4884eb3c9" />

⬇ Algo de código:

<img width="643" height="355" alt="image" src="https://github.com/user-attachments/assets/fa33891c-16ac-4502-a458-38e0298d9387" />

<img width="644" height="199" alt="image" src="https://github.com/user-attachments/assets/9213b882-a8ff-4cba-844a-4d81dc6bb19f" />

## 7️⃣ Tema 7: Ciclo Petición-Respuesta
Objetivo: Comprender cómo Express maneja las solicitudes (req) y respuestas (res).

Archivo: middlewareActualizado.js

🔹 Endpoint /registro

Valida los campos nombre, email y password.
Si faltan datos → responde con código 400 Bad Request.
Si todo está correcto → responde con 201 Created.

Ejemplo de prueba en Thunder Client:
Método: POST
URL: http://localhost:3000/registro
Body (JSON):

<img width="318" height="143" alt="image" src="https://github.com/user-attachments/assets/44c6c3cf-5e6c-460e-9adb-b74306a1ccaa" />

Respuesta esperada:

<img width="1077" height="296" alt="image" src="https://github.com/user-attachments/assets/e01d6c39-982b-4451-8a28-da68f1c33f2a" />

## 8️⃣ Tema 8: Plantillas de Vista (EJS)
Objetivo: Usar el motor de plantillas EJS para renderizar vistas dinámicas.
Archivo: views/productos.ejs

🔹 Ruta /productos

Renderiza una tabla con una lista de productos y precios formateados en pesos colombianos.

Ejemplo de datos:

<img width="396" height="219" alt="image" src="https://github.com/user-attachments/assets/a0d8ffd2-b0f0-4414-b24e-f9cc46bbfc36" />

🔹 Resultado visual:

<img width="831" height="415" alt="image" src="https://github.com/user-attachments/assets/fa990b7c-7f7d-4d3c-83d1-745382061c74" />

Una tabla HTML con los productos renderizados dinámicamente.

## 9️⃣ Tema 9: Sesiones y cookies
Objetivo: Implementar un sistema de login que:
- Guarde el usuario en sesión al hacer login
- Cree un middleware que verifique si hay sesión activa
- Proteja una ruta /admin que solo usuarios autenticados puedan acceder

🔹 Sistema de Autenticación con Sesiones

🖥 Funcionalidades Implementadas:
  - Login/logout con express-session
  - Middleware de autenticación (requireAuth)
  - Rutas protegidas (/admin, /dashboard)
  - Cookies para preferencias
    
⬇ Código:

<img width="640" height="144" alt="cap1" src="https://github.com/user-attachments/assets/5b0dfed4-2c0f-44c6-842e-e934b7cdffcc" />

<img width="401" height="429" alt="cap2" src="https://github.com/user-attachments/assets/8c632ce5-2e69-4e55-9f40-6a9fe512faa4" />

## 🔟 Tema 10: Conexión a base de datos
Objetivo: Implementar funciones para:
- Obtener todos los productos de la tabla productos
- Buscar un producto por ID
- Actualizar el precio de un producto
- Usar async/await y manejo de errores

🔹 API de Productos con MySQL

🖥 Funcionalidades Implementadas:
  - CRUD completo de productos
  - Conexión MySQL con mysql2
  - Consultas preparadas para seguridad
  - Async/await y manejo de errores

⬇ Código:

<img width="695" height="343" alt="cap3" src="https://github.com/user-attachments/assets/3d5c92c0-76a7-4621-a3b1-5132850488db" />

<img width="693" height="93" alt="cap4" src="https://github.com/user-attachments/assets/9ca2cdeb-754b-405f-a8be-91cc73b14df1" />

## 🔧 Tecnologías usadas
- VisualStudio Code
- Node.js (npm install)
- Thunder Client

## 👩‍💻 Team
- Esteban Suárez
- Natalia Cifuentes
- Mariangel Beltrán
- Carolina Gutiérrez
- María Chávez
