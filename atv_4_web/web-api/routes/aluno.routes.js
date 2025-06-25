const express = require("express");
const router = express.Router();
const AlunoService = require("../services/aluno.service");

router.get("/", (req, res) => {
    res.json(AlunoService.listar());
});

router.get("/:id", (req, res) => {
    const aluno = AlunoService.recuperar(req.params.id);
    if (aluno) res.json(aluno);
    else res.status(404).json({ erro: "Aluno não encontrado" });
});

router.post("/", (req, res) => {
    const { nome, curso, ira } = req.body;
    if (!nome || !curso || ira === undefined) {
        return res.status(400).json({ erro: "Campos obrigatórios ausentes" });
    }
    const aluno = AlunoService.criar({ nome, curso, ira });
    res.status(201).json(aluno);
});

router.put("/:id", (req, res) => {
    const aluno = AlunoService.atualizar(req.params.id, req.body);
    if (aluno) res.json(aluno);
    else res.status(404).json({ erro: "Aluno não encontrado" });
});

router.delete("/:id", (req, res) => {
    const resultado = AlunoService.apagar(req.params.id);
    res.json(resultado);
});

module.exports = router;