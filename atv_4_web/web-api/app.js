const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'cliente')));

const alunoRoutes = require("./routes/aluno.routes");
app.use("/alunos", alunoRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "cliente", "listar_alunos.html"));
});

module.exports = app;