const express = require("express");
const conectarDB = require("./config/db");

// Crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar express.json
app.use(express.json({ extended: true }));

// Puerto de la app
const PORT = process.env.PORT || 4000;

//Importar rutas
app.use("/api/v1/usuarios", require("./routes/usuarios"));
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/proyectos", require("./routes/proyectos"));
app.use("/api/v1/tareas", require("./routes/tareas"));

// Arrancar la app
app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
