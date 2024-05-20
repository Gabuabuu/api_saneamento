import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.send({message: "Rota raiz"})
    console.log({ message: "Rodando servidor" })
})

export default app