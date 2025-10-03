# LogisticsPro - Sistema de Gestión de Envíos

Este proyecto es una aplicación web desarrollada con **Node.js** y **Express**, con vistas en **EJS** y estilos personalizados inspirados en la estética de la página de **TCC**.  
El sistema permite registrar envíos, ver el historial de pedidos y contará con autenticación de usuarios y seguimiento de envíos en futuras versiones.

---

##  Funcionalidades Actuales

- Registro de envíos con formulario estilizado.
- Validación en los campos:
  - **ID del envío** → solo números.
  - **Cliente, destino, tipo de paquete** → solo letras.
- Vista de **“Ver envíos”** con tabla centrada y moderna.
- Botones animados con redirecciones rápidas:
  - Registrar nuevo envío.
  - Volver al inicio.
- Footer fijo con fondo rojo.
- Preparado para conexión con base de datos y autenticación.

---

##  Estructura del Proyecto

logisticspro/
│
├── app.js # Archivo principal de la aplicación
├── package.json # Dependencias del proyecto
│
├── public/  (CSS, imágenes, JS)
│ └── css/
│ └── styles.css
│
├── views/ # Vistas EJS
│ ├── index.ejs
│ ├── register.ejs
│ ├── orders.ejs
│ └── partials/
│ ├── header.ejs
│ ├── navbar.ejs
│ └── footer.ejs
│
└── README.md 


---

1.  Clonar el repositorio
```bash
git clone https://github.com/tuusuario/logisticspro.git
cd logisticspro

2. Instalar dependencias
npm install

3. Iniciar el servidor
node app.js


La aplicación estará disponible en:
👉 http://localhost:3000