const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

// Crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar cors
app.use(cors());

// Habilitar express.json
app.use(express.json({ extended: true }));

// Puerto de la app
const port = process.env.port || 4000;

//Importar rutas
app.use("/api/v1/usuarios", require("./routes/usuarios"));
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/proyectos", require("./routes/proyectos"));
app.use("/api/v1/tareas", require("./routes/tareas"));

// Arrancar la app
app.listen(port, "0.0.0.0", () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
